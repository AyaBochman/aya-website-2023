import { Raleway } from 'next/font/google';
import { ReactNode } from 'react';

type ButtonProps = {
  title: string;
  icon?: ReactNode;
};

const raleway = Raleway({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function Button({ title, icon }: ButtonProps) {
  return (
    <button
      className={`${raleway.className} font-medium uppercase rounded-full w-fit text-primary border border-primary border-1 py-2 px-4 flex gap-2 items-center hover:ring-2 hover:ring-primary transition hover:font-semibold ease-in-out duration-300`}
    >
      {title}
      {icon && icon}
    </button>
  );
}
