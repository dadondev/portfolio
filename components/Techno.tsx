import Image from "next/image";

const Techno = ({ url }: { url: string }) => {
  return (
    <div className="p-2 rounded-xl border border-border hover:text-[#367cff] inline-block transition-all hover:-translate-y-5">
      <img src={url} alt={url} color="#367cff" />
    </div>
  );
};

export default Techno;
