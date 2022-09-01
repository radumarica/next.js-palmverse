import Image from "next/image";
const WhoWeAre = () => (
  <>
    <video
      src="/videos/home.mp4"
      loop
      autoPlay
      muted
      controls
      className="md:h-[500px]  w-full"
    />

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
      <div className="grid grid-cols-2">
        <Profile />
        <Sorin />
      </div>

    </section>
  </>
);

export default WhoWeAre;

const Profile = () => {
  return (
    <div className="px-4 w-[91%] mx-auto">
      <div className="h-52 w-52 p-2 bg-white rounded-md mx-auto">
        <div className="h-full w-full relative ">
          <Image src="/images/dragos.webp" layout="fill" alt="Profile" />
        </div>
      </div>
      <div className="mt-6 space-y-4" >

        <p className="text-left">
          Dragos finished his MSc degree in Sustainable Energy Engineering with a focus on sustainable energy building from Aalborg University Denmark and TU Delft Netherland.
        </p>
        <p className="text-left">
          Founder and CEO of E-commerce companies, involved in the development of several product design projects.
        </p>
        <p className="text-left">
          Speaker at E-commerce Conference in Miami, invited by the Romanian American Chamber of Commerce.
        </p>
        <p className="text-left">
          More than 7 years experience in project management and more than 5 years of entrepreneurial expertise, including several projects of building Sustainable Energy Buildings.
        </p>
        <p className="text-left">
          2 Years of part-time Cryptocurrency trading experience and NFT expertise.
        </p>
      </div>
    </div>
  );
};
const Sorin = () => {
  return (
    <div className="px-4 w-[91%] mx-auto">
      <div className="h-52 w-52 p-2 bg-white rounded-md mx-auto">
        <div className="h-full w-full relative ">
          <Image src="/images/Sorin.webp" layout="fill" alt="Profile" />
        </div>
      </div>
      <div className="mt-6 space-y-4" >

        <p className="text-left">
          Sorin finished his BA in Business Management at Coventry University, in the UK.
        </p>
        <p className="text-left">
          More than 7 years of business experience, handling the general management and supply chain of a tire warehouse in Europe, working closely with suppliers such as Michelin and Continental.
        </p>
        <p className="text-left">
          Built and managed small vacation homes on the Black Sea Coast. Over 1 year of boat driving experience.
        </p>
        <p className="text-left">
          More than 7 years experience in project management and more than 5 years of entrepreneurial expertise, including several projects of building Sustainable Energy Buildings.
        </p>
        <p className="text-left">
          More than 4 years of experience in product development/e-com business. First contact with crypto in 2017, and full time since the beginning of 2021. Deep knowledge of the Solana ecosystem.
        </p>
      </div>
    </div>
  );
};
