import Carousel from "../Components/Wrappers/CarouselPlans";
import ServicesSection from "../Components/Wrappers/ServicesSection";
import CarouselHero from "../Components/Wrappers/CarouselHero";

export const Homepage = () => {
  return (
    <div>
      <div>
        <CarouselHero />
      </div>
      <div className="bg-cw font-sans bg-w">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-8xl mx-auto">
            {" "}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="col-span-1 md:col-span-2 lg:col-span-3">
                <Carousel />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ServicesSection />
      </div>
    </div>
  );
};

export default Homepage;
