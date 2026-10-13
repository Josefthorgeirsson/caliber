import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/site/container";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-caliber-olive">
              Þú kaupir, við gefum
            </span>
            <h1 className="mt-4 font-display text-6xl uppercase tracking-wide text-caliber-olive sm:text-7xl">
              Caliber
            </h1>
            <p className="mt-4 font-sans text-base text-caliber-ink/80">
              Fyrir hverja selda vöru — munum við saman gefa barni í neyð
              fulla máltíð.
            </p>

            <div className="mt-8 h-px w-16 bg-caliber-olive/40" />

            <p className="mt-8 font-sans text-base leading-relaxed text-caliber-ink/80">
              Caliber framleiðir næringar- og próteinríkt granóla ásamt því
              að hafa einstaka samfélagsábyrgð að leiðarljósi.
            </p>
            <ul className="mt-5 space-y-2 font-sans text-base text-caliber-ink/80">
              <li>— bragðgott og næringarríkt</li>
              <li>— yfir 20 g af próteini í 100 g</li>
            </ul>

            <Link
              href="/verslun"
              className="mt-10 inline-flex items-center border border-caliber-ink/30 px-6 py-3 font-sans text-xs font-semibold uppercase tracking-widest text-caliber-ink transition-colors hover:border-caliber-olive hover:bg-caliber-olive hover:text-white"
            >
              Pantaðu hér og við sendum frítt heim til þín
            </Link>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/pouch.jpg"
              alt="Caliber granóla poki"
              width={275}
              height={385}
              className="h-auto w-full max-w-xs"
              priority
            />
          </div>
        </Container>
      </section>

      {/* Hero banner with baked-in copy */}
      <div className="relative w-full overflow-hidden">
        <Image
          src="/images/hero-bowls.jpg"
          alt="Okkar heimatilbúna granóla hentar vel á skyrið, í eftirrétti eða til að borða eitt og sér"
          width={1891}
          height={350}
          className="h-auto w-full"
        />
      </div>

      {/* Corporate service */}
      <section className="bg-caliber-pink-soft py-20">
        <Container className="max-w-2xl text-center">
          <h2 className="font-display text-3xl uppercase tracking-widest text-caliber-olive">
            Fyrirtækjaþjónusta
          </h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-caliber-ink/80">
            Vill fyrirtækið þitt fá mánaðarlega áskrift af næringarríku
            granóla í mötuneytið og um leið geta gert heiminn að aðeins
            betri stað fyrir börn sem þurfa á því mest að halda?
          </p>
          <p className="mt-6 font-sans text-base text-caliber-ink/80">
            Ekki hika við að senda pantanir á{" "}
            <a
              href="mailto:caliber@calibericeland.is"
              className="font-semibold text-caliber-olive-dark"
            >
              caliber@calibericeland.is
            </a>
          </p>

          <div className="mx-auto mt-10 h-px w-16 bg-caliber-olive/40" />

          <blockquote className="mt-10">
            <p className="font-serif text-lg italic leading-relaxed text-caliber-ink/80">
              „Caliber býr til gullinbrúnt granóla sem er eins og knús í
              skál og bragðast eins og &apos;crunchy&apos; himnaríki“
            </p>
            <footer className="mt-4 font-sans text-sm text-caliber-ink/60">
              <p>— Eyrún Reynisdóttir —</p>
              <p className="italic">Framkvæmdastjóri FIMÍA</p>
            </footer>
          </blockquote>
        </Container>
      </section>

      {/* B1G1 story */}
      <section className="py-20">
        <Container className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="flex justify-center md:order-2">
            <Image
              src="/images/pouch.jpg"
              alt="Caliber granóla poki"
              width={275}
              height={385}
              className="h-auto w-full max-w-xs"
            />
          </div>
          <div className="md:order-1">
            <h2 className="font-display text-2xl uppercase tracking-widest text-caliber-olive">
              Svona gerum við
            </h2>
            <span className="mt-1 block font-sans text-xs uppercase tracking-widest text-caliber-ink/50">
              Caliber
            </span>
            <div className="mt-4 h-px w-16 bg-caliber-olive/40" />
            <p className="mt-6 font-sans text-base leading-relaxed text-caliber-ink/80">
              Caliber er í samstarfi við góðgerðar- og mannúðarfélagið B1G1
              sem tengir fyrirtæki við áhrifarík verkefni um allan heim og
              hjálpar þeim að gera heiminn að betri stað, einn dag í einu.
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-caliber-ink/80">
              Við förum í samstarf með B1G1 til þess að hafa áhrif á
              samfélagið í kringum okkur og að hjálpa þeim sem þurfa mest á
              því að halda.
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-caliber-ink/80">
              Fyrir hverja selda vöru, munum við saman gefa barni í Keníu
              heila máltíð.
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-caliber-ink/80">
              Caliber vill gera samfélagið okkar heilbrigðara og heiminn
              aðeins betri, einn bita í einu.
            </p>
            <Link
              href="/hafdu-samband"
              className="mt-8 inline-flex items-center bg-caliber-olive px-6 py-3 font-sans text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-caliber-olive-dark"
            >
              Lestu meira um verkefnið okkar hér
            </Link>
          </div>
        </Container>
      </section>

      {/* Lifestyle / feedback */}
      <section className="bg-caliber-olive">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-[4/3] md:aspect-auto">
            <Image
              src="/images/lifestyle.jpg"
              alt="Caliber granóla skál með jógúrt og berjum"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-16 text-center text-white sm:px-16">
            <p className="font-sans text-lg">
              Segðu okkur frá þinni upplifun, við hlökkum til að heyra frá
              þér 🖤
            </p>
            <Link
              href="/hafdu-samband"
              className="mt-8 inline-flex items-center justify-center self-center border border-white/50 px-6 py-3 font-sans text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-caliber-olive"
            >
              Hafðu samband
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
