import Link from "next/link";
import Container from "./Container";

const Footer = () => {
  return (
    <section className="bg-slate-800 text-white">
      <Container>
        <footer className="py-28 flex flex-col items-center gap-y-16 text-white/70">
          <div className="flex justify-between w-full">
            <div className="flex flex-col gap-y-2 md:gap-y-3">
              <p className="text-3xl font-semibold italic text-white">
                Bistro Bliss
              </p>
              <p className="text-sm text-slate-300">
                In the new era of technology we look <br /> in the future with
                certainty and pride for <br /> our company.
              </p>
              <p>Social Media</p>
            </div>
            <div className="flex flex-col gap-y-2 md:gap-y-3">
              <p className="text-xl font-semibold text-white">Pages</p>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/menu">Menu</Link>
              <Link href="/">Pricing</Link>
              <Link href="/">Blog</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/">Delivery</Link>
            </div>
            <div className="hidden lg:block">Images</div>
          </div>
          <p className="text-center text-sm">
            Copyright &copy; {new Date().getFullYear()} Developer. All Rights
            Reserved
          </p>
        </footer>
      </Container>
    </section>
  );
};

export default Footer;
