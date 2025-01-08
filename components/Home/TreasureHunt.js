"use client";
import React, { useState } from "react";

const TreasureHunt = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "¡Feliz Cumpleaños! 🎉",
      message:
        "Es hora de buscar tus regalos especiales. ¿Estás lista para la aventura amor?",
      hint: "",
      bg: "bg-pink-100",
      buttonText: "¡Empezar la búsqueda!",
    },
    {
      title: "Primera Pista 🎁",
      message:
        "Si miras abajo, donde muchas veces se esconden restos de un festín 🥢🕵️, ahí encontrarás algo que te sorprenderá. No busques en lo obvio, sino donde las pequeñas migajas 🧹 encuentran su refugio...",
      hint: "Regalo 1",
      bg: "bg-blue-100",
      buttonText: "¡Encontré el regalo!",
    },
    {
      title: "Segunda Pista 🎈",
      message:
        "Piensa en el lugar 🐾 donde la mas mimada de la casa descansa. 🐕‍🦺 puede ser el escondite perfecto para tu segundo regalo 🎁. ¡No te olvides de mirar bien entre las esquinas! 🔎",
      hint: "Regalo 2",
      bg: "bg-purple-100",
      buttonText: "¡Encontré el regalo!",
    },
    {
      title: "Tercera Pista 🌟",
      message:
        "En el reino donde el agua limpia todo lo que llevas puesto 💦🧺 y donde los rayos del sol 🌞 o el viento soplan entre las telas, hay un escondite secreto. No mires donde los colores se esconden, mira donde todo gira y gira 🧦👚",
      hint: "Regalo 3",
      bg: "bg-green-100",
      buttonText: "¡Encontré el regalo!",
    },
    {
      title: "Cuarta Pista 🎨",
      message:
        "Explora donde guardas tus outfits favoritos 👗👖 y el álbum que no me has dejado ver 📖💃. Quizás tu cuarto regalo 🎁 está esperando en un cajón o en un rincón de ese lugar.",
      hint: "Regalo 4",
      bg: "bg-yellow-100",
      buttonText: "¡Encontré el regalo!",
    },
    {
      title: "Quinta Pista 🌈",
      message:
        "Te miras cada día ahí 🪞, pero ¿alguna vez te has preguntado qué hay detrás de lo que ves? 👁️ Busca donde los secretos de tu belleza se reflejan 🌟, detrás o quizás muy cerca, donde lo superficial no alcanza a revelar lo oculto.",
      hint: "Regalo 5",
      bg: "bg-orange-100",
      buttonText: "¡Encontré el último regalo!",
    },
    {
      title: "¡Lo lograste! 🎊",
      message:
        "¡Encontraste todos los regalos! Espero te gusten y recuerda que te amo mucho ❤️",
      hint: "",
      bg: "bg-red-100",
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div
      className={`min-h-screen ${steps[currentStep].bg} flex items-center justify-center p-4 transition-colors duration-500`}
    >
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-6 space-y-6 transition-all duration-500 transform hover:scale-105 md:max-w-lg lg:max-w-xl">
        <div className="text-center space-y-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            {steps[currentStep].title}
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-6">
            {steps[currentStep].message}
          </p>

          {steps[currentStep].hint && (
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-base md:text-lg font-semibold text-gray-700">
                {steps[currentStep].hint}
              </p>
            </div>
          )}

          {currentStep < steps.length - 1 ? (
            <button
              onClick={handleNext}
              className="w-full py-4 px-6 text-lg font-bold text-white rounded-lg shadow-lg 
                       bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 
                       bg-size-200 bg-pos-0 hover:bg-pos-100
                       transform hover:scale-105 active:scale-95
                       transition-all duration-300 ease-in-out"
            >
              {steps[currentStep].buttonText}
            </button>
          ) : (
            <div className="flex justify-center space-x-4 py-4">
              <span className="animate-bounce text-4xl">🎉</span>
              <span className="animate-bounce text-4xl delay-100">🎁</span>
              <span className="animate-bounce text-4xl delay-200">🎈</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TreasureHunt;
