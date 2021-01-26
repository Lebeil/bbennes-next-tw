import React from 'react';
import Link from "next/link"

const Accueil = () => {
    return (
        <div>
            <div id="accueil" className="pt-40 px-4 text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mt-5">
                    <span className="block xl:inline">Location de bennes à </span>
                    <span className="block text-blue-600 xl:inline">Paris et en Ile-de-France</span>
                </h1>

                <p
                    className="mt-3 max-w-sm mx-auto text-gray-700 sm:text-lg md:mt-5 md:text-xl md:max-w-2xl lg:max-w-3xl"
                >
                    Envie de débarraser simplement et rapidement vos déchets et/ou gravats de chantiers? Les prix sont
                    parmi les plus bas du marché !
                </p>

                <div className="mt-5 max-w-md mx-auto flex justify-center md:mt-8">
                    <Link href="/contact">
                        <a
                            className="rounded-md shadow flex items-center justify-center w-32 hover:shadow-2xl hover:bg-blue-400 md:w-40 lg:w-60 mr-3 px-8 py-3 text-sm sm:text-base lg:text-xl font-medium text-white bg-blue-600 md:py-4 md:text-ld lg:text-xl md:px-10 lg:px-2"
                        >
                            Réserver une benne
                        </a>
                    </Link>

                    <Link href="/dechets-gravats">
                        <a
                            className="rounded-md shadow flex items-center justify-center w-32 md:w-40 lg:w-60 mr-3 px-8 py-3 ring-1 ring-gray-200 text-sm sm:text-base lg:text-xl font-medium text-black-500 bg-white hover:shadow-2xl hover:ring-green-400 hover:text-green-400 md:py-4 lg:py-0 md:text-ld lg:text-xl md:px-10 lg:px-2"
                        >
                            Déchets autorisés
                        </a>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Accueil;
