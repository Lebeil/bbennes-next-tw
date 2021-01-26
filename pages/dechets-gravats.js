import React from 'react';
import Layout from "../components/layout";

const Waste = () => {
    return (
        <Layout>
            <div className="md:mt-5 py-12 md:py-24 bg-white">
                <div className="max-w-7xl mt-28 md:mt-0 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-primaryColor font-semibold tracking-wide uppercase">Recyclage</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Déchets autorisés et interdits
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            Tous les types de déchets sont autorisés dans les gammes de bennes appropriées sauf les matières corrosives toxiques inflammables explosives radioactives voir la liste ci-dessous.
                        </p>
                    </div>

                    <div className="mt-12 w-full md:grid md:grid-cols-2 grid-flow-col md:gap-20">
                        <div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 text-white">
                                        <svg
                                            className="h-12 w-12"
                                            xmlns="http://www.w3.org/2000/svg"
                                            enableBackground="new 0 0 468.293 468.293"
                                            version="1.1"
                                            viewBox="0 0 468.293 468.293"
                                            xmlSpace="preserve"
                                        >
                                            <circle cx="234.146" cy="234.146" r="234.146" fill="#44C4A1"/>
                                            <path
                                                fill="#EBF0F3"
                                                d="M357.52 110.145L191.995 275.67 110.773 194.451 69.534 235.684 191.995 358.148 398.759 151.378z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <div>
                                        <dt className="text-lg leading-6 font-medium text-gray-900">
                                            Béton et construction
                                        </dt>
                                        <dd className="mt-2 text-base text-gray-500">
                                            Briques, gravats, béton, terre, ferraille, parpaings, briques d'argiles, toit en ardoise, tuiles en terre cuite...
                                        </dd>
                                    </div>
                                </div>
                            </div>
                            <div className="flex pt-8">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 text-white">
                                        <svg
                                            className="h-12 w-12"
                                            xmlns="http://www.w3.org/2000/svg"
                                            enableBackground="new 0 0 468.293 468.293"
                                            version="1.1"
                                            viewBox="0 0 468.293 468.293"
                                            xmlSpace="preserve"
                                        >
                                            <circle cx="234.146" cy="234.146" r="234.146" fill="#44C4A1"/>
                                            <path
                                                fill="#EBF0F3"
                                                d="M357.52 110.145L191.995 275.67 110.773 194.451 69.534 235.684 191.995 358.148 398.759 151.378z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <div>
                                        <dt className="text-lg leading-6 font-medium text-gray-900">
                                            Déchets Industriels banals (DIB)
                                        </dt>
                                        <dd className="mt-2 text-base text-gray-500">
                                            Des emballages usagés :
                                            Palettes, caisses, housse, bidon …
                                            Des déchets de production :
                                            Chutes, rebuts, purges, découpes, résidus, sciures…
                                            Des produits usagés :
                                            Papiers, invendus, consommables usagés, équipements hors service…
                                            Des matériaux :
                                            Verre, métaux, plastique, textile, cuir, papier, carton, bois, matière organique d’origine végétale ou animale…
                                        </dd>
                                    </div>
                                </div>
                            </div>
                            <div className="flex pt-8">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 text-white">
                                        <svg
                                            className="h-12 w-12"
                                            xmlns="http://www.w3.org/2000/svg"
                                            enableBackground="new 0 0 468.293 468.293"
                                            version="1.1"
                                            viewBox="0 0 468.293 468.293"
                                            xmlSpace="preserve"
                                        >
                                            <circle cx="234.146" cy="234.146" r="234.146" fill="#44C4A1"/>
                                            <path
                                                fill="#EBF0F3"
                                                d="M357.52 110.145L191.995 275.67 110.773 194.451 69.534 235.684 191.995 358.148 398.759 151.378z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <div>
                                        <dt className="text-lg leading-6 font-medium text-gray-900">
                                            Céramiques et faïences
                                        </dt>
                                        <dd className="mt-2 text-base text-gray-500">
                                            Porcelaine
                                            Argile
                                            Lavabo, WC, baignoire en faïence
                                            Carrelage
                                            Vaisselle
                                            Pot de fleur
                                        </dd>
                                    </div>
                                </div>
                            </div>
                            <div className="flex pt-8">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 text-white">
                                        <svg
                                            className="h-12 w-12"
                                            xmlns="http://www.w3.org/2000/svg"
                                            enableBackground="new 0 0 468.293 468.293"
                                            version="1.1"
                                            viewBox="0 0 468.293 468.293"
                                            xmlSpace="preserve"
                                        >
                                            <circle cx="234.146" cy="234.146" r="234.146" fill="#44C4A1"/>
                                            <path
                                                fill="#EBF0F3"
                                                d="M357.52 110.145L191.995 275.67 110.773 194.451 69.534 235.684 191.995 358.148 398.759 151.378z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <div>
                                        <dt className="text-lg leading-6 font-medium text-gray-900">
                                            Matériel de construction
                                        </dt>
                                        <dd className="mt-2 text-base text-gray-500">
                                            Fenêtre et porte en aluminium, PVC, métal
                                            Fenêtre et porte en bois vernis (peinture au plomb interdite)
                                            Verre de fenêtres ou portes
                                            Radiateur purgé
                                            Tout conduit de cheminée sauf inox
                                            Tuyauterie en PVC, métal, cuivre
                                            Poteaux électriques en béton armé
                                            Grillage souple en plastique
                                            Luminaires
                                            Sciure de bois verni ou traité
                                        </dd>
                                    </div>
                                </div>
                            </div>
                            <div className="flex pt-8">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 text-white">
                                        <svg
                                            className="h-12 w-12"
                                            xmlns="http://www.w3.org/2000/svg"
                                            enableBackground="new 0 0 468.293 468.293"
                                            version="1.1"
                                            viewBox="0 0 468.293 468.293"
                                            xmlSpace="preserve"
                                        >
                                            <circle cx="234.146" cy="234.146" r="234.146" fill="#44C4A1"/>
                                            <path
                                                fill="#EBF0F3"
                                                d="M357.52 110.145L191.995 275.67 110.773 194.451 69.534 235.684 191.995 358.148 398.759 151.378z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <div>
                                        <dt className="text-lg leading-6 font-medium text-gray-900">
                                            Déchets d’Equipements Electriques et Electroniques (D3E)
                                        </dt>
                                        <dd className="mt-2 text-base text-gray-500">
                                            Réfrigérateurs,
                                            Machines à laver,
                                            Cuisinières,
                                            Fours,
                                            Bouilloires, cafetières, grille-pain
                                            Micro-ondes,
                                            Aspirateurs,
                                            Robots de cuisine,
                                            Télévisions,
                                            Ordinateurs,
                                            Téléphones,
                                            Gros appareils ménagers, Équipements informatiques et de télécommunications, Matériel grand public, Matériel d’éclairage, Outils électriques et électroniques, Jouets, équipements de loisir et de sport, Dispositifs médicaux (à l’exception de tous les produits implantés et infectés), Instruments de surveillance et de contrôle, Distributeurs automatiques
                                        </dd>
                                    </div>
                                </div>
                            </div>
                            <div className="flex pt-8">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 text-white">
                                        <svg
                                            className="h-12 w-12"
                                            xmlns="http://www.w3.org/2000/svg"
                                            enableBackground="new 0 0 468.293 468.293"
                                            version="1.1"
                                            viewBox="0 0 468.293 468.293"
                                            xmlSpace="preserve"
                                        >
                                            <circle cx="234.146" cy="234.146" r="234.146" fill="#44C4A1"/>
                                            <path
                                                fill="#EBF0F3"
                                                d="M357.52 110.145L191.995 275.67 110.773 194.451 69.534 235.684 191.995 358.148 398.759 151.378z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <div>
                                        <dt className="text-lg leading-6 font-medium text-gray-900">
                                            Les objets encombrants
                                        </dt>
                                        <dd className="mt-2 text-base text-gray-500">
                                            Meubles, commodes, canapés,
                                            Lits, matelas,
                                            Chaises, tables de réception, affichages publicitaires, abris de jardins ...
                                        </dd>
                                    </div>
                                </div>
                            </div>
                            <div className="flex pt-8">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 text-white">
                                        <svg
                                            className="h-12 w-12"
                                            xmlns="http://www.w3.org/2000/svg"
                                            enableBackground="new 0 0 468.293 468.293"
                                            version="1.1"
                                            viewBox="0 0 468.293 468.293"
                                            xmlSpace="preserve"
                                        >
                                            <circle cx="234.146" cy="234.146" r="234.146" fill="#44C4A1"/>
                                            <path
                                                fill="#EBF0F3"
                                                d="M357.52 110.145L191.995 275.67 110.773 194.451 69.534 235.684 191.995 358.148 398.759 151.378z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <div>
                                        <dt className="text-lg leading-6 font-medium text-gray-900">
                                            Les déchets verts
                                        </dt>
                                        <dd className="mt-2 text-base text-gray-500">
                                            Issues des espaces verts : Troncs d’arbre, Herbes et feuilles
                                            Branchage,
                                            Bois de jardinage ...
                                        </dd>
                                    </div>
                                </div>
                            </div>
                            <div className="flex pt-8">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 text-white">
                                        <svg
                                            className="h-12 w-12"
                                            xmlns="http://www.w3.org/2000/svg"
                                            enableBackground="new 0 0 468.293 468.293"
                                            version="1.1"
                                            viewBox="0 0 468.293 468.293"
                                            xmlSpace="preserve"
                                        >
                                            <circle cx="234.146" cy="234.146" r="234.146" fill="#44C4A1"/>
                                            <path
                                                fill="#EBF0F3"
                                                d="M357.52 110.145L191.995 275.67 110.773 194.451 69.534 235.684 191.995 358.148 398.759 151.378z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <div>
                                        <dt className="text-lg leading-6 font-medium text-gray-900">
                                            Les déchets recyclables
                                        </dt>
                                        <dd className="mt-2 text-base text-gray-500">
                                            journaux magazines, emballages carton, bouteilles plastiques, briques alimentaires, boîtes acier et aluminium
                                        </dd>
                                    </div>
                                </div>
                            </div>
                            <div className="flex pt-8">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 text-white">
                                        <svg
                                            className="h-12 w-12"
                                            xmlns="http://www.w3.org/2000/svg"
                                            enableBackground="new 0 0 468.293 468.293"
                                            version="1.1"
                                            viewBox="0 0 468.293 468.293"
                                            xmlSpace="preserve"
                                        >
                                            <circle cx="234.146" cy="234.146" r="234.146" fill="#44C4A1"/>
                                            <path
                                                fill="#EBF0F3"
                                                d="M357.52 110.145L191.995 275.67 110.773 194.451 69.534 235.684 191.995 358.148 398.759 151.378z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <div>
                                        <dt className="text-lg leading-6 font-medium text-gray-900">
                                            Les autres déchets
                                        </dt>
                                        <dd className="mt-2 text-base text-gray-500">
                                            Petits cailloux
                                            Gravillons, graviers
                                            Petites pierres non mélangées à de la terre
                                            Mélange bitumineux sans goudron
                                            Sable non issu de fonderie, Parquet flottant
                                            Moquette
                                            Faux plafond Placo / plâtre
                                            Briques plâtrières Laine de verre, de roche
                                            Polystyrène
                                            Matériaux à base de fibre de verre
                                            Plaque de polycarbonate Plastiques issus de l’automobile : tableaux de bord, habillage
                                            Plastiques issus des équipements électroniques Pots de peinture vides et lavés, seaux vides et lavés
                                            Enduit, crépis
                                            Mélange bitumineux sans goudron
                                            Bâche, toile et voile d’hivernage
                                            Sciure de bois verni ou traité ...
                                        </dd>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="mt-10 md:mt-0">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 text-white">
                                        <svg
                                            className="h-12 w-12"
                                            xmlns="http://www.w3.org/2000/svg"
                                            enableBackground="new 0 0 473.931 473.931"
                                            version="1.1"
                                            viewBox="0 0 473.931 473.931"
                                            xmlSpace="preserve"
                                        >
                                            <circle cx="236.966" cy="236.966" r="236.966" fill="#E84849"/>
                                            <path
    fill="#F4F5F5"
    d="M429.595 245.83c0 16.797-13.624 30.417-30.417 30.417H74.73c-16.797 0-30.421-13.62-30.421-30.417v-17.743c0-16.797 13.624-30.417 30.421-30.417h324.448c16.793 0 30.417 13.62 30.417 30.417v17.743z"
    />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <div>
                                        <dt className="text-lg leading-6 font-medium text-gray-900">
                                            Les déchets toxiques
                                        </dt>
                                        <dd className="mt-2 text-base text-gray-500">
                                            Amiantes et déchets amiantés,
                                            Déchets radioactifs,
                                            Déchets explosifs et incandescents,
                                            Pneus,
                                            Emballages souillés,
                                            Cadavres d’animaux,
                                            Engrais, produits phytosanitaires (résidus et contenants).
                                        </dd>
                                    </div>
                                </div>
                            </div>
                            <div className="flex pt-8">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 text-white">
                                        <svg
                                            className="h-12 w-12"
                                            xmlns="http://www.w3.org/2000/svg"
                                            enableBackground="new 0 0 473.931 473.931"
                                            version="1.1"
                                            viewBox="0 0 473.931 473.931"
                                            xmlSpace="preserve"
                                        >
                                            <circle cx="236.966" cy="236.966" r="236.966" fill="#E84849"/>
                                            <path
                                                fill="#F4F5F5"
                                                d="M429.595 245.83c0 16.797-13.624 30.417-30.417 30.417H74.73c-16.797 0-30.421-13.62-30.421-30.417v-17.743c0-16.797 13.624-30.417 30.421-30.417h324.448c16.793 0 30.417 13.62 30.417 30.417v17.743z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <div>
                                        <dt className="text-lg leading-6 font-medium text-gray-900">
                                            Les déchets explosifs et hydrocarbures
                                        </dt>
                                        <dd className="mt-2 text-base text-gray-500">
                                            Bouteilles de gaz,
                                            Batteries,
                                            Extincteurs,
                                            Fusées de détresse,
                                            Pots catalytiques.
                                        </dd>
                                    </div>
                                </div>
                            </div>
                            <div className="flex pt-8">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 text-white">
                                        <svg
                                            className="h-12 w-12"
                                            xmlns="http://www.w3.org/2000/svg"
                                            enableBackground="new 0 0 473.931 473.931"
                                            version="1.1"
                                            viewBox="0 0 473.931 473.931"
                                            xmlSpace="preserve"
                                        >
                                            <circle cx="236.966" cy="236.966" r="236.966" fill="#E84849"/>
                                            <path
                                                fill="#F4F5F5"
                                                d="M429.595 245.83c0 16.797-13.624 30.417-30.417 30.417H74.73c-16.797 0-30.421-13.62-30.421-30.417v-17.743c0-16.797 13.624-30.417 30.421-30.417h324.448c16.793 0 30.417 13.62 30.417 30.417v17.743z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <div>
                                        <dt className="text-lg leading-6 font-medium text-gray-900">
                                            Les solvants
                                        </dt>
                                        <dd className="mt-2 text-base text-gray-500">
                                            Peintures,
                                            Aérosols,
                                            Colles,
                                            Huiles,
                                            Vernis,


                                        </dd>
                                    </div>
                                </div>
                            </div>
                            <div className="flex pt-8">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 text-white">
                                        <svg
                                            className="h-12 w-12"
                                            xmlns="http://www.w3.org/2000/svg"
                                            enableBackground="new 0 0 473.931 473.931"
                                            version="1.1"
                                            viewBox="0 0 473.931 473.931"
                                            xmlSpace="preserve"
                                        >
                                            <circle cx="236.966" cy="236.966" r="236.966" fill="#E84849"/>
                                            <path
                                                fill="#F4F5F5"
                                                d="M429.595 245.83c0 16.797-13.624 30.417-30.417 30.417H74.73c-16.797 0-30.421-13.62-30.421-30.417v-17.743c0-16.797 13.624-30.417 30.421-30.417h324.448c16.793 0 30.417 13.62 30.417 30.417v17.743z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <div>
                                        <dt className="text-lg leading-6 font-medium text-gray-900">
                                            Résidus médicaux
                                        </dt>
                                        <dd className="mt-2 text-base text-gray-500">
                                            Médicaments,
                                            seringues,
                                            aiguilles,
                                            biodéchets...
                                        </dd>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*<div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 text-white">
                                        <svg
                                            className="h-12 w-12"
                                            xmlns="http://www.w3.org/2000/svg"
                                            enableBackground="new 0 0 468.293 468.293"
                                            version="1.1"
                                            viewBox="0 0 468.293 468.293"
                                            xmlSpace="preserve"
                                        >
                                            <circle cx="234.146" cy="234.146" r="234.146" fill="#44C4A1"/>
                                            <path
    fill="#EBF0F3"
    d="M357.52 110.145L191.995 275.67 110.773 194.451 69.534 235.684 191.995 358.148 398.759 151.378z"
    />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <div>
                                        <dt className="text-lg leading-6 font-medium text-gray-900">
                                            Liste des déchets autorisés
                                        </dt>
                                        <dd className="mt-2 text-base text-gray-500">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                        </dd>
                                    </div>
                                    <div className="pt-8">
                                        <dt className="text-lg leading-6 font-medium text-gray-900">
                                            Liste des déchets autorisés
                                        </dt>
                                        <dd className="mt-2 text-base text-gray-500">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                        </dd>
                                    </div>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <dt className="text-lg leading-6 font-medium text-gray-900">
                                        Liste des déchets interdits et toxiques
                                    </dt>
                                    <dd className="mt-2 text-base text-gray-500">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                    </dd>
                                </div>
                            </div>
                        </dl>
                    </div>*/}
                </div>
            </div>

        </Layout>
    );
};

export default Waste;
