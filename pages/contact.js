import React from 'react';
import Layout from "../components/layout";

const Contact = () => {
    return (
        <Layout>
            <section id="contact" className="bg-gray-50 pb-40 pt-28">

                <h2 className="text-center font-medium pt-12 md:pt-0 pb-6 text-3xl md:text-4xl">
                    Demande de location de benne ou appelez-nous directement par téléphone
                </h2>
                <hr className="bloc mx-auto bg-gray-600 h-1 mb-10 w-44"/>


                    <form
                        className="grid grid-cols-1 gap-y-3 md:gap-y-6 relative bg-white max-w-3xl mx-auto px-4 sm:px-6 lg:py-10 lg:px-8 xl:pl-12">

                        <div className="mt-0 text-center">Devis gratuit et sans engagement</div>

                        <div>
                            <label htmlFor="nom" className="text-gray-500 mb-2 block font-bold">Nom complet</label>
                            <input
                                type="text"
                                id="nom"
                                className="block w-full ring-1 ring-gray-200 shadow-sm py-3 px-4 placeholder-gray-500 border-gray-300 rounded-md bg-blue-100"
                                placeholder="Votre nom et prénom"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="text-gray-500 mb-2 block font-bold">Votre adresse email</label>
                            <input
                                type="text"
                                id="email"
                                className="block w-full ring-1 ring-gray-200 shadow-sm py-3 px-4 placeholder-gray-500 border-gray-300 rounded-md bg-blue-100"
                                placeholder="Votre email ..."
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="text-gray-500 mb-2 block font-bold">Votre numéro de téléphone</label>
                            <input
                                type="text"
                                id="phone"
                                className="block w-full ring-1 ring-gray-200 shadow-sm py-3 px-4 placeholder-gray-500 border-gray-300 rounded-md bg-blue-100"
                                placeholder="Votre numéro portable ou fixe ..."
                            />
                        </div>


                        <div>
                            <label htmlFor="Localité" className="text-gray-500 mb-2 block font-bold">Ville ou code postal de la prestation</label>
                            <input
                                type="text"
                                id="entreprise"
                                className="block w-full ring-1 ring-gray-200 shadow-sm py-3 px-4 placeholder-gray-500 border-gray-300 rounded-md bg-blue-100"
                                placeholder="Votre localisation"
                            />
                        </div>


                        <div>
                            <label htmlFor="message" className="text-gray-500 mb-2 block font-bold">Votre message</label>
                            <textarea
    id="message"
    className="block w-full ring-1 ring-gray-200 shadow-sm py-3 px-4 placeholder-gray-500 border-gray-300 rounded-md bg-blue-100"
    placeholder="CommentLouerUneBenne puisse-je vous aider ?"
    />
                        </div>


                        <div>
                            <button
                                className="inline-flex justify-center items-center w-full py-3 px-6 border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-700">
                                Envoyer
                            </button>
                        </div>

                    </form>

            </section>
        </Layout>
    );
};

export default Contact;
