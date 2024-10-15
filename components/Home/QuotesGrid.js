import React from "react";

const quotes = [
  {
    episode: "Temporada 2, Capítulo 7",
    timestamp: "30:15 - 31:00",
    text: "No quiero que vuelvas a sufrir ni que te vuelvan a lastimar nunca más.",
  },
  {
    episode: "Temporada 4, Episodio 15",
    timestamp: "32:15 - 32:45",
    text: "Las ganas de verte todo el tiempo y la felicidad que me produce verte.",
  },
  {
    episode: "Temporada 5, Episodio 15",
    timestamp: "24:50 - 25:06",
    text: "Lo emocionado que me hace estar cerca de ti, y lo nervioso que eso me pone a pesar de todo lo que hemos pasado juntas.",
  },
  {
    episode: "Temporada 6, Episodio 16",
    timestamp: "59:31 - 1:00:00",
    text: "No dejaría nunca que algo malo te pasara y siempre voy a intervenir para que estés bien.",
  },
  {
    episode: "Temporada 7, Capítulo 1",
    timestamp: "18:45 - 19:00",
    text: "Pase lo que pase, siempre pienso en ti y siempre voy a pensar en ti.",
  },
  {
    episode: "The Walking Dead: The Ones Who Live, Temporada 1, Episodio 5",
    timestamp: "No disponible en español latino",
    text: "Como tú haces feliz mi mundo y día a día me ayudas a ser mejor persona.",
    link: "https://www.youtube.com/watch?v=7GDP2c6RrH4&ab_channel=AgustinaBel%C3%A9n",
  },
];

const QuotesGrid = () => {
  return (
    <div className="flex flex-col items-center p-5 w-full">
      <h2 className="text-5xl font-bold mb-4 text-center text-pink-500 pb-10">
        MINUTOS DE AMOR TWD
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-5/6">
        {quotes.map((quote, index) => (
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
                Ver en YouTube
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuotesGrid;
