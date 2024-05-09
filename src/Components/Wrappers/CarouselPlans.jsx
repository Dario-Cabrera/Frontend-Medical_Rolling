import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [cardsData, setCardsData] = useState([
    {
      title: "PLAN SENIOR",
      description: "Pensado para que vivas mejor que nunca!",
      imageUrl:
        "https://img.freepik.com/free-photo/happy-grandparents-using-their-digital-laptop_329181-14741.jpg?t=st=1712706244~exp=1712709844~hmac=307187da4cf6f9a8fc98e25bab24fe70a963e8dd238502de2fb74331fc73866f&w=1380",
    },
    {
      title: "PLAN FAMILIAR",
      description: "Pensado para más momentos felices juntos!",
      imageUrl: "https://lifeonlypractical.files.wordpress.com/2014/07/family.jpg",
    },
    {
      title: "PLAN JOVEN",
      description: "Pensado para que vivas siempre al máximo!",
      imageUrl:
        "https://img.freepik.com/free-photo/smiley-couple-posing-together-outdoors_23-2148737854.jpg?t=st=1712706704~exp=1712710304~hmac=df48b3b4acd0713511b1fff7d737454b6534211f9b0e688d51b470b5b9784c8a&w=826",
    },
  ]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); // Definir el ancho para dispositivos móviles según tus necesidades
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Verificar el tamaño de la ventana al cargar la página

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCarouselClick = (index) => {
    if (!isMobile) {
      // Verificar si no es un dispositivo móvil
      const newCardsData = [...cardsData];
      const clickedCard = newCardsData.splice(index, 1)[0];
      newCardsData.splice(1, 0, clickedCard);
      setCardsData(newCardsData);
    }
  };

  return (
    <div className="overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-20 p-4 md:p-20">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`shadow-xl ${isMobile ? "" : index === 1 ? "lg:col-span-1 xl:col-span-1" : "lg:w-60p xl:w-60p"} ${
              index === 1 && !isMobile ? "scale-125" : "hover:scale-110 transition-transform duration-300 ease-in-out"
            } border border-gray-200 rounded-lg overflow-hidden`}
            style={{ margin: "10px" }}
            onClick={() => handleCarouselClick(index)}>
            <img src={card.imageUrl} alt={card.title} className="rounded-t-lg w-full h-64 md:h-72 xl:h-80 object-cover" />
            <div className="p-4 bg-w rounded-b-lg text-center">
              <h2 className="text-xl font-bold mb-2 text-c">{card.title}</h2>
              <p className="text-sm mb-4 text-c">{card.description}</p>
              <Link to="/contactPlan"><button className="btn btn-info bg-ts hover:bg-hb hover:text-w hover:border-none">Conocer más</button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
