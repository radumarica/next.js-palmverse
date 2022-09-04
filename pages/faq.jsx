import Image from "next/image";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Link from "next/link";

const Faq = () => {
  return (
    <div className="min-h-[90vh] bg-[#2A2A29]">
      <div className="h-fit  flex justify-between items-center bg-[#ECF7FD]">
        <Image priority src="/images/NFTS.png" height={150} width={150} layout="fixed" alt="FAQ Banner" />
        <h1 className="mt-6  font-exo text-center text-5xl font-bold text-dark_bg ">
          FAQ
        </h1>
        <div className="w-36" />
      </div>

      <div className="max-w-4xl px-4 py-6 mx-auto">
        <FaqAccordian title="Blockchains?" desc="NFTs on Solana.
Booking platform will be multi-chain in the near future." />
        <FaqAccordian title="Supply, price, date?" desc="Supply: TBA, Price:  TBA,  Date: TBA." />
        <FaqAccordian title="When will Palmverse Tamarindo (Costa Rica) be finished" desc="We aim to have 3 operating locations in Q1 2023, but the date will be updated as we progress." />
        <FaqAccordian title="What amenities will be inside the Hotel?" desc="Besides the hotel & hostel rooms, the resort will contain the following: co-working space, gym, lounge room,  bars, game room (pool, table tennis), shared kitchen, pool." />
        <FaqAccordian title="How is Palmverse Different?" desc="Real-life utility.
Rented the first building and functional booking platform before starting marketing." />
        <FaqAccordian title="When can we visit Palmverse Tamarindo (Costa Rica)?" desc="The first Palmverse Hotel & Hostel will be ready in a few months after the mint. 
" />
        <LinkA />
      </div>
    </div>
  );
};
export default Faq;

const LinkA = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="my-2">
      <div className="flex">
        <h1 className="text-center w-full bg-[#ECF7FD] py-5 px-2 font-bold text-lg text-[#2a2a29] font-exo">
          Roadmap?
        </h1>
        <button
          onClick={() => setOpen(!open)}
          className="text-center px-4 bg-slate-400 bg-opacity-90"
        >
          {" "}
          {
            open ? (

              <AiOutlineMinus className="text-[#2A2A29] bg-transparent text-2xl" />
            ) : (

              <AiOutlinePlus className="text-[#2A2A29] bg-transparent text-2xl" />
            )
          }
        </button>
      </div>
      <div
        className={`${open ? "block" : "hidden"
          } duration-300 ease-in transition-all  font-exo bg-gray-100`}
      >
        <p className="p-4 text-[#2a2a29] bg-[#ECF7FD] flex ">
          Roadmap can be found  <Link href="/roadmap"><p className="text-blue-500 underline underline-offset-4 pl-2 " >here</p></Link>
        </p>
      </div>
    </div>
  );
};
const FaqAccordian = ({ title, desc }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="my-2">
      <div className="flex">
        <h1 className="text-center w-full bg-[#ECF7FD] py-5 px-2 font-bold text-lg text-[#2a2a29] font-exo">
          {title}
        </h1>
        <button
          onClick={() => setOpen(!open)}
          className="text-center px-4 bg-slate-400 bg-opacity-90"
        >
          {" "}
          {
            open ? (

              <AiOutlineMinus className="text-[#2A2A29] bg-transparent text-2xl" />
            ) : (

              <AiOutlinePlus className="text-[#2A2A29] bg-transparent text-2xl" />
            )
          }
        </button>
      </div>
      <div
        className={`${open ? "block" : "hidden"
          } duration-300 ease-in transition-all  font-exo bg-gray-100`}
      >
        <p className="p-4 text-[#2a2a29] bg-[#ECF7FD] ">
          {desc}
        </p>
      </div>
    </div>
  );
};


