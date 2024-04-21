import Port from "./Port";

const datas = [
  {
    text: "Github dev finders",
    title: "Dev finder",
    link: "https://mydevfinder.vercel.app",
    icon: "/devfinder.jpg",
  },
  {
    text: "CRUD invoices",
    title: "Invoices",
    link: "https://najot-talim-one.vercel.app",
    icon: "/invoice.jpg",
  },
  {
    text: "Sneakers market",
    title: "Sneakers",
    link: "https://7-12-dars.vercel.app/",
    icon: "/sneakers.jpg",
  },
  {
    text: "Countries about",
    title: "Countries",
    link: "https://react-12-three.vercel.app/",
    icon: "/countries.jpg",
  },
  {
    text: "Today currency",
    title: "Currency",
    link: "https://valyuta-kursi.vercel.app/",
    icon: "/currency.png",
  },
];

const Ports = () => {
  return (
    <main className="mt-[42px]">
      {/* <h1 className="text-[35px] font-semibold text-black mb-[30px]">
        My portfolios
      </h1> */}

      <div className="flex items-center justify-center gap-10 flex-wrap px-[26px] md:px-0">
        {datas.map((e, i) => (
          <Port {...e} key={i} />
        ))}
      </div>
    </main>
  );
};

export default Ports;
