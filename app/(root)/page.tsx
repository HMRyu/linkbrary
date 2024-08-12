import Hero from "./_components/Hero";
import Landing from "./_components/Landing";
import LandingMobile from "./_components/LandingMobile";
import LogoAnimation from "./_components/LogoAnimation";

export default function Page() {
  return (
    <div>
      <LogoAnimation />
      <Hero />
      <Landing />
      <LandingMobile />
    </div>
  );
}
