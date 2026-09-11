import Hero from "../components/Hero";
import ProblemStatement from "../components/ProblemStatement";
import ServicesPillars from "../components/ServicesPillars";
import ProcessSteps from "../components/ProcessSteps";
import FeaturedWork from "../components/FeaturedWork";
import SocialProof from "../components/SocialProof";
import FinalCTA from "../components/FinalCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProblemStatement />
      <ServicesPillars />
      <ProcessSteps />
      <FeaturedWork />
      <SocialProof />
      <FinalCTA />
    </main>
  );
}