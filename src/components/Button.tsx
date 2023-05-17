interface Props {
  text: string;
}

export default function Button({ text }: Props) {
  return (
    <button className="ml-8 mt-6 bg-black px-6 py-2 font-medium text-white hover:bg-slate-950">{text}</button>
  );
}
