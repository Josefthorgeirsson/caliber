import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/site/container";

export const metadata: Metadata = {
  title: "Verslun – Caliber",
  description: "Caliber granóla — handgert, próteinríkt og bragðgott.",
};

export default function ShopPage() {
  return (
    <section className="py-20">
      <Container className="max-w-md">
        <div className="text-center">
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-caliber-olive">
            Verslun
          </span>
          <h1 className="mt-4 font-display text-4xl uppercase tracking-wide text-caliber-olive">
            Granóla
          </h1>
        </div>

        <div className="mt-10 flex justify-center">
          <Image
            src="/images/pouch.jpg"
            alt="Caliber granóla poki, 400 g"
            width={275}
            height={385}
            className="h-auto w-full max-w-xs"
          />
        </div>

        <div className="mt-8 text-center">
          <h2 className="font-display text-xl uppercase tracking-widest text-caliber-ink">
            Caliber Granóla
          </h2>
          <p className="mt-2 font-sans text-sm text-caliber-ink/60">400 g · vegan</p>
          <p className="mt-6 font-sans text-base leading-relaxed text-caliber-ink/80">
            Handgert, næringarríkt granóla með yfir 20 g af próteini í 100 g
            — hentar vel á skyrið, í eftirrétti eða til að borða eitt og
            sér.
          </p>
          <a
            href="mailto:caliber@calibericeland.is?subject=Panta%20Caliber%20gran%C3%B3la"
            className="mt-8 inline-flex items-center bg-caliber-olive px-8 py-3 font-sans text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-caliber-olive-dark"
          >
            Pantaðu hér og við sendum frítt heim til þín
          </a>
        </div>
      </Container>
    </section>
  );
}
