export default function Footer() {
  return (
    <footer className="px-8 bg-slate-100 text-slate-400 rounded-tr-lg rounded-tl-lg w-full max-w-xl flex items-center justify-center mx-auto py-2 text-center">
      {`© This website was made with 💗 by Aya Bochman ${new Date().getFullYear()}`}
    </footer>
  );
}
