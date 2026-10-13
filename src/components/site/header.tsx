import Link from "next/link";
import { Container } from "@/components/site/container";
import { InstagramIcon } from "@/components/site/instagram-icon";

const NAV_LINKS = [
  { href: "/", label: "Heim" },
  { href: "/verslun", label: "Verslun" },
  { href: "/hafdu-samband", label: "Hafðu samband" },
];

export function SiteHeader() {
  return (
    <header className="bg-caliber-olive text-white">
      <Container className="flex h-14 items-center justify-between">
        <InstagramIcon className="h-4 w-4 text-white/90" />
        <nav className="flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-xs font-semibold uppercase tracking-widest text-white/90 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
