import React from 'react';

const Bennes = () => {
    return (
        <div className="bg-fondColor ">
            <section id="tarifs" className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl font-extrabold text-gray-900 text-center">
                    Comment choisir sa benne ?
                </h1>
                <hr className="mt-5 mx-auto w-1/4"/>
                <p className="text-center mt-5 text-xl text-gray-800">
                    Les bennes sont aux normes françaises et européennes de sécurité. 🏅
                </p>

                <div
                    className="mt-8 flex flex-wrap justify-center items-center space-x-0 sm:space-x-6"
                >
                    <div
                        className="accueil-bg-magic min-h-500 w-80 border border-gray-200 rounded-lg mt-5"
                    >
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-gray-900">Bennes à chaine</h2>
                            <p className="mt-2 text-medium text-gray-800">
                                De 8 à 20m3 (idéal dans les endroits étroits et pas de limite de poids).
                            </p>
                            <p className="mt-6">
                                <span className="font-medium text-black-800"> à partir de </span> &nbsp;
                                <span className="text-4xl font-extrabold text-gray-900"> 320€ </span>
                                <span className="font-medium text-black-800"> TTC </span>
                            </p>

                            <a
                                href="#"
                                className="mt-8 block w-full bg-primaryColor border border-secondaryColor rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-secondaryColor"
                            >
                                Découvrir
                            </a>
                        </div>

                        <div className="pt-2 pb-8 px-6">
                            <h3
                                className="text-xs font-medium text-gray-900 tracking-wide uppercase"
                            >
                                Les déchets autorisés :
                            </h3>
                            <ul className="mt-6 space-y-4">
                                <li className="flex space-x-3">
                                    <img
                                        src="img/checked.svg"
                                        alt="check icone"
                                        className="flex-shrink-0 h-5 w-5"
                                    />
                                    <span className="text-sm text-gray-800">
                  Gravats de chantier (démolition, rénovation et construction).
                </span>
                                </li>
                                <li className="flex space-x-3">
                                    <img
                                        src="img/checked.svg"
                                        alt="check icone"
                                        className="flex-shrink-0 h-5 w-5"
                                    />
                                    <span className="text-sm text-gray-800">
                  Terre, boue, bitume, graviers, sable etc ...
                </span>
                                </li>
                                <li className="flex space-x-3">
                                    <img
                                        src="img/checked.svg"
                                        alt="check icone"
                                        className="flex-shrink-0 h-5 w-5"
                                    />
                                    <span className="text-sm text-gray-800">
                  Pierre, rochers etc...
                </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div
                        className="accueil-bg-magic min-h-500 w-80 border border-gray-200 rounded-lg mt-5"
                    >
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-gray-900">Bennes à bras</h2>
                            <p className="mt-2 text-medium text-gray-800">
                                Taille de 12 à 40m3 (limitée à environ 12T).
                            </p>
                            <p className="mt-6">
                                <span className="font-medium text-black-800">à partir de </span>&nbsp;
                                <span className="text-4xl font-extrabold text-gray-900">400€</span>
                                <span className="font-medium text-black-800"> TTC </span>

                            </p>

                            <a
                                href="#"
                                className="mt-8 block w-full bg-primaryColor border border-secondaryColor rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-secondaryColor"
                            >
                                Découvrir
                            </a>
                        </div>

                        <div className="pt-2 pb-8 px-6">
                            <h3
                                className="text-xs font-medium text-gray-900 tracking-wide uppercase"
                            >
                                Les déchets autorisés :
                            </h3>
                            <ul className="mt-6 space-y-4">
                                <li className="flex space-x-3">
                                    <img
                                        src="img/checked.svg"
                                        alt="check icone"
                                        className="flex-shrink-0 h-5 w-5"
                                    />
                                    <span className="text-sm text-gray-800">
                  Pour les objets encombrants.
                </span>
                                </li>
                                <li className="flex space-x-3">
                                    <img
                                        src="img/checked.svg"
                                        alt="check icone"
                                        className="flex-shrink-0 h-5 w-5"
                                    />
                                    <span className="text-sm text-gray-800">
                  Pour les bois, cartons, déchets verts, DEEE et DIB.
                </span>
                                </li>
                                <li className="flex space-x-3">
                                    <div className="flex items-center h-5 w-5">
                                        ❌
                                    </div>
                                    <span className="text-sm text-gray-800">
                  Pour la terre, pierre, gravats ...
                </span>
                                </li>
                                <li className="flex space-x-3">
                                    <div className="flex items-center h-5 w-5">
                                        ❌
                                    </div>
                                    <span className="text-sm text-gray-800">
                  Pour les objets lourds ...
                </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div
                        className="accueil-bg-magic min-h-500 w-80 border border-gray-200 rounded-lg mt-5"
                    >
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-gray-900">Bennes Ampliroll</h2>
                            <p className="mt-2 text-medium text-gray-800">Allant de 12 à 40m3 (benne amovible permettant le tri sélectif).</p>
                            <p className="mt-6">
                                <span className="font-medium text-black-800">à partir de </span>&nbsp;
                                <span className="text-4xl font-extrabold text-gray-900">400€</span>
                                <span className="font-medium text-black-800"> TTC </span>
                            </p>

                            <a
                                href="#"
                                className="mt-8 block w-full bg-primaryColor border border-secondaryColor rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-secondaryColor"
                            >
                                Découvrir
                            </a>
                        </div>

                        <div className="pt-2 pb-8 px-6">
                            <h3
                                className="text-xs font-medium text-gray-900 tracking-wide uppercase"
                            >
                                Les déchets autorisés :
                            </h3>
                            <ul className="mt-6 space-y-4">
                                <li className="flex space-x-3">
                                    <img
                                        src="img/checked.svg"
                                        alt="check icone"
                                        className="flex-shrink-0 h-5 w-5"
                                    />
                                    <span className="text-sm text-gray-800 leading-none">
                  Les objets encombrants, déchets verts, DEEE, métaux et DIB.
                </span>
                                </li>
                                <li className="flex space-x-3">
                                    <img
                                        src="img/checked.svg"
                                        alt="check icone"
                                        className="flex-shrink-0 h-5 w-5"
                                    />
                                    <span className="text-sm text-gray-800 leading-none">
                  Pour les déchets adéquats au <strong>recyclage</strong> ♻.
                </span>
                                </li>
                                <li className="flex space-x-3">
                                    <div className="flex items-center h-5 w-5">
                                        ❌
                                    </div>
                                    <span className="text-sm text-gray-800">
                  Pour la terre, pierre, gravats ...
                </span>
                                </li>
                                <li className="flex space-x-3">
                                    <div className="flex items-center h-5 w-5">
                                        ❌
                                    </div>
                                    <span className="text-sm text-gray-800">
                  Pour les objets lourds ...
                </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Bennes;
