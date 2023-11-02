import Status from './status';
import { Raleway } from 'next/font/google';
import Image from 'next/image';
import Button from './button';
import { Download } from 'react-feather';

const raleway = Raleway({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function Hero() {
  return (
    <section
      className="w-full px-8 py-16 flex flex-col items-center gap-12 mx-auto flex-wrap xl:w-[1000px] xl:flex-nowrap xl:flex-row justify-between"
      id="about"
    >
      <img src={'gradient1.png'} alt={'gradient'} className='absolute -z-10 -left-20 top-72'/>
      <div className="flex flex-col gap-6">
        <Status />
        <h1 className={`${raleway.className} text-4xl lg:text-5xl font-semibold`}>
          Hey, I&apos;m Aya 👋
        </h1>
        <p className="text-slate-500 max-w-[480px] leading-7">
          I&apos;m a <b>Full Stack Web Developer</b> with over 4 years of
          experience.
          <br /> I came from the designing world and fell in love with the way
          code is bringing everything to life. I enjoy building web applications
          from scratch, from <b>prototyping</b> to <b>developing</b>, motivated
          to create the best experience possible.
          <br />
        </p>
        <p className="text-slate-500 max-w-[480px] leading-7">
          Currently, I&apos;m embracing the challenge of co-founding{' '}
          <a
            className="text-primary"
            href="https://www.fashn.ai/"
            target="_blank"
          >
            FASHN
          </a>
        </p>
        <div className="flex gap-20 items-start text-slate-500">
          <div>
            <h4 className="text-xs">LAST WORKPLACE</h4>
            <a
              className="text-primary"
              href="https://api.video/"
              target="_blank"
            >
              api.video
            </a>
          </div>
          <div>
            <h4 className="text-xs">CURRENTLY BASED</h4>
            <a>Belgrade 🇷🇸</a>
          </div>
        </div>
       <a download href='/aya-bochman-cv.pdf'><Button title={'get my cv'} icon={<Download size={20} />} /></a> 
      </div>
      <div className="relative">
        <div className="absolute top-4 left-5 rounded-full h-[60px] w-[60px] flex items-center justify-center text-3xl bg-slate-300">
          👩🏻‍💻
        </div>
        <div className="absolute top-20 right-0 rounded-full h-[60px] w-[60px] flex items-center justify-center text-3xl bg-cyan-100">
          🔎
        </div>
        <div className=" absolute top-40 left-[-20px] rounded-full h-[60px] w-[60px] flex items-center justify-center text-3xl bg-yellow-100">
          🎨
        </div>
        <div className=" absolute top-[260px] right-5 rounded-full h-[60px] w-[60px] flex items-center justify-center text-3xl bg-purple-200">
          🤝
        </div>
        <Image src={'/aya.png'} alt={'aya'} width={300} height={400} />
      </div>
    </section>
  );
}
