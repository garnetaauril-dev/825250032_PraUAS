import Hero from "../components/home/Hero.jsx";
import BoatSearch from "../components/home/BoatSearch.jsx";
import About from "../components/home/About.jsx";
import Welcome from "../components/home/Welcome.jsx";
import Fleet from "../components/home/Fleet.jsx";
import Offer from "../components/home/Offer.jsx";
import Destinations from "../components/Destinations.jsx";
import VideoBanner from "../components/home/VideoBanner.jsx";
import Counters from "../components/home/Counters.jsx";
import Features from "../components/home/Features.jsx";
import TestimonialsHome from "../components/home/TestimonialsHome.jsx";
import Team from "../components/Team.jsx";
import News from "../components/home/News.jsx";
import CallToAction from "../components/home/CallToAction.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <BoatSearch />
      <About />
      <Welcome />
      <Fleet />
      <Offer />
      <Destinations />
      <VideoBanner />
      <Counters />
      <Features />
      <TestimonialsHome />
      <Team />
      <News />
      <CallToAction />
    </>
  );
}
