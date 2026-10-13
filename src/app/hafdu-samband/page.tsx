import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { Container } from "@/components/site/container";
import { InstagramIcon } from "@/components/site/instagram-icon";

export const metadata: Metadata = {
  title: "Hafðu samband – Caliber",
  description:
    "Hafðu samband við Caliber á caliber@calibericeland.is — við hlökkum til að heyra frá þér.",
};

export default function ContactPage() {
  return (
    <section className="py-20">
      <Container className="max-w-xl text-center">
        <span className="font-sans text-xs font-semibold uppercase tracking-widest text-caliber-olive">
          Hafðu samband
        </span>
        <h1 className="mt-4 font-display text-4xl uppercase tracking-wide text-caliber-olive">
          Segðu okkur frá þinni upplifun
        </h1>
        <p className="mt-6 font-sans text-base leading-relaxed text-caliber-ink/80">
          Við hlökkum til að heyra frá þér 🖤 — hvort sem þú vilt deila
          upplifun þinni, spyrja um fyrirtækjaáskrift eða panta Caliber
          granóla.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href="mailto:caliber@calibericeland.is"
            className="inline-flex items-center gap-2 font-sans text-lg font-semibold text-caliber-olive-dark"
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
            caliber@calibericeland.is
          </a>
          <div className="flex items-center gap-2 font-sans text-sm text-caliber-ink/60">
            <InstagramIcon className="h-4 w-4" />
            <span>Finndu okkur á Instagram</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
