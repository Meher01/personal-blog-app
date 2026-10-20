# 🌸 Personal Blog Web Application 💻✨

Welcome to my Personal Blog Web Application! This project is a simple, creative, and engaging space built to share thoughts, experiences, hobbies, technology insights, and lifestyle content. 

Building this application provided hands-on experience in full-stack web development, covering frontend layout designs, database integrations, API communications, real-time notifications, and responsive UI structures.

## 🚀 Live Demo

Explore the live application here:  
🌐 **[Personal Blog App (Live Demo)](https://personal-blog-app-red.vercel.app/)**

## 🛠️ Tech Stack Used

- **Framework:** Next.js
- **UI Library:** React
- **Language:** JavaScript
- **Styling:** Tailwind CSS
- **Database:** MongoDB
- **ODM:** Mongoose
- **HTTP Client:** Axios
- **Notifications:** React Toastify
- **Code Quality:** ESLint

## 🔐 Environment variables

The blog API requires these variables in local `.env.local` and in the Vercel
project settings for the Production environment:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>/<database>
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=<gmail-address>
SMTP_PASS=<gmail-app-password>
SMTP_FROM=<gmail-address>
NEXT_PUBLIC_SITE_URL=https://personal-blog-app-red.vercel.app
```

After changing a Vercel variable, redeploy the project. MongoDB Atlas must also
allow connections from Vercel by configuring its network access rules.


## ✨ Features

- **Clean & Creative UI:** Polished interface optimized for laptop and desktop views.
- **Categorized Content:** Structured spaces tailored for different topics:
  - 💻 Technology
  - 🎨 Hobbies
  - 🌸 Lifestyle
- **Email Subscription:** Interface built for handling newsletter signups and user notifications.
- **Hidden Admin Panel:** A secure, private administrative control dashboard built exclusively for management. 😉
- **Responsive Layout:** Designed to ensure smooth transitions between desktop monitors and mobile devices.

## 📌 Project Status

The desktop and mobile interfaces are modelled to deliver a smooth, reliable, and consistent experience across varying screen dimensions. Continuous enhancements are actively being made to refine responsiveness and add features.
