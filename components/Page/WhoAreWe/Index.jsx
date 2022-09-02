import Image from "next/image";
import { useState } from "react";
const WhoWeAre = () => (
  <>
    <div className=" relative" >
      <h2 className="absolute hidden md:block text-white z-20 left-10 text-4xl font-exo font-bold top-1/2 -translate-y-1/2" >{"OUR STORY".split("").map((x => <span key={x} className={`block ${x === " " ? "my-6" : "my-2"}`}>{x}</span>))}</h2>
      <iframe src="https://www.youtube.com/embed/f2ECpxB2CE8" className="w-full h-[300px] md:h-[600px] md:px-36 bg-black " />
    </div>

    <section className="py-10 bg-dark_bg text-white flex flex-col justify-center  font-exo">
      <h1 className="text-4xl font-bold md:w-[70%]  text-center mx-auto ">
        Shaping Palmverse: Building an NFT Community-Based Hotel & Hostel Chain
        From Scratch{" "}
      </h1>
      <ul className="py-14 flex flex-col justify-start space-y-6 w-[80%] mx-auto ">
        <li className="text-2xl font-semibold">
          Why don’t we make an NFT project with real-life utilities?
        </li>
        <li className="text-2xl font-semibold">
          That was the beginning of the Palmverse project.
        </li>
        <li className="text-2xl font-semibold">
          It all started with a simple question.
        </li>
        <li className="text-2xl font-semibold">
          Sorin, my best friend, and I were discussing NFT projects over dinner in
          February 2022. We felt like something was lacking, something that could
          be changed to benefit other NFT enthusiasts, including ourselves.
        </li>
        <li className="text-2xl font-semibold">
          Let’s build an NFT hotel chain where holders can come and enjoy
          discounts. — Sorin suggested
        </li>
        <li className="text-2xl font-semibold">
          We did manage multiple businesses, from e-commerce brands to Airbnb
          vacation houses.
        </li>
        <li className="text-2xl font-semibold">
          But could we build something even greater?
        </li>
        <li className="text-2xl font-semibold">
          Continue reading the full story here at medium:{" "}
          <a
            className="underline underline-offset-4"
            href="https://medium.com/@palmverse/shaping-palmverse-building-an-nft-community-based-hotel-hostel-chain-from-scratch-ecbb05501630"
            target="_black"
          >
            Medium{" "}
          </a>
        </li>
      </ul>
      <h1 className="text-4xl text-center font-bold ">TEAM</h1>
      <div className="flex flex-wrap w-[85%] mx-auto justify-evenly pt-10">
        <Profile />
        <Sorin />
      </div>

      <div className="flex flex-wrap w-[85%] mx-auto justify-evenly pt-16">
        <BOB />
        <Radu />
        <Razwan />
      </div>

      <h1 className="text-4xl text-center font-bold pt-10 ">Legal Advisor</h1>
      <div className="flex flex-wrap w-[85%] mx-auto justify-evenly pt-10">
        <Daniel />
      </div>

    </section>
  </>
);

export default WhoWeAre;

