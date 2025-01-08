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
        "En el lugar donde los aromas dulces flotan y el café se prepara cada mañana...",
      hint: "Regalo 1: Busca en la cocina",
      bg: "bg-blue-100",
      buttonText: "¡Encontré el regalo!",
    },
    {
      title: "Segunda Pista 🎈",
      message:
        "Donde descansas después de un largo día, entre almohadas suaves podrías encontrar...",
      hint: "Regalo 2: Tu habitación guarda secretos",
      bg: "bg-purple-100",
      buttonText: "¡Encontré el regalo!",
    },
    {
      title: "Tercera Pista 🌟",
      message:
        "El lugar donde te refrescas y te arreglas cada día tiene una sorpresa especial...",
      hint: "Regalo 3: Revisa el baño",
      bg: "bg-green-100",
      buttonText: "¡Encontré el regalo!",
    },
    {
      title: "Cuarta Pista 🎨",
      message: "Entre libros y tecnología, donde estudias con dedicación...",
      hint: "Regalo 4: Tu escritorio tiene algo para ti",
      bg: "bg-yellow-100",
      buttonText: "¡Encontré el regalo!",
    },
    {
      title: "Quinta Pista 🌈",
      message:
        "El lugar donde toda la familia se reúne a compartir risas y historias...",
      hint: "Regalo 5: La sala tiene el último regalo",
      bg: "bg-orange-100",
      buttonText: "¡Encontré el último regalo!",
    },
    {
      title: "¡Lo lograste! 🎊",
      message:
        "¡Encontraste todos los regalos! Esperamos te gusten y recuerda que te amo mucho ❤️",
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
