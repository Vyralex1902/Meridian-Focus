import React from 'react';
import "./App.css";
import "./glowCards.css"

type CardProps = {
  title: string;
  icon: string;
  href: string;
};

const cardsData: CardProps[] = [
  {
    title: "Serverless hosting vs traditional",
    icon: "June 2024",
    href: "https://lucasnode.com/docs",
  },
  {
    title: "Javascript vs Typescript",
    icon: "June 2024",
    href: "https://lucasnode.com/docs",
  },
  {
    title: "Quick search algorithm",
    icon: "July 2024",
    href: "https://lucasnode.com/docs",
  },
  {
    title: "JS Arrow Functions",
    icon: "July 2024",
    href: "https://lucasnode.com/docs",
  },
  {
    title: "React vs vanilla HTML/JS",
    icon: "July 2024",
    href: "https://lucasnode.com/docs",
  },
  {
    title: "Quicksorting algorithm",
    icon: "July 2024",
    href: "https://lucasnode.com/docs",
  },
];

function GlowCards() {
  return (
    <div id='card-body' className="bg-[#1E1E1E] dark:bg-white/[.025]">
      <div id="cards">
        {cardsData.map((card, index) => (
          <div key={index} className="card" onClick={() => { window.location.href = card.href }}>
            <div className="card-content">
              <div className="card-info-wrapper">
                <div className="card-info">
                  <div className="card-info-title">
                    <img src={card.icon} className='w-[50px]'></img>
                    <h3>{card.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GlowCards;
