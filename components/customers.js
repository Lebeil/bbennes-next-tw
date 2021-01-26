import React from 'react';

const Customers = () => {
    return (
        <div className="bg-primaryColor ">
            <section id="tarifs" className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl font-extrabold text-white text-center">
                    Les réactions de nos clients
                </h1>
                <hr className="mt-5 mx-auto w-1/4"/>

                <div
                    className="flex flex-wrap justify-center items-center space-x-0 sm:space-x-6"
                >
                    <div
                        className="accueil-bg-magic min-h-400 w-80 border border-gray-200 rounded-lg mt-5"
                    >
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-gray-900">Parfait !</h2>
                            <p className="mt-2 text-medium text-gray-800">
                                Service efficace, rapide et ponctuel rien à dire !
                            </p>
                            <p>⭐⭐⭐⭐⭐</p> <br/>
                            <p>Jean-Luc C</p>
                        </div>

                    </div>

                    <div className="accueil-bg-magic min-h-400 w-80 border border-gray-200 rounded-lg mt-5">
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-gray-900">Satisfaite et rassurée</h2>
                            <p className="mt-2 text-medium text-gray-800">
                                Rapide par téléphone merci! Je recommande :)
                            </p>
                            <p>⭐⭐⭐⭐⭐</p><br/>
                            <p>Clémence B</p>
                        </div>


                    </div>

                    <div
                        className="accueil-bg-magic min-h-400 w-80 border border-gray-200 rounded-lg mt-5"
                    >
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-gray-900">Prestation assurée</h2>
                            <p className="mt-2 text-medium text-gray-800">Difficile de se retrouver avec le nombre de loueur de benne! Avec B-bennes, ils ont assurés !</p>
                            <p>⭐⭐⭐⭐⭐</p><br/>
                            <p>Ahmed B</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Customers;
