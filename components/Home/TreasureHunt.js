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
        "Busca 🌟 donde al comer se te cae la comida... 🥄🍴 Ahí, en algún lugar bajo la mesa o cerca de las sillas, encontrarás tu primer regalo 🎀. ¡No olvides revisar bien! 👀",
      hint: "Regalo 1",
      bg: "bg-blue-100",
      buttonText: "¡Encontré el regalo!",
    },
    {
      title: "Segunda Pista 🎈",
      message:
        "Piensa en el lugar 🐾 donde quien ladra ladra descansa. 🐕‍🦺 Una casita con puertas y ventanas 🏠 puede ser el escondite perfecto para tu segundo regalo 🎁. ¡No te olvides de mirar bien entre las esquinas! 🔎",
      hint: "Regalo 2",
      bg: "bg-purple-100",
      buttonText: "¡Encontré el regalo!",
    },
    {
      title: "Tercera Pista 🌟",
      message:
        "Busca en el sitio donde la ropa se vuelve limpia 🧺✨ y donde las sábanas se cuelgan al sol 🌞. El lugar del lavado y secado esconde tu tercer regalo 🎀. ¡Chequea cada rincón! 🧦👚",
      hint: "Regalo 3",
      bg: "bg-green-100",
      buttonText: "¡Encontré el regalo!",
    },
    {
      title: "Cuarta Pista 🎨",
      message:
        "Explora donde guardas tus outfits favoritos 👗👖 y el álbum de recuerdos de tus 15 años 📖💃. Quizás tu cuarto regalo 🎁 está esperando en un cajón o en un rincón de ese lugar.",
      hint: "Regalo 4",
      bg: "bg-yellow-100",
      buttonText: "¡Encontré el regalo!",
    },
    {
      title: "Quinta Pista 🌈",
      message:
        "Mírate al espejo 🪞 mientras aplicas tu delineador favorito 🖌️👁️. Justo detrás de tu reflejo 🌟 es posible que se oculte tu quinto regalo 🎀. ¡Revisa detrás del espejo con cuidado!",
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
