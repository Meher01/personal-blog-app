import nodemailer from 'nodemailer';

const createTransporter = () => {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });
};

export async function sendBlogNotificationEmail({ blogTitle, blogDescription, blogUrl, subscribers }) {
  if (!subscribers?.length) {
    return { sent: 0, skipped: true };
  }

  const transporter = createTransporter();

  if (!transporter) {
    console.warn('SMTP settings are not configured. Skipping reminder emails.');
    return { sent: 0, skipped: true };
  }

  const recipients = subscribers
    .map((subscriber) => subscriber.email)
    .filter(Boolean);

  if (!recipients.length) {
    return { sent: 0, skipped: true };
  }

  const fromAddress = process.env.SMTP_FROM || process.env.SMTP_USER;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const safeDescription = blogDescription?.replace(/<[^>]*>/g, '').slice(0, 220) || 'A new article has just been published.';

  await transporter.sendMail({
    from: fromAddress,
    to: recipients,
    subject: `New blog post: ${blogTitle}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
        <h2 style="color: #db2777;">A new blog post is live</h2>
        <p><strong>${blogTitle}</strong></p>
        <p>${safeDescription}</p>
        <p>
          <a href="${siteUrl}${blogUrl}" style="background-color: #db2777; color: white; padding: 10px 16px; text-decoration: none; border-radius: 6px; display: inline-block;">
            Read the full post
          </a>
        </p>
        <p style="font-size: 12px; color: #6b7280;">You received this because you subscribed to updates from the blog.</p>
      </div>
    `,
    text: `${blogTitle}\n\n${safeDescription}\n\nRead it here: ${siteUrl}${blogUrl}`,
  });

  return { sent: recipients.length, skipped: false };
}
