'use client';

import { useState } from 'react';
import { Send } from 'react-feather';
import Button from './button';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'aya.bochman@gmail.com';

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <section
      className="my-16 p-8 lg:px-32 mx-auto flex flex-col items-center justify-center gap-10 border shadow-frame rounded-xl max-w-xl bg-white"
      id="contact"
    >
      <img
        src={'gradient1.png'}
        alt={'gradient'}
        className="absolute -z-10 -bottom-0 left-0"
      />
      <h2 className="text-primary font-semibold">CONTACT</h2>
      <p className="text-slate-500 max-w-sm">
        Whether it&apos;s a question, project, or just some tech talk, Feel free
        to drop me a message 👇
      </p>
      <div className="flex flex-col gap-4 text-slate-500 items-center">
        <div className="flex flex-col items-center gap-2">
          <button
            onClick={copyText}
            className={`w-[200px] border border-primary border-dashed rounded-sm px-2 hover:text-slate-400 transform transition-transform duration-500`}
          >
            {copied ? 'Copied!' : email}
          </button>
          <span className="text-xs text-slate-400">(CLICK TO COPY)</span>
        </div>

        <p className="text-sm text-slate-500">OR</p>
        <a href="mailto:aya.bochman@gmail.com">
          <Button title="Send a message" icon={<Send />} />
        </a>
      </div>
    </section>
  );
}
