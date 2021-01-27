import React from 'react';
import Image from "next/image";

const CallToAction = () => {
    return (
        <div>
            <div
                className="relative flex flex-col border-gray-200 border-t lg:flex-row"
            >
                <div
                    className="px-10 pb-16 pt-10 w-full order-2 text-center md:py-32 lg:w-1/2 lg:order-1"
                >
                    <h1 className="font-extrabold text-gray-900 text-5xl">
                        <span>Livraison en 24h 🚚</span>
                        <br/>
                        <span className="text-blue-900">Devis gratuit sous 2h ⏱</span>
                    </h1>
                    <div
                        className="mt-3 text-left text-lg mx-auto text-black-800 sm:text-xl md:mt-5 md:max-w-md"
                    >
                        <h2 className="underline font-semibold md:text-2xl">Les avantages chez B bennes:</h2>
                        <ul>
                            <li className="flex items-center py-2">
                                <div className="absolute">
                                    <img
                                        src="img/checked.svg"
                                        alt="check icone"
                                        className="h-10 w-10"
                                    />
                                </div>
                                <p className="relative -right-12 leading-tight">
                                    Evite tout simplement de vous déplacer en déchetterie.
                                </p>
                            </li>
                            <li className="flex items-center py-2">
                                <div className="absolute">
                                    <img
                                        src="img/checked.svg"
                                        alt="check icone"
                                        className="h-10 w-10"
                                    />
                                </div>
                                <p className="relative -right-12 leading-tight">
                                    Forfait tout compris (location de 1 à 7 jours, pose, collecte et traitement des
                                    déchets).
                                </p>
                            </li>
                            <li className="flex items-center py-2">
                                <div className="absolute">
                                    <img
                                        src="img/checked.svg"
                                        alt="check icone"
                                        className="h-10 w-10"
                                    />
                                </div>
                                <p className="relative -right-12 leading-tight">Livraison de la benne gratuite en 24h dans toute l'Ile-de-France.</p>
                            </li>
                            <li className="flex items-center py-2">
                                <div className="absolute">
                                    <img
                                        src="img/checked.svg"
                                        alt="check icone"
                                        className="h-10 w-10"
                                    />
                                </div>
                                <p className="relative -right-12 leading-tight">Main d'oeuvre à disposition pour enlever vos déchets ou gravats.</p>
                            </li>
                            <li className="flex items-center py-2">
                                <div className="absolute">
                                    <img
                                        src="img/checked.svg"
                                        alt="check icone"
                                        className="h-10 w-10"
                                    />
                                </div>
                                <p className="relative -right-12 leading-tight">Inutile de trier les déchets, nous le faisons pour vous.</p>
                            </li>
                            <li className="flex items-center py-2">
                                <div className="absolute">
                                    <img
                                        src="img/checked.svg"
                                        alt="check icone"
                                        className="h-10 w-10"
                                    />
                                </div>
                                <p className="relative -right-12 leading-tight">Le chargement express (45min) qui vous libère les formalités administratives.</p>
                            </li>
                        </ul>
                    </div>
                    <a
                        href="/contact"
                        className="mt-10 mx-auto w-20 flex items-center justify-center px-8 py-3 border-transparent font-medium rounded-md text-white text-xl md:text-2xl bg-primaryColor w-52 md:w-56 md:py-4 md:px-10"
                    >
                        Devis gratuit
                    </a>
                </div>

                <div
                    className="h-96 z-0 w-full relative overflow-hidden order-1 lg:static md:w-1/2 md:h-full lg:order-2"
                >
                    <Image
                        src="/img/jumb.png"
                        alt="location benne à gravats"
                        layout="responsive"
                        /*className="absolute z-50 w-full h-full object-cover object-center lg:w-1/2"*/
                        width={700}
                        height={880}
                        objectFit="cover"
                        quality={100}
                    />
                </div>
            </div>

        </div>
    );
};

export default CallToAction;