const Profile = () => {
  const [show, setShow] = useState(true)
  return (
    <div className="px-4">
      {
        show ? (<div className="p-3 bg-dark_bg border-[1px] border-gray-600 cursor-pointer rounded  ">
          <div onMouseEnter={() => setShow(false)} onMouseLeave={() => setShow(true)} className="h-64 w-64  mx-auto ">
            <div className="h-full w-full relative ">
              <Image src="/images/dragos.webp" layout="fill" alt="Profile" />
            </div>
          </div>
          <div className="py-2">
            <h1 className="font-bold text-lg text-center " >DRAGOS OVIDIU OLTEANU</h1>
            <p className="font-bold text-base text-center ">Co-Founder, CEO</p>
          </div>
        </div>) : (<div onMouseEnter={() => setShow(false)} onMouseLeave={() => setShow(true)} className="p-3 bg-dark_bg border-[1px] h-[350px] w-[282px] border-gray-600 cursor-pointer rounded animate__animated animate__flipInY duration-300 ">
          <p className="text-left text-sm">
            Dragos finished his MSc degree in Sustainable Energy Engineering with a focus on sustainable energy building from Aalborg University Denmark and TU Delft Netherland.
          </p>
          <br />
          <p className="text-left text-sm">
            Founder and CEO of E-commerce companies, involved in the development of several product design projects.
          </p>
          <br />
          <p className="text-left text-sm">
            Speaker at E-commerce Conference in Miami, invited by the Romanian American Chamber of Commerce.
          </p>
        </div>)
      }
    </div>
  );
};
const Sorin = () => {
  const [show, setShow] = useState(true)
  return (
    <div className="px-4">
      {
        show ? (<div className="p-3 bg-dark_bg border-[1px] border-gray-600 cursor-pointer rounded  ">
          <div onMouseEnter={() => setShow(false)} onMouseLeave={() => setShow(true)} className="h-64 w-64  mx-auto ">
            <div className="h-full w-full relative ">
              <Image src="/images/team/Sorin.JPG" layout="fill" alt="Profile" />
            </div>
          </div>
          <div className="py-2">
            <h1 className="font-bold text-lg text-center " >SORIN HALIT</h1>
            <p className="font-bold text-base text-center ">Co-Founder, CTO</p>
          </div>
        </div>) : (<div onMouseEnter={() => setShow(false)} onMouseLeave={() => setShow(true)} className="p-3 bg-dark_bg border-[1px] h-[350px] w-[282px] border-gray-600 cursor-pointer rounded animate__animated animate__flipInY duration-300 ">
          <p className="text-left text-sm">
            Sorin finished his BA in Business Management at Coventry University, in the UK.
          </p>
          <br />
          <p className="text-left text-sm">
            More than 7 years of business experience, handling the general management and supply chain of a tire warehouse in Europe, working closely with suppliers such as Michelin and Continental.
          </p>
          <br />
          <p className="text-left text-sm">
            Built and managed small vacation homes on the Black Sea Coast. Over 1 year of boat driving experience.
          </p>
        </div>)
      }
    </div>
  );
};
const BOB = () => {
  const [show, setShow] = useState(true)
  return (
    <div className="px-4">
      {
        show ? (<div className="p-3 bg-dark_bg border-[1px] border-gray-600 cursor-pointer rounded ">
          <div onMouseEnter={() => setShow(false)} onMouseLeave={() => setShow(true)} className="h-64 w-64  mx-auto ">
            <div className="h-full w-full relative ">
              <Image src="/images/team/boundless.png" layout="fill" alt="Profile" />
            </div>
          </div>
          <div className="py-2">
            <h1 className="font-bold text-lg text-center " >BOB</h1>
            <p className="font-bold text-base text-center ">Marketing Manager</p>
          </div>
        </div>) : (<div onMouseEnter={() => setShow(false)} onMouseLeave={() => setShow(true)} className="p-3 bg-dark_bg border-[1px] h-[350px] w-[282px] border-gray-600 cursor-pointer rounded animate__animated animate__flipInY duration-300 ">
          <p className="text-left text-sm">
            Web3 native Crypto/NFT Investor & Collector.
          </p>
          <br />
          <p className="text-left text-sm">
            Setting and implementing social media/communication and relationship campaigns to align with marketing strategies.
          </p>
          <br />
          <p className="text-left text-sm">
            Built and managed small vacation homes on the Black Sea Coast. Over 1 year of boat driving experience.
          </p>
        </div>)
      }
    </div>
  );
};
const Radu = () => {
  const [show, setShow] = useState(true)
  return (
    <div className="px-4">
      {
        show ? (<div className="p-3 bg-dark_bg border-[1px] border-gray-600 cursor-pointer rounded ">
          <div onMouseEnter={() => setShow(false)} onMouseLeave={() => setShow(true)} className="h-64 w-64  mx-auto ">
            <div className="h-full w-full relative ">
              <Image src="/images/team/radu.jpg" layout="fill" alt="Profile" />
            </div>
          </div>
          <div className="py-2">
            <h1 className="font-bold text-lg text-center " >RADU MARICA</h1>
            <p className="font-bold text-base text-center ">Technical Lead</p>
          </div>
        </div>) : (<div onMouseEnter={() => setShow(false)} onMouseLeave={() => setShow(true)} className="p-3 bg-dark_bg border-[1px] h-[350px] w-[282px] border-gray-600 cursor-pointer rounded animate__animated animate__flipInY duration-300 ">
          <p className="text-left text-sm">
            Radu finished his bachelors in Electronics and Computer Engineering, at Aalborg University Denmark.
          </p>
          <br />
          <p className="text-left text-sm">
            More than 5 years of experience working in multiple projects, becoming an expert in Java Web Development, Complex Mathematical Modelling, Robotics, Cryptography in Kali Linux, Applied Machine Learning, Swarm Intelligence, Blockchain Technology.
          </p>

        </div>)
      }
    </div>
  );
};

