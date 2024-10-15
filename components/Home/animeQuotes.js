import React from "react";

const animeQuotes = [
  {
    episode: "Naruto Shippuden, Capítulo 166",
    timestamp: "09:00 - 20:00",
    text: "Lo importante que ha sido en mi vida y cómo me has ayudado a ser mejor persona, enseñándome cosas que día a día me hacen mejor.",
    link: "https://www.borutoanime.online/2020/06/naruto-shippuden-164-168-sub-espanol.html",
  },
  {
    episode: "The Last (Película de Naruto)",
    timestamp: "1:42:20 - 1:46:40",
    text: "Lo importante que te has vuelto para mí y cómo quiero que seas el amor de mi vida y no quiero alejarme de ti nunca más en la vida.",
  },
  {
    episode: "Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai",
    timestamp: "No aplica",
    text: "Me hace pensar en ti amor, por alguna razón algunas veces me recuerdas a Mai Sakurajima, y algún día tendremos que verlo.",
  },
];

const AnimeQuotesGrid = () => {
  return (
    <div className="flex flex-col items-center p-5 w-full">
      <h2 className="text-5xl font-bold mb-4 text-center text-pink-500 pb-10">
        MINUTOS DE AMOR ANIME
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-5/6">
        {animeQuotes.map((quote, index) => (
          <div
            key={index}
            className="bg-blue-100 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-lg font-semibold mb-2 text-center">
              {quote.episode}
            </h3>
            <p className="text-gray-600 mb-1 text-center">{quote.timestamp}</p>
            <p className="text-gray-800 text-center">{quote.text}</p>
            {quote.link && (
              <a
                href={quote.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-2 inline-block text-center"
              >
                Ver en el enlace
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimeQuotesGrid;
