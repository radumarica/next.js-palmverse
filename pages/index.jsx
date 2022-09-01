import Hero from "../components/Page/Home/Hero";

const Homepage = () => (
  <>
    <video
      src="/videos/16x9.mp4"
      loop
      autoPlay
      muted
      controls
      className="md:h-[600px] object-fill  w-full "
    />

    <Hero />
  </>
);

export default Homepage;
