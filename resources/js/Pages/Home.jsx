import React from "react";
import Hero from "../Components/Hero";
import Guest from "../Layouts/Guest";

export default function Home() {
    return (
        <Guest judul="Home" user="Masdaharia">
            <Hero />
            <div className="bg-yellow-600">Ini adalah Halaman Home</div>
        </Guest>
    );
}
