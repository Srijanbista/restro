import Container from "@/components/Container";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[url('/assets/hero-bg.png')] h-screen relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <Container className="text-white absolute inset-0 flex flex-col justify-center items-center">
          <div className="bg-slate-200/70 text-slate-900 px-40 py-20 rounded-md text-center flex flex-col gap-y-3 lg:gap-y-6">
            <p className="text-7xl ">
              Best food for <br /> your taste
            </p>
            <p className="text-sm">
              Discover delectable cuisine and unforgettable moments <br /> in
              our welcoming, culinary haven.
            </p>
          </div>
        </Container>
      </section>

      {/* Menu Section */}
      <section className="h-screen py-32">
        <Container className="flex flex-col gap-y-8 lg:gap-y-16">
          <p className="text-center text-3xl">Browser Our Menu</p>
          <div className="flex justify-between"></div>
        </Container>
      </section>
    </main>
  );
}
