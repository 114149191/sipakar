import React, { useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import * as IoIcons from "react-icons/io";
import { Inertia } from "@inertiajs/inertia";
import toast, { Toaster } from "react-hot-toast";

export default function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const [error, setError] = useState();

    const login = (e) => {
        e.preventDefault();
        let data = {
            username: username,
            password: password,
        };

        Inertia.post("login", data, {
            onError: (e) => {
                e?.failed && toast.error(e?.failed);
                setError(e);
            },
        });
    };

    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
            <Toaster />
            <div className="bg-white rounded-2xl shadow-xl space-y-2 sm:w-1/4 w-10/12 relative overflow-hidden">
                <Link href="/">
                    <a href="">
                        <div className="absolute z-30">
                            <IoIcons.IoMdArrowRoundBack
                                className="text-white opacity-70 ml-8 mt-8"
                                size={24}
                            />
                        </div>
                    </a>
                </Link>

                <div className="absolute w-screen -translate-y-10 skew-y-6 transform sm:h-48 h-32 bg-blue-500 z-10"></div>
                <div className="absolute w-screen -translate-y-10 -skew-y-6 transform sm:h-16 h-28 bg-gray-300 z-0"></div>
                <form
                    onSubmit={login}
                    className="z-40 px-10 py-5 pt-32 space-y-6"
                >
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold text-gray-800">
                            Selamat Datang!
                        </h1>
                    </div>
                    <div className="flex flex-col space-y-3">
                        <div className="py-1 border-b border-gray-500">
                            <input
                                type="text"
                                className="bg-white border-0 focus:outline-none focus:ring-white px-0 w-full"
                                placeholder="Username"
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
                                value={username}
                            />
                        </div>
                        {error?.username && (
                            <span className="text-red-500 italic text-xs">
                                {error?.username}
                            </span>
                        )}
                        <div className="py-1 border-b border-blue-500">
                            <input
                                type="password"
                                className="bg-white border-0 focus:outline-none focus:ring-white px-0 w-full"
                                placeholder="Password"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                value={password}
                            />
                        </div>
                        {error?.password && (
                            <span className="text-red-500 italic text-xs">
                                {error?.password}
                            </span>
                        )}
                        <div className="pt-5 w-full flex">
                            <button
                                type="submit"
                                className="bg-blue-500 rounded-full text-white font-bold w-full py-2"
                            >
                                Masuk
                            </button>
                        </div>
                        <div className="flex justify-between flex-row-reverse py-3">
                            <h1 className="text-gray-600 hover:underline cursor-pointer">
                                Lupa Password?
                            </h1>
                            <Link href="/register">
                                <a
                                    href=""
                                    className="text-gray-600 hover:underline cursor-pointer"
                                >
                                    Daftar Akun
                                </a>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
