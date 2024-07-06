import Container from "@/components/Container";
import HighlightCard from "@/components/HighlightCard";
import { BsCupHot } from "react-icons/bs";
import { LuDessert } from "react-icons/lu";
import { PiBowlFood } from "react-icons/pi";
import { RiDrinksLine } from "react-icons/ri";

export default function Home() {
  const HighLightCardData = [
    {
      title: "Breakfast",
      description:
        "Start your day with our delicious breakfast options, including fresh pastries, hearty omelets, and invigorating smoothies.",
      icon: <BsCupHot className="h-16 w-16" />,
    },
    {
      title: "Main Dishes",
      description:
        "Savor our main courses, featuring succulent meats, fresh seafood, and vegetarian delights, crafted to perfection.",
      icon: <PiBowlFood className="h-16 w-16" />,
    },
    {
      title: "Drinks",
      description:
        "Refresh with our diverse drink menu, offering cocktails, fine wines, craft beers, and non-alcoholic beverages.",
      icon: <RiDrinksLine className="h-16 w-16" />,
    },
    {
      title: "Desserts",
      description:
        "Indulge in our decadent desserts, from creamy cheesecakes to rich chocolate delights and fruity sorbets.",
      icon: <LuDessert className="h-16 w-16" />,
    },
  ];
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[url('/assets/hero-bg.png')] h-screen relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <Container className="text-white  inset-0">
          <div className="bg-slate-200/70 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 text-slate-900 px-20 py-10 lg:px-40 lg:py-20 rounded-md text-center flex flex-col gap-y-3 lg:gap-y-6">
            <p className="text-7xl ">
              Best food for <br /> your taste
            </p>
            <p className="text-sm font-medium">
              Discover delectable cuisine and unforgettable moments <br /> in
              our welcoming, culinary haven.
            </p>
          </div>
        </Container>
      </section>

      {/* Menu Section */}
      {HighLightCardData.length > 0 && (
        <section className="py-28">
          <Container>
            <div className="flex flex-col gap-y-8 lg:gap-y-16">
              <p className="text-center text-5xl">Browse Our Menu</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-x-4 xl:grid-cols-4 gap-x-2 xl:gap-x-6 gap-y-2 md:gap-y-4 xl:gap-y-6 ">
                {HighLightCardData.map((item) => {
                  return <HighlightCard {...item} key={crypto.randomUUID()} />;
                })}
              </div>
            </div>
          </Container>
        </section>
      )}
    </main>
  );
}
