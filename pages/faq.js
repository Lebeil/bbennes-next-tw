import React from 'react';
import Layout from "../components/layout";

const Faq = () => {

    return (
        <Layout>
            <div>
                <section className="text-gray-700">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="text-center mt-16 mb-5 md:mb-20">
                            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                                Foire aux questions
                            </h1>
                            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                                Comment pouvons-nous vous aider ?
                            </p>
                        </div>
                        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                            <div className="w-full lg:w-1/2 px-4 py-2">
                                <details className="mb-4">
                                    <summary className="font-semibold  bg-blue-200 rounded-md py-2 px-4 text-red-700">
                                        QUESTIONS RELATIVES AU COVID-19
                                    </summary>

                                    <span>
                  Nos activités sont maintenues sur toute l'Ile-de-France. Désormais, tous les paiements se feront uniquement par virement ou par prélèvement.
                </span>
                                </details>
                                <details className="mb-4">
                                    <summary className="font-semibold bg-blue-200 rounded-md py-2 px-4">
                                        Comment choisir une benne?
                                    </summary>

                                    <span>
                  Tout dépend le type de déchets (bois, encombrants etc ...), le volume approximatif, le poids et l'accès. Ensuite, vous pouvez nous appelez au 0950922030 ou nous envoyer un mail, nous serions ravis de vous répondre dans les plus brefs délais.
                </span>
                                </details>
                                <details className="mb-4">
                                    <summary className="font-semibold  bg-blue-200 rounded-md py-2 px-4">
                                        Faut-il avoir une autorisation de la mairie pour le stationnement d’une benne sur la voie publique ?
                                    </summary>

                                    <span>
                  Si vous comptez déposer une benne sur la voie publique, vous devez avoir une autorisation de voirie auprès du service technique de votre mairie ou au poste de gendarmerie pour les habitants de Paris. Vous pouvez télécharger un exemplaire en cliquant sur ce <a
                                        href="https://www.service-public.fr/professionnels-entreprises/vosdroits/R17000" className="font-bold text-primaryColor underline">lien</a>. Nous pouvons également effectuer cette demande pour vous (prestation payante).
                </span>
                                </details>
                                <details className="mb-4">
                                    <summary className="font-semibold  bg-blue-200 rounded-md py-2 px-4">
                                        Quels sont les coûts de livraison et les frais cachés?
                                    </summary>

                                    <span>
                                    La livraison est gratuite et il n'y pas de frais cachés sauf pour les déplacements inutiles qui peuvent être facturable et les prestations comme faire une demande d'autorisation pour vous.
                </span>
                                </details>
                            </div>
                            <div className="w-full lg:w-1/2 px-4 py-2">
                                <details className="mb-4">
                                    <summary className="font-semibold  bg-blue-200 rounded-md py-2 px-4">
                                        Comment dois-je remplir ma benne?
                                    </summary>

                                    <span className="px-4 py-2">
                  Pour le remplissage de votre benne, il est conseillé de ne pas remplir qu'avec le type de déchets lié à la prestation commandée. Seuls les déchets déposés sur la benne seront pris en charge lors de l'enlèvement. Il est possible de demander de l'aide pour charger auprès de nos ouvriers, il suffit d'en faire la demande avant. Si vous avez d'autres questions, vous pouvez nous appeler directement par téléphone ou par mail.
                </span>
                                </details>
                                <details className="mb-4">
                                    <summary className="font-semibold  bg-blue-200 rounded-md py-2 px-4">
                                        Quelles sont les conditions d’accès de la zone de dépôt de la benne?
                                    </summary>

                                    <span className="px-4 py-2">
                  Pour éviter toutes mauvaises surprises, nous vous demandons de bien vouloir réserver l'emplacement d'une taille de deux places de parking voiture pour la durée de la location benne (7 jours) afin de pouvoir manoeuvrer et déposer la benne. En revanche, Pour les bennes de 30m3, il est nécessaire de prévoir au minimum trois places de parking voiture.
                                        La zone doit être accessible et sécurisée. Pas d'équipement de surface ou sous terre et il est fortement recommandé que vous soyez présent lors de cette étape. Les bennes sur la voie publique doit faire l'objet d'une autorisation auprès de la mairie.
                </span>
                                </details>
                                <details className="mb-4">
                                    <summary className="font-semibold  bg-blue-200 rounded-md py-2 px-4">
                                        Combien de temps peut-on garder une benne?
                                    </summary>

                                    <span className="px-4 py-2">
                  Une benne peut rester jusqu'à 7 jours.
                </span>
                                </details>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mb-10 md:mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                            Vous avez d'autres questions ou vous n'avez pas trouvé de réponse à votre question ?
                        </h1>
                        <a
                            href="/contact"
                            className="mx-20 md:mx-auto flex items-center justify-center py-3 border-transparent font-medium rounded-md text-white text-xl md:text-2xl bg-primaryColor md:w-60 md:py-4"
                        >
                            Nous contacter
                        </a>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Faq;
