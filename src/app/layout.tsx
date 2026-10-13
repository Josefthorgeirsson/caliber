import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";

const gloock = localFont({
  src: "./fonts/Gloock-Regular.ttf",
  variable: "--font-gloock",
  weight: "400",
  display: "swap",
});

const baskerville = localFont({
  src: "./fonts/LibreBaskerville-Regular.ttf",
  variable: "--font-baskerville",
  weight: "400",
  display: "swap",
});

const instrument = localFont({
  src: [
    { path: "./fonts/InstrumentSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/InstrumentSans-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/InstrumentSans-Italic.ttf", weight: "400", style: "italic" },
  ],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Caliber – Heimatilbúið granóla",
  description:
    "Caliber framleiðir næringar- og próteinríkt handgert granóla á Akranesi. Þú kaupir, við gefum — fyrir hverja selda vöru gefum við barni í neyð fulla máltíð.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="is"
      className={`${gloock.variable} ${baskerville.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-caliber-cream text-caliber-ink">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
