import React from 'react';
import Layout from "../components/layout";
import Phone from "../components/svg/phone";
import Link from "next/link";

const Debarras = () => {
    return (
        <Layout>
            <div id="contact" className="bg-gray-50 pb-28 md:mt-32">

                <h2 className="text-center font-medium pt-44 md:pt-8 pb-6 text-3xl md:text-4xl">
                    Main d'oeuvre - service débarras
                </h2>
                <hr className="bloc mx-auto bg-gray-600 h-1 mb-10 w-44"/>


                <div
                    className="grid grid-cols-1 gap-y-6 relative bg-white text-2xl max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:py-10 lg:px-8 xl:pl-12">
                        <span className="m-auto">
                            <svg
                                className="w-20 h-20"
                                xmlns="http://www.w3.org/2000/svg"
                                enableBackground="new 0 0 508 508"
                                version="1.1"
                                viewBox="0 0 508 508"
                                xmlSpace="preserve"
                            >
      <circle cx="254" cy="254" r="254" fill="#FFD05B"/>
      <path
          fill="#FFF"
          d="M304.4 272.4c-10.8 56.8-45.2 60.4-50.4 60.4-5.2 0-39.6-3.6-50.4-60.8l4-14c12.8 16.4 28.8 28 46.4 28s33.6-11.6 46.4-28l4 14.4z"
      />
      <path
          fill="#E6E9EE"
          d="M302 264c-12.8 17.6-29.6 30-48 30s-35.2-12.4-48-30l1.6-5.6c12.8 16.4 28.8 28 46.4 28s33.6-11.6 46.4-28l1.6 5.6z"
      />
      <path
          fill="#324A5E"
          d="M402.8 336c-93.6-32-98.4-64-98.4-64-10.8 57.2-45.2 60.8-50.4 60.8-5.2 0-39.6-3.6-50.4-60.8 0 0-1.2 30-98.4 64 0 0-24.4 22.8-35.2 93.2 46.4 48.4 111.6 78.8 183.6 78.8 72.4 0 137.6-30.4 183.6-78.8-10-70.4-34.4-93.2-34.4-93.2z"
      />
      <path
          fill="#FF7058"
          d="M355.2 316.4c-8.4-4.4-15.6-8.4-21.6-12l-8.4 118.8H182.8l-8.4-118.8c-6 4-12.8 8-21.6 12 6.8 50.4-12.4 164.8-12.4 164.8 34 17.2 72.8 26.8 113.6 26.8s79.2-9.6 113.6-26.8c0 0-19.2-114.4-12.4-164.8z"
      />
      <path
          fill="#FFF"
          d="M320.4 193.2c2.8 12.8-2.8 34-3.2 36-12.8 30.4-36.4 56.8-63.2 56.8s-50.4-26.4-63.2-56.8c-.4-1.6-6-23.2-3.2-36.4h132.8v.4z"
      />
      <g fill="#324A5E">
        <path
            d="M317.2 229.6s6.4-22.8 3.2-36.4h12.4s-3.2 24-15.6 36.4zM190.8 229.6c-12.4-12.4-15.6-36.4-15.6-36.4h12.4c-3.2 13.6 3.2 36.4 3.2 36.4z"/>
      </g>
      <g fill="#F1543F">
        <path
            d="M206.4 70.4l15.2 96h-53.2c-2-7.2-2.8-14.4-2.8-22.4 0-30.8 16.4-58 40.8-73.6zM342.4 144.4c0 7.6-1.2 15.2-3.2 22.4h-52.8l15.2-96c24.4 15.2 40.8 42.4 40.8 73.6z"/>
      </g>
      <path
          fill="#FF7058"
          d="M340 166.4h-53.6l15.2-96c1.6-10-6-19.2-16.4-19.2h-62.4c-10 0-18 9.2-16.4 19.2l15.2 96H168c-7.2 0-13.2 6-13.2 13.2s6 13.2 13.2 13.2h172c7.2 0 13.2-6 13.2-13.2s-6-13.2-13.2-13.2z"
      />
    </svg>
                        </span>

                    <div>
                        <h2 className="text-gray-500 py-2 block text-justify">
                            L'entreprise <strong>B bennes</strong> est composé de professionnels compétents et qualifiés
                            qui se conforment à tout type de chantier pour vous trouver la meilleure solution
                            d’évacuation de vos déchets pour les particuliers et les professionnels. Nous sommes également à votre disposition pour toutes les démarches administratives
                            (demande en mairie, au commissariat de police etc ...) et vous donner des conseils.
                        </h2>
                        <p className="text-gray-500 py-2 block text-justify">
                            Nos ouvriers peuvent vous aider à
                            débarasser pour vous vos encombrants, tels que de mobilier, d’archives papier (avec bon de
                            destruction pour papiers confidentiels, de déchets et gravats, de charbon, de matériel
                            informatique, de matériel bureautique (photocopieuse…), déchets et gravats (sur chantiers de
                            bureaux,…). Un tel service permet aussi d'éviter de vous déplacer en déchetterie.
                        </p>
                        <p className="text-gray-500 py-2 block text-justify">
                            C'est aussi des professionnels du debarras
                            pour évacuer les objets gênants dans votre cave, grenier, commerce, bureau, appartement ou
                            pavillon, salle d'archive d'entreprise...
                            Un service gratuit mais seulement sur demande soit par mail soit par téléphone.
                        </p>

                        <div className="mt-5 mb-2">
                            <span className="bg-secondaryColor p-2 text-white">Option "Chargement express"</span>
                        </div>

                        <p className="text-gray-500 mb-5 block text-justify">
                            Pour éviter les demandes d’autorisations à votre mairie, vous pouvez opter pour le "<strong>chargement express</strong>" et nous pouvons immobiliser votre benne devant votre chantier pendant 45 min maximun.
                        </p>

                        <small className="underline">Mise en décharge et fourniture d’une attestation de décharge
                            si demandée.</small>
                        <p className="uppercase py-5">
                            <span className="bg-primaryColor text-white p-2">Nos devis sont gratuits et sans engagement</span>
                        </p>

                        <p>Sans plus tarder, prenez vite rendez-vous par téléphone pour un devis rapide, un spécialiste
                            sera à votre écoute pour vous aider à répondre à vos besoins d'évacuation de gravats et
                            déchets. </p>

                        <div className="flex justify-center pt-10">
                            <Link href="tel: 0950922030" passHref>
                                <a className="flex border-2 border-primaryColor rounded-2xl px-6 md:px-4 py-2">
                                    <Phone/>
                                    <div className="relative -top-2 -right-2 text-2xl font-bold text-blue-600 sm:px-3">
                                        09 50 92 20 30
                                        <small className="absolute top-5 right-3">(appel gratuit)</small>
                                    </div>
                                </a>
                            </Link>

                        </div>

                    </div>


                </div>

            </div>

        </Layout>
    );
};

export default Debarras;
