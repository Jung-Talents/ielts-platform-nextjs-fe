import Features from "../components/Features/Features";
import { Benefits, BenefitsContent } from "../data/Content/Features/Benefits";

export default function Home() {
  return (
    <div>
      <Features benefits={Benefits} content={BenefitsContent} />
    </div>
  );
  
}
