

const Techno = ({ url, className }: { url: string; className?: string }) => {
  return (
    <div
      className={
        "p-2 rounded-xl border border-border hover:text-[#367cff] inline-block transition-all hover:-translate-y-5" +
        " " +
        className
      }
    >
      <img src={url} alt={url} color="#367cff" width={28} height={28} />
    </div>
  );
};

export default Techno;