const Razwan = () => {
  const [show, setShow] = useState(true)
  return (
    <div className="px-4">
      {
        show ? (<div className="p-3 bg-dark_bg border-[1px] border-gray-600 cursor-pointer rounded  ">
          <div onMouseEnter={() => setShow(false)} onMouseLeave={() => setShow(true)} className="h-64 w-64  mx-auto ">
            <div className="h-full w-full relative ">
              <Image src="/images/team/razwan.jpg" layout="fill" alt="Profile" />
            </div>
          </div>
          <div className="py-2">
            <h1 className="font-bold text-lg text-center " >RAZVAN GRIGORESCU</h1>
            <p className="font-bold text-base text-center ">Senior Architect</p>
          </div>
        </div>) : (<div onMouseEnter={() => setShow(false)} onMouseLeave={() => setShow(true)} className="p-3 bg-dark_bg border-[1px] h-[350px] w-[282px] border-gray-600 cursor-pointer rounded animate__animated animate__flipInY duration-300 ">
          <p className="text-left text-sm">
            AutoCAD and 3ds Max expertise.
          </p>
          <br />
          <p className="text-left text-sm">
            BIM 350 and Archicad expert.
          </p>
          <br />
          <p className="text-left text-sm">
            Designed the initial structures of 30+ residential and commercial Buildings.
          </p>
          <br />
          <p className="text-left text-sm">
            Worked closely with developers and project managers in order to deliver optimal building solutions.
          </p>

        </div>)
      }
    </div>
  );
};
const Daniel = () => {
  const [show, setShow] = useState(true)
  return (
    <div className="px-4">
      {
        show ? (<div className="p-3 bg-dark_bg border-[1px] border-gray-600 cursor-pointer rounded  ">
          <div onMouseEnter={() => setShow(false)} onMouseLeave={() => setShow(true)} className="h-64 w-64  mx-auto ">
            <div className="h-full w-full relative ">
              <Image src="/images/team/daniel.png" className="object-cover" layout="fill" alt="Profile" />
            </div>
          </div>
          <div className="py-2">
            <h1 className="font-bold text-lg text-center " >DANIEL RODRIGUEZ MAFFIOLI</h1>
            <p className="font-bold text-base text-center ">Legal Advisor</p>
            <a href="https://www.ecija.com" target='_blank' rel="noreferrer">
              <p className="font-bold text-base text-center ">https://www.ecija.com</p>
            </a>
          </div>
        </div>) : (<div onMouseEnter={() => setShow(false)} onMouseLeave={() => setShow(true)} className="p-3 bg-dark_bg border-[1px] h-[350px] w-[282px] border-gray-600 cursor-pointer rounded animate__animated animate__flipInY duration-300 ">
          <p className="text-left text-sm">
            AutoCAD and 3ds Max expertise.
          </p>
          <br />
          <p className="text-left text-sm">
            BIM 350 and Archicad expert.
          </p>
          <br />
          <p className="text-left text-sm">
            Designed the initial structures of 30+ residential and commercial Buildings.
          </p>
          <br />
          <p className="text-left text-sm">
            Worked closely with developers and project managers in order to deliver optimal building solutions.
          </p>

        </div>)
      }
    </div>
  );
};

