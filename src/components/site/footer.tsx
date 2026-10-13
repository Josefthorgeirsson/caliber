import Link from "next/link";
import { Container } from "@/components/site/container";

export function SiteFooter() {
  return (
    <footer className="bg-caliber-olive text-white">
      <Container className="flex flex-col items-center gap-3 py-10 text-center">
        <p className="font-display text-xl uppercase tracking-widest">
          Caliber
        </p>
        <a
          href="mailto:caliber@calibericeland.is"
          className="font-sans text-sm text-white/85 transition-colors hover:text-white"
        >
          caliber@calibericeland.is
        </a>
        <div className="mt-2 flex gap-5 font-sans text-xs text-white/70">
          <Link href="/skilmalar" className="hover:text-white">
            Skilmálar
          </Link>
          <Link href="/fridhelgisstefna" className="hover:text-white">
            Friðhelgisstefna
          </Link>
        </div>
        <p className="mt-6 font-sans text-sm tracking-wide text-white/80">
          Eigðu frábæran dag!
        </p>
      </Container>
    </footer>
  );
}
