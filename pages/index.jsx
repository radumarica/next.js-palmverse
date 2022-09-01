import Hero from "../components/Page/Home/Hero";

const Homepage = () => (
  <>
    <video
      src="/videos/home2.mp4"
      loop
      autoPlay
      muted
      controls
      className="md:h-[600px] object-fill  w-full"
    />

    <Hero />
  </>
);

export default Homepage;
