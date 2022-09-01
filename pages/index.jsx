import Hero from "../components/Page/Home/Hero";

const Homepage = () => (
  <>
    <video
      src="/videos/home3.mp4"
      loop
      autoPlay
      muted
      controls
      className="md:h-[600px] object-cover  w-full "
    />

    <Hero />
  </>
);

export default Homepage;
