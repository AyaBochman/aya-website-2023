import { Raleway } from 'next/font/google';

type StatusProps = {
    available?: boolean
}

const raleway = Raleway({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
  });

export default function Status({ available }: StatusProps) {
    return (
        <div className="bg-primary bg-opacity-30 rounded-full text-primary px-4 py-2 w-fit flex gap-2 items-center">
           <div className="rounded-full h-3 w-3 bg-red-500 animate-pulse"></div> <span className={`${raleway.className}`}>{available ? 'Available' : 'Not available'}</span>
        </div>
    )
}