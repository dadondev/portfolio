import Image from "next/image";
import Link from "next/link";

const Social = ({
  text,
  url,
  parsing,
}: {
  text: string;
  url: string;
  parsing: string;
}) => {
  return (
    <Link href={parsing}>
      <div className="flex items-center gap-3 px-4 py-2 border-border border rounded-xl transition-all active:-translate-y-5 lg:hover:-translate-y-4">
        <Image src={url} alt="x" width={28} height={28} />
        <span className="text-black text-[18px] font-semibold">{text}</span>
      </div>
    </Link>
  );
};

export default Social;
