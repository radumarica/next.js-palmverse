import Image from "next/image";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
const Faq = () => {
  return (
    <div className="min-h-[90vh] bg-[#2A2A29]">
      <div className="relative h-40">
        <Image src="/images/faq.jpeg" layout="fill" alt="FAQ Banner" />
      </div>
      <h1 className="mt-6 text-white font-exo text-center text-5xl font-bold">
        FAQ
      </h1>
      <div className="max-w-4xl px-4 my-6 mx-auto">
        <FaqAccordian title="Blockchains?" desc="Solana & Ethereum." />
        <FaqAccordian title="Supply, price, date?" desc="Supply: TBA, Price:  TBA,  Date: TBA." />
        <FaqAccordian title="When finished?" desc="We aim to have 3 operating locations in Q1 2023, but the date will be updated as we progress." />
        <FaqAccordian title="What will the resorts contain?" desc="Besides the hotel & hostel rooms, the resort will contain the following: co-working space, gym, lounge room,  bars, game room (pool, table tennis), shared kitchen, pool." />
      </div>
    </div>
  );
};
export default Faq;

const FaqAccordian = ({ title, desc }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="my-2">
      <div className="flex">
        <h1 className="text-center w-full bg-gray-200 py-5 px-2 font-bold text-lg font-exo">
          {title}
        </h1>
        <button
          onClick={() => setOpen(!open)}
          className="text-center px-4 bg-slate-400 bg-opacity-90"
        >
          {" "}
          <AiOutlinePlus className="text-[#2A2A29] bg-[#ECF7FD] text-2xl" />
        </button>
      </div>
      <div
        className={`${open ? "block" : "hidden"
          } duration-300 ease-in transition-all  font-exo bg-gray-100`}
      >
        <p className="p-4">
          {desc}
        </p>
      </div>
    </div>
  );
};
