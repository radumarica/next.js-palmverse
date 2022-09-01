import Hero from "../components/Page/Home/Hero";

const Homepage = () => (
  <>
    <video
      src="/videos/home3.mp4"
      loop
      autoPlay
      muted
      className="md:h-[560px] object-cover  w-full "
    />

    <Hero />
  </>
);

export default Homepage;
