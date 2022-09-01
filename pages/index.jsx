import Hero from "../components/Page/Home/Hero";
import { HiArrowNarrowRight } from 'react-icons/hi'
import Link from "next/link";

const Homepage = () => (
  <>
    <div className="relative">

      <video
        src="/videos/home3.mp4"
        loop
        autoPlay
        muted
        className="md:h-[90vh] object-cover  w-full "
      />
      <Link href="/who-we-are">
        <div className="absolute z-20 top-[38%] translate-y-1/2   md:left-10 left-5 flex items-center cursor-pointer hover:pl-5 transition-all" >
          <HiArrowNarrowRight className="md:text-3xl text-xl  text-white   " />
          <p className="text-white font-exo font-bold text-[25px] md:text-[25px] md:tracking-wider pl-4">Discover Our Story</p>
        </div>
      </Link>
    </div>

    <Hero />
  </>
);

export default Homepage;
