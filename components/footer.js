import React from 'react';
import Logo from '../components/svg/logo'

const Footer = () => {
    return (
        <>
            <footer className="bg-blue-100 py-5 px-1 lg:px-20">

                <h3 className="text-3xl w-full pb-5 flex justify-center text-white">
                    <Logo/>
                </h3>

                <div className="mb-5 flex space-x-6 justify-between text-white">

                    <dl className="space-y-10 p-0 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10">
                        <div className="flex">
                            <div className="ml-4">
                                <dt className="text-2xl leading-6 font-medium text-gray-900">
                                    <span className="uppercase">Contactez-nous</span>
                                </dt>
                                <dd className="mt-3 text-xl text-black font-normal antialiased">
                                    B-bennes est l'un des leaders de loueurs de bennes en Ile-de-France
                                    pour les particuliers et les entreprises.
                                    <div className="py-4 font-extrabold text-primaryColor">
                                        <a href="mailto:location.b.bennes@gmail.com"> contact@b-bennes.fr</a>
                                    </div>
                                    <div className="pt-2 flex flex-col leading-none">
                                        <a href="tel:0950922030"> 09.50.92.20.30</a>
                                        <small>Sans interruption de 7h à 18h</small>
                                    </div>


                                </dd>
                            </div>
                        </div>

                        <div className="flex">

                            <div className="ml-4 lg:ml-16">
                                <dt className="text-lg leading-6 font-medium text-gray-900">
                                    <span className="uppercase">nous découvrir</span>
                                </dt>
                                <dd className="mt-2 text-base text-gray-500 flex flex-wrap">
                                    <ul>
                                        <li className="text-lg py-1"><a href="/debarras">Qui sommes nous?</a></li>
                                        <li className="text-lg py-1"><a href="/#how">Comment ça marche ?</a></li>
                                        <li className="text-lg py-1"><a href="/faq">FAQ</a></li>
                                        <li className="text-lg py-1"><a href="/blog">Notre blog</a></li>
                                        <li className="text-lg py-1"><a href="/dechets-gravats">Déchets autorisés et refusés</a></li>
                                    </ul>
                                </dd>
                            </div>
                        </div>

                        <div className="flex">

                            <div className="ml-4">
                                <dt className="text-lg leading-6 font-medium text-gray-900">
                                    <span className="uppercase">informations légales</span>
                                </dt>
                                <dd className="mt-2 text-base text-gray-500">
                                    <ul>
                                        <li className="text-lg py-1"><a href="/mentions-legales">Mentions légales</a></li>
                                        <li className="text-lg py-1"><a href="/mentions-legales#cookies">Données et cookies</a></li>
                                    </ul>
                                </dd>
                            </div>
                        </div>

                        <div className="flex">

                            <div className="ml-4">
                                <dt className="text-lg leading-6 font-medium text-gray-900">
                                    <span className="uppercase">Suivez-nous</span>
                                </dt>
                                <dd className="mt-2 text-base text-gray-500">
                                    <button><a href="/contact">Contactez-nous</a></button>
                                </dd>
                            </div>
                        </div>
                    </dl>



                </div>

                <hr className="w-36 mx-auto mb-5"/>

                    <p className="text-center mt-8 text-base text-gray-400 md:mt-0">
                        &copy; 2020 B BENNES, TOUS DROITS RÉSERVÉS - <a
                        href="www.lidmi.com">Réalisation Lidmi SAS</a>
                    </p>

            </footer>
        </>
    );
};

export default Footer;
