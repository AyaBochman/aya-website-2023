import Project from "./project";

export default function Projects() {
  return (
    <section className="py-16 px-8 lg:px-32 flex flex-col items-center gap-10">
      <img src={'gradient2.png'} alt={'gradient'} className='absolute -z-10 bottom-96 right-0' />
      <h2 className="text-primary font-semibold">WORK</h2>

      <p className="text-slate-500 max-w-[480px] leading-7">
        Since 2019, I&apos;ve had the privilege of working in the tech sectors
        of both Israel and Europe, gaining experience from both established
        corporations and agile startups alike. I also took a brief dive into freelancing.
      </p>
      <h3 className="text-slate-500 font-light text-sm">LATEST PROJECTS</h3>
      <div className="flex flex-wrap gap-4 justify-center">
        {/* <Project name="Udemy clone" url="https://api.video/blog/tutorials/how-to-create-a-udemy-like-learning-platform/" imageSrc="/udemy.png" tags={['next.js', 'react', 'blog', 'collaboration']} /> */}
        <Project name="FASHN" url="https://www.fashn.ai/" imageSrc="/fashn.png" tags={['next.js', 'react', 'tailwindcss', 'supabase']} />
        <Project name="Snapapa" url="https://www.snapapa.com/" imageSrc="/snapapa.png" tags={['next.js', 'react', 'tailwindcss']} />
        <Project name="dashboard" url="https://dashboard.api.video/" imageSrc="/dashboard.png" tags={['next.js', 'react', 'styled components']} />
      </div>

    </section>
  );
}
