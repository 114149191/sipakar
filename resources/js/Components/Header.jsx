import React, { useState } from "react";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";
import { Transition } from "@headlessui/react";

export default function Header(props) {
    const [showLogout, setShowLogout] = useState(false);

    return (
        <div className="w-full bg-white h-16 flex items-center p-3 justify-between relative">
            <h1 className="text-gray-700 text-xl font-bold">{props.title}</h1>
            <div className="flex items-center justify-between w-44">
                <div className="flex space-x-2">
                    <div className="p-2 rounded-full bg-emerald-100/80">
                        <MdIcons.MdCall
                            size={18}
                            className="text-hijau-telpon"
                        />
                    </div>

                    <div className="p-2 rounded-full bg-blue-100/80">
                        <RiIcons.RiChat3Fill
                            size={18}
                            className="text-blue-600"
                        />
                    </div>

                    <div className="p-2 rounded-full bg-amber-100/80">
                        <BsIcons.BsBellFill
                            size={18}
                            className="text-amber-500"
                        />
                    </div>
                </div>

                <div
                    onClick={() => {
                        setShowLogout(!showLogout);
                    }}
                    className="w-8 h-8 overflow-hidden rounded-full"
                >
                    <img
                        src="../../../img/Profile.jpg"
                        alt=""
                        className="w-full"
                    ></img>
                </div>
            </div>

            {showLogout && (
                <div className="absolute top-16 right-5">
                    <Transition
                        show={showLogout}
                        enter="transition-opacity duration-75"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="bg-white rounded-lg shadow-lg p-2 flex flex-col items-end space-y-2">
                            <h2>Masdaharia</h2>
                            <button className="p-2 rounded-md bg-red-100 text-red-400">
                                Logout
                            </button>
                        </div>
                    </Transition>
                </div>
            )}
        </div>
    );
}
