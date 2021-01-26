import React from 'react';
import Layout from "../components/layout";
import Image from "next/image"

const Bennes = () => {
    return (
        <Layout>
            <div className="bg-white text-justify pt-40 md:pt-24">
                <div className="p-5 flex justify-center" id="benne_a_chaine">
                    <a href="#benne_a_bras" className="rounded-md shadow flex items-center justify-center text-center w-max hover:shadow-2xl h-max hover:bg-blue-400 mr-3 px-8 py-3 text-sm sm:text-base lg:text-xl font-medium text-white bg-blue-600 md:text-ld lg:text-xl md:px-10 lg:px-2">
                        Allez directement aux bennes à bras
                    </a>
                </div>
                <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 bg-blue-100">

                    <div className="text-center md:mb-5">
                        <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Benne à chaîne
                        </h2>
                        <p className="mt-4 mb-4 md:mb-0 max-w-2xl text-xl text-left text-gray-500 lg:mx-auto">
                            Cette benne est destinée pour l'évacuation de gravats de chantier (démolition, viabilisation, assainissement etc...), de terre, bitume, sable, graviers, boue, rochers, briques, plâtre, parpaings,
                            déchets ...
                        </p>
                        <p className="mt-4 mb-4 md:mb-0 max-w-2xl text-xl text-left text-gray-500 lg:mx-auto">
                            Les bennes à chaîne s'offrent une taille idéale
                        </p>
                        <p className="mt-4 mb-4 md:mb-0 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            Rappel: Notre flotte est équipée de la norme euro 6.
                        </p>
                    </div>

                    <dl className="md:grid md:grid-cols-2" id="#benne_a_chaines">
                        <Image src="/img/chaines1.png" alt="benne à chaine" width="500" height="500" className="object-cover"/>
                        <Image src="/img/chaines2.png" alt="location benne à chaines" width="500" height="500"
                             className="object-cover"/>
                    </dl>

                    <div className="mt-5 md:mt-14 lg:text-center">
                        <h2 className="text-2xl text-primaryColor font-semibold tracking-wide uppercase font-bold">- Les
                            tailles de nos bennes -</h2>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            Le volume va de 8m3 à 20m3, les dimensions intérieurs (cm) et en Longueur x Largeur x
                            Hauteur.
                        </p>
                    </div>


                    <div
                        className="flex flex-wrap md:mb-5 justify-center items-center text-center space-x-0 sm:space-x-6">
                        <div className="accueil-bg-magic min-h-400 w-52 border border-gray-200 rounded-lg mt-5">
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-primaryColor"> 8m3</h2>
                                <p className="mt-2 text-lg text-gray-800">
                                    Dimensions (cm): 300 x 150 x 152
                                </p>
                                <p className="mt-6">

                                    <span className="text-4xl font-extrabold text-gray-900"> 320€ </span>
                                    <span className="font-medium text-black-800"> HT </span>
                                </p>

                                <a
                                    href="/contact"
                                    className="mt-8 block w-full bg-primaryColor border border-secondaryColor rounded-md py-2 text-sm font-semibold text-white hover:bg-secondaryColor"
                                >
                                    Réserver cette benne
                                </a>
                            </div>
                        </div>

                        <div className="accueil-bg-magic min-h-400 w-52 border border-gray-200 rounded-lg mt-5">
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-primaryColor"> 10m3</h2>
                                <p className="mt-2 text-lg text-gray-800">
                                    Dimensions (cm): 300 x 150 x 190
                                </p>
                                <p className="mt-6 ">

                                    <span className="text-4xl font-extrabold text-gray-900"> 350€ </span>
                                    <span className="font-medium text-black-800"> HT </span>
                                </p>

                                <a
                                    href="/contact"
                                    className="mt-8 block w-full bg-primaryColor border border-secondaryColor rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-secondaryColor"
                                >
                                    Réserver cette benne
                                </a>
                            </div>
                        </div>

                        <div className="accueil-bg-magic min-h-400 w-52 border border-gray-200 rounded-lg mt-5">
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-primaryColor"> 12m3</h2>
                                <p className="mt-2 text-lg text-gray-800">
                                    Dimensions (cm): 300 x 180 x 190
                                </p>
                                <p className="mt-6 text-center">

                                    <span className="text-4xl font-extrabold text-gray-900"> 400€ </span>
                                    <span className="font-medium text-black-800"> HT </span>
                                </p>

                                <a
                                    href="/contact"
                                    className="mt-8 block w-full bg-primaryColor border border-secondaryColor rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-secondaryColor"
                                >
                                    Réserver cette benne
                                </a>
                            </div>
                        </div>

                        <div className="accueil-bg-magic min-h-400 w-52 border border-gray-200 rounded-lg mt-5">
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-primaryColor"> 15m3</h2>
                                <p className="mt-2 text-lg text-gray-800">
                                    Dimensions (cm): 300 x 180 x 200
                                </p>
                                <p className="mt-6">

                                    <span className="text-4xl font-extrabold text-gray-900"> 500€ </span>
                                    <span className="font-medium text-black-800"> HT </span>
                                </p>

                                <a
                                    href="/contact"
                                    className="mt-8 block w-full bg-primaryColor border border-secondaryColor rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-secondaryColor"
                                >
                                    Réserver cette benne
                                </a>
                            </div>
                        </div>

                        <div className="accueil-bg-magic min-h-400 w-52 border border-gray-200 rounded-lg mt-5">
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-primaryColor"> 20m3</h2>
                                <p className="mt-2 text-lg text-gray-800">
                                    Dimensions (cm): 380 x 220 x 240
                                </p>
                                <p className="mt-6">

                                    <span className="text-4xl font-extrabold text-gray-900"> 600€ </span>
                                    <span className="font-medium text-black-800"> HT </span>
                                </p>

                                <a
                                    href="/contact"
                                    className="mt-8 block w-full bg-primaryColor border border-secondaryColor rounded-md py-2 text-sm font-semibold text-white hover:bg-secondaryColor"
                                >
                                    Réserver cette benne
                                </a>
                            </div>
                        </div>

                        <div >
                            <h2 className="font-extrabold text-left">Les déchets autorisés pour la benne à chaine :</h2>
                        </div>

                        {/*Keywords*/}
                        <div id="benne_a_bras" >
                            <div className="hid">location de benne pour chantier</div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 bg-blue-light my-10">
                    <div className="text-center mb-5" >
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl" >
                            Benne à bras - Ampliroll
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto" >
                            Rappel: Notre flotte est équipée de la norme euro 6.
                        </p>
                    </div>

                    <dl className="md:grid md:grid-cols-2">
                        <Image src="/img/bras1.png" alt="benne à chaines" width="500" height="500" className="object-cover"/>
                        <Image src="/img/bras2.png" alt="location benne à chaines" width="500" height="500"
                             className="object-cover"/>
                    </dl>

                    <div className="md:mt-14 lg:text-center">
                        <h2 className="text-lg pt-5 md:text-2xl text-center text-primaryColor font-semibold tracking-wide uppercase font-bold">-
                            Les tailles de nos bennes -</h2>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            Le volume va de 12m3 à 40m3, les dimensions intérieurs (cm) et en Longueur x Largeur x
                            Hauteur.
                        </p>
                    </div>


                    <div
                        className="flex flex-wrap md:mb-5 justify-center items-center text-center space-x-0 sm:space-x-6">
                        <div
                            className="accueil-bg-magic min-h-400 w-full md:w-44 border border-gray-200 rounded-lg mt-5">
                            <div className="p-5">
                                <h2 className="text-2xl font-bold text-primaryColor"> 12m3</h2>
                                <p className="mt-2 text-lg text-gray-800">
                                    Dimensions (cm): 350 x 150 x 190
                                </p>
                                <p className="mt-6">

                                    <span className="text-3xl font-extrabold text-gray-900"> 400€ </span>
                                    <span className="font-medium text-black-800"> HT </span>
                                </p>

                                <a
                                    href="/contact"
                                    className="mt-8 block w-full bg-primaryColor border border-secondaryColor rounded-md py-2 text-sm font-semibold text-white hover:bg-secondaryColor"
                                >
                                    Réserver cette benne
                                </a>
                            </div>
                        </div>

                        <div
                            className="accueil-bg-magic min-h-400 w-full md:w-44 border border-gray-200 rounded-lg mt-5">
                            <div className="p-5">
                                <h2 className="text-2xl font-bold text-primaryColor"> 15m3</h2>
                                <p className="mt-2 text-lg text-gray-800">
                                    Dimensions (cm): 350 x 180 x 190
                                </p>
                                <p className="mt-6 ">

                                    <span className="text-3xl font-extrabold text-gray-900"> 500€ </span>
                                    <span className="font-medium text-black-800"> HT </span>
                                </p>

                                <a
                                    href="/contact"
                                    className="mt-8 block w-full bg-primaryColor border border-secondaryColor rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-secondaryColor"
                                >
                                    Réserver cette benne
                                </a>
                            </div>
                        </div>

                        <div
                            className="accueil-bg-magic min-h-400 w-full md:w-44 border border-gray-200 rounded-lg mt-5">
                            <div className="p-5">
                                <h2 className="text-2xl font-bold text-primaryColor"> 20m3</h2>
                                <p className="mt-2 text-lg text-gray-800">
                                    Dimensions (cm): 380 x 220 x 240
                                </p>
                                <p className="mt-6 text-center">

                                    <span className="text-3xl font-extrabold text-gray-900"> 600€ </span>
                                    <span className="font-medium text-black-800"> HT </span>
                                </p>

                                <a
                                    href="/contact"
                                    className="mt-8 block w-full bg-primaryColor border border-secondaryColor rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-secondaryColor"
                                >
                                    Réserver cette benne
                                </a>
                            </div>
                        </div>

                        <div
                            className="accueil-bg-magic min-h-400 w-full md:w-44 border border-gray-200 rounded-lg mt-5">
                            <div className="p-5">
                                <h2 className="text-2xl font-bold text-primaryColor"> 25m3</h2>
                                <p className="mt-2 text-lg text-gray-800">
                                    Dimensions (cm): 400 x 260 x 240
                                </p>
                                <p className="mt-6">

                                    <span className="text-3xl font-extrabold text-gray-900"> 700€ </span>
                                    <span className="font-medium text-black-800"> HT </span>
                                </p>

                                <a
                                    href="/contact"
                                    className="mt-8 block w-full bg-primaryColor border border-secondaryColor rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-secondaryColor"
                                >
                                    Réserver cette benne
                                </a>
                            </div>
                        </div>

                        <div
                            className="accueil-bg-magic min-h-400 w-full md:w-44 border border-gray-200 rounded-lg mt-5">
                            <div className="p-5">
                                <h2 className="text-2xl font-bold text-primaryColor"> 30m3</h2>
                                <p className="mt-2 text-lg text-gray-800">
                                    Dimensions (cm): 420 x 280 x 260
                                </p>
                                <p className="mt-6">

                                    <span className="text-3xl font-extrabold text-gray-900"> 930€ </span>
                                    <span className="font-medium text-black-800"> HT </span>
                                </p>

                                <a
                                    href="/contact"
                                    className="mt-8 block w-full bg-primaryColor border border-secondaryColor rounded-md py-2 text-sm font-semibold text-white hover:bg-secondaryColor"
                                >
                                    Réserver cette benne
                                </a>
                            </div>
                        </div>

                        <div
                            className="accueil-bg-magic min-h-400 w-full md:w-44 border border-gray-200 rounded-lg mt-5">
                            <div className="p-5">
                                <h2 className="text-2xl font-bold text-primaryColor"> 40m3</h2>
                                <p className="mt-2 text-lg text-gray-800">
                                    Dimensions (cm): 440 x 300 x 300
                                </p>
                                <p className="mt-6">

                                    <span className="text-3xl font-extrabold text-gray-900"> 1100€ </span>
                                    <span className="font-medium text-black-800"> HT </span>
                                </p>

                                <a
                                    href="/contact"
                                    className="mt-8 block w-full bg-primaryColor border border-secondaryColor rounded-md py-2 text-sm font-semibold text-white hover:bg-secondaryColor"
                                >
                                    Réserver cette benne
                                </a>
                            </div>
                        </div>


                    </div>
                </div>

            </div>

        </Layout>
    );
};

export default Bennes;
