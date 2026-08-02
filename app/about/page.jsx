import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className='min-h-screen bg-white py-10 px-5 md:px-12 lg:px-24 border border-pink-200/400 shadow-lg shadow-pink-200/50 bg-gradient-to-b from-pink-100 to-purple-200'>
      <div className='mx-auto max-w-5xl rounded-[32px] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)] p-8 md:p-12'>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
            <div> 
              <p className='text-sm font-bold uppercase tracking-[0.35em]'>About Me</p>
              <br/>
              <h1 className='text-4xl font-extrabold text-pink-600 sm:text-5xl'>Lasya Lingam</h1>
            </div>
            <Link href='/' className='bold inline-flex items-center gap-2 font-medium py-1 py-3 sm:py-3 sm:px-6 border border-solid border-black active:bg-pink-400 hover:text-white hover:bg-pink-400' style={{ boxShadow: '0px 6px 6px rgba(241, 17, 129, 0.95)', borderRadius: '12px', cursor: 'pointer' }}>
              Back to Home
            </Link>
          </div>

          <div className='space-y-6 text-slate-700'>
            <p className='text-lg leading-8'>
              I am an undergraduate developer with a strong interest in <strong>backend development, Java, cloud computing, and DevOps</strong>. I enjoy building practical, scalable applications and continuously improving my understanding of software engineering and modern development practices.
            </p>
            <p className='text-lg leading-8'>
              My current focus is on strengthening my <strong>backend development skills with Java and Spring Boot</strong>, along with databases, REST APIs, authentication, and application architecture. I also have hands-on experience working with technologies such as <strong>Node.js, Express, React, Next.js, TypeScript, MongoDB, PostgreSQL, Firebase, and Tailwind CSS</strong> through academic and personal projects.
            </p>
            <p className='text-lg leading-8'>
              I am also actively exploring <strong>AWS and cloud technologies</strong>, with the goal of learning how to design, deploy, and maintain reliable cloud-based applications. I am particularly interested in combining backend engineering with <strong>cloud infrastructure, automation, CI/CD, and DevOps practices</strong>.
            </p>
            <p className='text-lg leading-8'>
              I believe in learning by building, so I continuously work on projects that help me turn theoretical concepts into practical skills. My short-term goal is to grow into a strong <strong>backend developer</strong> and begin my professional career in software development, while my long-term goal is to become a <strong>Cloud/DevOps Engineer</strong> capable of building and managing production-ready systems.
            </p>
          </div>

          <div className='rounded-[28px] border border-slate-200 bg-pink-50 p-6 md:p-8'>
            <div className='grid gap-6 md:grid-cols-2'>
              <div>
                <h2 className='text-xl font-semibold text-slate-900'>Currently Learning</h2>
                <p className='mt-3 text-base leading-7 text-slate-700 font-bold'>Java • Spring Boot • REST APIs • SQL • AWS • Git & GitHub Cloud & DevOps</p>
              </div>
              <div>
                <h2 className='text-xl font-semibold text-slate-900'>Interests</h2>
                <p className='mt-3 text-base leading-7 text-slate-700 font-bold'>Backend Development • Cloud Computing • DevOps • System Design • APIs • Database Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
