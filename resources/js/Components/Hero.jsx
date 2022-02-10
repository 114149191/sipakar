import React from "react";

export default function Hero() {
    return (
        <div className="h-screen pt-20 px-20 grid grid-cols-2">
            <div className="flex flex-col items-start justify-center space-y-5">
                <h1 className="text-5xl font-bold text-gray-800">
                    Sistem Pakar Medis
                </h1>
                <p className="leading-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    itaque deserunt blanditiis voluptas odio? Minima in eveniet
                    tempore et, eius ex enim? Perferendis atque sapiente id
                    repellat suscipit vero. Autem!
                </p>
                <button className="bg-blue-500 text-white font-bold text-xl px-5 py-2 rounded-lg transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                    Diagnosa Sekarang
                </button>
            </div>
            <div className="w-full flex items-center">
                <img src="/img/doctor.svg" alt="" />
            </div>
        </div>
    );
}
