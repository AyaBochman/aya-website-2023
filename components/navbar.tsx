import React from 'react';
import { Raleway } from 'next/font/google';
import Link from 'next/link';

const raleway = Raleway({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function Navbar() {
  return (
    <nav
      className={`${raleway.className} border-b border-slate-300 sticky top-0 z-50 py-4 px-16 xl:px-64 bg-slate-100 bg-opacity-40 backdrop-blur-lg w-full flex flex-wrap justify-center flex-col items-center gap-2 md:flex-row md:justify-between`}
    >
      <Link href={'/'} className="flex items-center gap-2">
        <h1 className="text-2xl font-light">AYA BOCHMAN</h1>
        <span className="text-xs text-slate-400 hidden lg:block">
          | FULL STACK DEVELOPER
        </span>
      </Link>
      <ul className="flex gap-6 items-center text-slate-500">
        <li className="hover:text-primary ease-in-out duration-300">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-primary ease-in-out duration-300">
          <a href="#skills">Skills</a>
        </li>
        <li className="hover:text-primary ease-in-out duration-300">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <ul className="flex gap-2 items-center">
        <li>
          <a
            className="fill-primary hover:fill-primary/40 ease-in-out duration-300"
            href="https://www.linkedin.com/in/aya-bochman/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </li>
        <li>
          <a
            className="fill-primary hover:fill-primary/40 ease-in-out duration-300"
            href="https://github.com/AyaBochman"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </li>
        <li>
          <a
            className="fill-primary hover:fill-primary/40 ease-in-out duration-300"
            href="https://twitter.com/ayabo66"
            target="_blank"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 1200 1227"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
}
