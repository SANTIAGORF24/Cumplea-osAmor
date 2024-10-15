import React from "react";

export function Banner() {
  return (
    <>
      <div className="flex flex-col items-center text-center ">
        <div className="flex flex-col items-center py-36">
          <h1 className="sm:text-9xl font-bold text-5xl text-pink-500 pt-36 pb-9">
            MOMENTOS PARA
          </h1>
          <h1 className="sm:text-9xl font-bold text-5xl text-pink-500">
            DEDICAR
          </h1>
          <h5 className="w-3/6 text-xl py-10 text-slate-500">
            Porque cada momento contigo es una escena perfecta en la historia de
            nuestras vidas, donde cada risa, cada mirada y cada palabra se
            entrelazan para formar un guion lleno de amor, felicidad y
            complicidad, que sólo tú y yo podemos escribir.❤️
          </h5>
        </div>
      </div>
    </>
  );
}
