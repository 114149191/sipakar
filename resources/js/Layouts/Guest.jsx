import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Navbar from "../Components/Navbar";

export default function Guest(props) {
    return (
        <div className="h-screen">
            <Head title={`${props.judul} | Sipakar`} />
            <Navbar title={props.judul} />
            {props.children}
        </div>
    );
}
