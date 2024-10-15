import React from "react";

const bigBangQuotes = [
  {
    episode: "Temporada 7, Episodio 6",
    timestamp: "13:30 - 13:40",
    text: "Te dedico una de las mejores canciones de amor XD.",
  },
  {
    episode: "Capítulo 24, Temporada 10",
    timestamp: "17:30 - 19:00",
    text: "NO VOY A BESAR A NADIE MÁS NUNCA, pero lo relaciono con lo seguro que estoy de querer pasar el resto de mis días junto a ti.",
  },
  {
    episode: "Capítulo 8, Temporada 8",
    timestamp: "17:00 - 18:55",
    text: "Lo relaciono en que siempre te ves hermosa y para mí siempre vas a ser la mujer más hermosa del mundo y te amo mucho.",
  },
];

const BigBangQuotesGrid = () => {
  return (
    <div className="flex flex-col items-center p-5 w-full pb-36">
      <h2 className="text-5xl font-bold mb-4 text-center text-pink-500 pb-10">
        MINUTOS DE AMOR THE BIG BANG THEORY
      </h2>
      <p className="text-center mb-4">
        Aquí puedes ver la serie porque no está en Netflix:{" "}
        <a
          href="https://seriesgod.com/big-bang/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Ver Big Bang Theory
        </a>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-5/6">
        {bigBangQuotes.map((quote, index) => (
          <div
            key={index}
            className="bg-blue-100 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-lg font-semibold mb-2 text-center">
              {quote.episode}
            </h3>
            <p className="text-gray-600 mb-1 text-center">{quote.timestamp}</p>
            <p className="text-gray-800 text-center">{quote.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BigBangQuotesGrid;
