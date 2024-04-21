import Image from "next/image";
import Link from "next/link";

const Port = ({
  icon,
  link,
  title,
  text,
}: {
  icon: string;
  link: string;
  title: string;
  text: string;
}) => {
  return (
    <div className="inline-block w-auto">
      <Link href={link} target="_blank">
        <article className="overflow-hidden rounded-xl">
          <Image
            alt="example"
            src={icon}
            width={9000}
            height={9000}
            className="h-[340px] w-[509px] object-cover"
          />
        </article>
      </Link>

      <article className="mt-6">
        <h3 className="text-xl font-bold text-black">{title}</h3>
        <p className="text-gray text-[18px]">{text}</p>
      </article>
    </div>
  );
};

export default Port;
