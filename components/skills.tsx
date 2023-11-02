import LogoContainer from './logoContainer';
import Image from 'next/image'

const skills = [
    'figma',
    'react',
    'nextjs',
    'typescript',
    'javascript',
    'tailwind',
    'nodejs',
    'mongodb',
    'vercel'
]

export default function Skills() {
    return (
        <section className='py-16 px-8 lg:px-64 flex flex-col items-center gap-10' id="skills">
            <h2 className='text-primary font-semibold'>MY GO-TO STACK</h2>
            <ul className='flex gap-2 items-center flex-wrap justify-center'>
                {skills?.length ? skills.map((skill, i) => {
                    return <li key={i}><LogoContainer name={skill} /></li>
                }) : null}
            </ul>
            <h3 className='text-slate-500 text-center'>... &amp; recently, I&apos;ve been playing with</h3>
            <ul className='flex gap-4 items-center'>
                <li><Image height={40} width={40} alt={'supabase'} src={'/logos/supabase.svg'} /></li>
                <li><Image height={80} width={80} alt={'sst'} src={'/logos/sst.svg'} /></li>
                <li><Image height={50} width={50} alt={'aws'} src={'/logos/aws.svg'} /></li>
            </ul>
        </section>
    );
}
