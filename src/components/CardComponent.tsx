import React from "react";
import { Card } from "./Card.tsx";
import "../styles/CardComponent.css";
export const CardComponent = () => {
  const cardsData = [
    {
      titleH3: "Emprendimiento",
      titleH2: "Para empezar bien",
      description:
        "Los comienzos son difíciles, hacelos mas fácil introduciendote al mercado con una marca original y una imagen potente. Diseñamos tu marca y toda tu papelería comercial. Te damos todos los archivos listos para imprimir.",
    },
    {
      titleH3: "Profesional",
      titleH2: "Empezando a ejercer",
      description:
        "Empezar a ejercer tu profesión no es fácil, y conseguir clientes tampoco. Por eso es importante tener una imagen profesional que te permita destacarte.",
    },
    {
      titleH3: "Rediseños",
      titleH2: "Actualizate",
      description:
        "¿El diseño de tu marca se quedó en el tiempo? ¿No estás conforme con su aspecto? Podemos rediseñarla para que se ajuste a lo que estás buscando.",
    },
  ];
  return (
    <>
      <section className="SectionCards">
        <div className="CardsContainer">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              titleH3={card.titleH3}
              titleH2={card.titleH2}
              description={card.description}
            />
          ))}
        </div>
      </section>
    </>
  );
};
