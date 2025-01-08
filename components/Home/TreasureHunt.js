"use client";
import React, { useState, useRef, useEffect } from "react";

const TreasureHunt = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [progress, setProgress] = useState(0);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  const steps = [
    {
      title: "¡Feliz Cumpleaños! 🎉",
      message:
        "Es hora de buscar tus regalos especiales. ¿Estás list@ para la aventura?",
      hint: "",
      bg: "bg-pink-100",
    },
    {
      title: "Primera Pista 🎁",
      message:
        "En el lugar donde los aromas dulces flotan y el café se prepara cada mañana...",
      hint: "Regalo 1: Busca en la cocina",
      bg: "bg-blue-100",
    },
    {
      title: "Segunda Pista 🎈",
      message:
        "Donde descansas después de un largo día, entre almohadas suaves podrías encontrar...",
      hint: "Regalo 2: Tu habitación guarda secretos",
      bg: "bg-purple-100",
    },
    {
      title: "Tercera Pista 🌟",
      message:
        "El lugar donde te refrescas y te arreglas cada día tiene una sorpresa especial...",
      hint: "Regalo 3: Revisa el baño",
      bg: "bg-green-100",
    },
    {
      title: "Cuarta Pista 🎨",
      message: "Entre libros y tecnología, donde estudias con dedicación...",
      hint: "Regalo 4: Tu escritorio tiene algo para ti",
      bg: "bg-yellow-100",
    },
    {
      title: "Quinta Pista 🌈",
      message:
        "El lugar donde toda la familia se reúne a compartir risas y historias...",
      hint: "Regalo 5: La sala tiene el último regalo",
      bg: "bg-orange-100",
    },
    {
      title: "¡Lo lograste! 🎊",
      message:
        "¡Encontraste todos los regalos! Esperamos que cada uno te haga muy feliz.",
      hint: "",
      bg: "bg-red-100",
    },
  ];

  const handleSliderStart = (e) => {
    if (e.type === "mousedown") {
      setIsDragging(true);
    }
  };

  const handleSliderMove = (e) => {
    if (!isDragging) return;

    const container = containerRef.current;
    const slider = sliderRef.current;

    if (!container || !slider) return;

    const containerRect = container.getBoundingClientRect();
    const maxX = containerRect.width - slider.offsetWidth;

    let newX = e.clientX - containerRect.left - slider.offsetWidth / 2;
    newX = Math.max(0, Math.min(newX, maxX));

    const newProgress = (newX / maxX) * 100;
    setProgress(newProgress);
    setSliderPosition(newX);

    if (newX >= maxX * 0.9) {
      setIsDragging(false);
      setSliderPosition(0);
      setProgress(0);
      handleNext();
    }
  };

  const handleSliderEnd = () => {
    setIsDragging(false);
    if (sliderPosition < (containerRef.current?.offsetWidth || 0) * 0.9) {
      setSliderPosition(0);
      setProgress(0);
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleSliderMove);
    document.addEventListener("mouseup", handleSliderEnd);
    return () => {
      document.removeEventListener("mousemove", handleSliderMove);
      document.removeEventListener("mouseup", handleSliderEnd);
    };
  }, [isDragging]);

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
            <div
              ref={containerRef}
              className="relative h-14 bg-gray-200 rounded-full mt-6 cursor-pointer overflow-hidden"
            >
              {/* Barra de progreso */}
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-150"
                style={{ width: `${progress}%` }}
              />

              {/* Círculo deslizante */}
              <div
                ref={sliderRef}
                className="absolute top-0 left-0 h-full aspect-square bg-white rounded-full shadow-lg cursor-grab active:cursor-grabbing transform transition-transform hover:scale-105 z-10"
                style={{
                  transform: `translateX(${sliderPosition}px)`,
                  touchAction: "none",
                }}
                onMouseDown={handleSliderStart}
              >
                <div className="flex items-center justify-center h-full text-pink-500">
                  <span className="text-2xl">→</span>
                </div>
              </div>

              {/* Texto instructivo */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-gray-500 font-semibold mix-blend-difference text-white">
                  {currentStep === 0
                    ? "Desliza para empezar"
                    : "Desliza cuando encuentres el regalo"}
                </span>
              </div>
            </div>
          ) : (
            <div className="flex justify-center space-x-4">
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
