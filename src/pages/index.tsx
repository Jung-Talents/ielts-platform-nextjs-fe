import { CallToActionSlider } from "@/components";
import { ctaSlidesMock } from "@/data";
import { CardCTA, CardBenefits } from "../components";

export default function Home() {
  return (
    <main className="bg-white">
      <CardBenefits />
      <section className="mx-auto w-full max-w-[1440px] px-4 py-6">
        <div className="rounded-3xl bg-white shadow-sm ring-1 ring-zinc-200 overflow-hidden">
          <CallToActionSlider slides={ctaSlidesMock} intervalMs={4500} />
        </div>
      </section>
      <CardCTA />
    </main>
  );
}
