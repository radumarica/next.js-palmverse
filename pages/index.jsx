import Hero from "../components/Page/Home/Hero";

const Homepage = () => (
  <>
    <video
      src="/videos/home.mp4"
      loop
      autoPlay
      muted
      controls
      className="md:h-[500px]  w-full"
    />

    <Hero />
  </>
);

export default Homepage;
