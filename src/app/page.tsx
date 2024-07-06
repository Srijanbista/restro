import ContainerWrapper from "@/components/Container";
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
        <ContainerWrapper className="text-white  inset-0">
          <div className="bg-slate-200/70 w-[320px] sm:w-[400px] md:w-[640px] lg:w-[768px] xl:w-[1024px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 text-slate-900 px-10 py-5 md:px-20 md:py-10 lg:px-40 lg:py-20 rounded-md text-center flex flex-col gap-y-3 lg:gap-y-6">
            <p className="text-3xl md:text-5xl lg:text-7xl">
              Best food for <br /> your taste
            </p>
            <p className="text-xs md:text-sm lg:text-base xl:text-xl font-medium">
              Discover delectable cuisine and unforgettable moments <br /> in
              our welcoming, culinary haven.
            </p>
          </div>
        </ContainerWrapper>
      </section>

      {/* Menu Section */}
      {HighLightCardData.length > 0 && (
        <section className="py-7 lg:py-14">
          <ContainerWrapper>
            <div className="flex flex-col gap-y-8 lg:gap-y-16">
              <p className="text-center text-4xl lg:text-5xl">
                Browse Our Menu
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-8 md:gap-x-12 xl:gap-x-16 gap-y-4 md:gap-y-6 xl:gap-y-8 ">
                {HighLightCardData.map((item) => {
                  return <HighlightCard {...item} key={crypto.randomUUID()} />;
                })}
              </div>
            </div>
          </ContainerWrapper>
        </section>
      )}
    </main>
  );
}
