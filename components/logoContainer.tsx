import Image from 'next/image';

type LogoContainerProps = {
  name: string;
};

export default function LogoContainer({ name }: LogoContainerProps) {
  return (
    <div
      className={`text-slate-800 h=[60px] w-[60px] h-[60px] rounded-lg flex items-center justify-center`}
    >
      <Image height={60} width={60} src={`/logos/${name}.svg`} alt={name} />
    </div>
  );
}
