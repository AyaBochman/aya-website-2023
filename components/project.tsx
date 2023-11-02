import Image from 'next/image';
import Button from './button';

type ProjectProps = {
    name: string
    url: string
    imageSrc: string
    tags?: string[];

};

export default function Project({ name, url, imageSrc, tags }: ProjectProps) {
    return (
        <div className="bg-slate-400 bg-opacity-20 w-80 h-56 rounded-lg p-4 flex items-center justify-center cursor-pointer">
            <div className="shadow-frame relative overflow-hidden rounded-lg w-72 h-full group">
                <Image
                    src={imageSrc}
                    alt={name}
                    className="object-cover w-full h-full"
                    width={200}
                    height={200}
                />
                <div className="absolute h-full w-full bg-gradient-to-b from-slate-800/90 to-slate-200/80 flex flex-col items-center justify-between py-4 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a href={url} target='_blank'>
                        <Button title={name} />
                    </a>
                    {tags?.length && (
                        <ul className="mt-4 flex gap-1 flex-wrap justify-center">
                            {tags.map((tag, i) => (
                                <li
                                    key={i}
                                    className="uppercase rounded-full bg-slate-800 text-white px-2 py-1 w-fit text-xs"
                                >
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}
