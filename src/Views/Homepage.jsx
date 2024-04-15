import Carousel from "../Components/Wrappers/CarouselPlans";
import ServicesSection from "../Components/Wrappers/ServicesSection";
import CarouselHero from "../Components/Wrappers/CarouselHero";

export const Homepage = () => {
  return (
    <div>
      {/* -----------HERO------------- */}
      <div>
        {/* <div className="hero min-h-screen font-sans" style={{ backgroundImage: "url(https://www.meditips.com/wp-content/uploads/2017/07/AdobeStock_103968342-scaled-uai-1032x688.jpeg)" }}>
          <div className="hero-overlay bg-opacity-20"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold text-c text-opacity-70 rounded-2xl">MEDICAL ROLLING</h1>
              <button className="btn bg-hb text-ts">¡SOLICITA AHORA!</button>
            </div>
          </div>
        </div> */}
        <CarouselHero />
      </div>
      {/* -----------HERO------------- */}
      {/* -----------PLANES------------- */}
      <div className="bg-cw font-sans bg-w">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-8xl mx-auto">
            {" "}
            {/* Aumenta aún más el tamaño del contenedor */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="col-span-1 md:col-span-2 lg:col-span-3">
                <Carousel />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -----------PLANES------------- */}
      {/* -----------CARDSBOTONS------------- */}
      <div>
        <ServicesSection />
      </div>
      {/* -----------CARDSBOTONS------------- */}
    </div>
  );
};

export default Homepage;
