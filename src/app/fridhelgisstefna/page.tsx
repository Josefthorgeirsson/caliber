import type { Metadata } from "next";
import { Container } from "@/components/site/container";

export const metadata: Metadata = {
  title: "Friðhelgisstefna – Caliber",
};

export default function PrivacyPage() {
  return (
    <section className="py-20">
      <Container className="max-w-2xl">
        <h1 className="font-display text-3xl uppercase tracking-wide text-caliber-olive">
          Friðhelgisstefna
        </h1>
        <p className="mt-6 font-sans text-base leading-relaxed text-caliber-ink/80">
          Friðhelgisstefna Caliber er væntanleg hér. Hafðu samband á{" "}
          <a
            href="mailto:caliber@calibericeland.is"
            className="font-semibold text-caliber-olive-dark"
          >
            caliber@calibericeland.is
          </a>{" "}
          ef þú hefur spurningar.
        </p>
      </Container>
    </section>
  );
}
