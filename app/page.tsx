import Hero from './component/LandingPage/Hero';
import Opos from './component/LandingPage/Opos';
import WhoWeAre from './component/LandingPage/WhoWeAre';
import Security from './component/LandingPage/Security';
import BuildingOnTheBook from './component/LandingPage/BuildingOnTheBook';

export default function Home() {
  return (
    <main>
      <Hero />
      <Opos />
      <WhoWeAre />
      <Security />
      {/* <BuildingOnTheBook /> */}
    </main>
  );
}
