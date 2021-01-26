import Link from 'next/link'
import Logo from '../components/svg/logo'
import Phone from '../components/svg/phone'
import {useState} from 'react'


export default function Nav() {
    const [isOpen, setOpen] = useState(false)
    const [isOpenZone, setOpenZone] = useState(false)
    const toggle = () => setOpen(!isOpen);
    const toggleZ = () => setOpenZone(!isOpenZone);

    return (
        <>
            {/***** navbar desktop *****/}

            <nav className="hidden w-full h-24 z-50 mx-auto fixed top-0 md:flex justify-center bg-white">
                <Link href="/" passHref>
                    <a className="md:left-0 md:inline md:absolute">
                        <Logo/>
                    </a>

                </Link>
                <Link href="tel: 0950922030" passHref>
                    <a className="mr-2 pl-4 px-6 top-5 py-2 border-2 rounded-xl border-blue-500 font-medium text-blue-600 bg-white hover:bg-gray-50 md:block md:absolute md:right-0">
                        <div className="flex">
                            <Phone/>
                            <div className="relative -top-1 -right-4 text-lg text-blue-600 sm:px-3">
                                09 50 92 20 30
                                <small className="absolute top-4 right-3">(appel gratuit)</small>
                            </div>
                        </div>
                    </a>
                </Link>

                <ul className="hidden pt-8 md:flex md:space-x-10">
                    <li>
                        <Link href="/bennes" passHref>
                            <a className="font-medium text-lg text-blue-500 hover:text-gray-900 hover:border-b-4 hover:border-blue-700">Gamme de
                                bennes</a>
                        </Link>

                    </li>
                    <li onMouseEnter={() => toggleZ(!isOpenZone)} onMouseLeave={() => setOpenZone(false)}>
                        <Link href="#" passHref>
                            <a className="font-medium text-lg w-3 text-blue-500 hover:text-blue-300">Prestation de
                                service</a>
                        </Link>
                        {isOpenZone && (
                            <ul className="cursor-pointer border-t-2 border-blue-700 shadow-2xl bg-white round">
                                <li className="py-2 px-2 hover:bg-blue-400 hover:text-white">
                                    <Link href="/interventions-93-94-92-77-91-78-95-75" passHref>
                                        <a >Zone d'intervention</a>
                                    </Link>
                                </li>
                                <li className="py-2 px-2 hover:bg-blue-400 hover:text-white">
                                    <Link href="/dechets-gravats" passHref>
                                        <a>Déchets
                                            autorisés</a>
                                    </Link>
                                </li>
                                <li className="py-2 px-2 hover:bg-blue-400 hover:text-white">
                                    <Link href="/debarras" passHref>
                                        <a >Main
                                            d'oeuvre</a>
                                    </Link>
                                </li>
                                <li className="py-2 px-2 hover:bg-blue-400 hover:text-white">
                                    <Link href="/faq" passHref>
                                        <a>Questions/Réponses</a>
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <a href="/blog"
                           className="font-medium text-lg text-blue-500 hover:text-gray-900 hover:border-b-4 hover:border-blue-700">
                            Blog
                        </a>
                    </li>
                    <li>
                        <a href="/contact"
                           className="font-medium text-lg text-blue-500 hover:text-gray-900 hover:border-b-4 hover:border-blue-700">
                            Devis gratuit
                        </a>
                    </li>
                </ul>

            </nav>

            {/***** Navbar for mobile *****/}

            <nav className="w-full z-50 fixed shadow-md md:hidden bg-white">

                <div className="px-5 flex items-center justify-between">
                    <Link href="/" passHref>
                        <a  className="w-auto">
                            <Logo/>
                        </a>
                    </Link>


                    <div className="mr-2">
                        <button
                            className="bg-white w-16 h-16 flex items-center justify-center "
                            onClick={() => toggle(!isOpen)}
                        >
                            {isOpen ? (
                                <svg
                                    className="w-16 h-16"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        fill="#E3F7F9"
                                        d="M416 512H96c-53.023 0-96-42.977-96-96V96C0 42.977 42.977 0 96 0h320c53.023 0 96 42.977 96 96v320c0 53.023-42.977 96-96 96zm0 0"
                                    />
                                    <g fill="#0652DD">
                                        <path
                                            d="M342.734 312.574L199.426 169.266c-6.258-6.258-16.387-6.258-22.625 0l-7.535 7.535c-6.258 6.254-6.258 16.383 0 22.625l143.308 143.308c6.258 6.258 16.387 6.258 22.625 0l7.535-7.535c6.258-6.254 6.258-16.383 0-22.625zm0 0"/>
                                        <path
                                            d="M312.574 169.266L169.266 312.574c-6.258 6.258-6.258 16.387 0 22.625l7.535 7.535c6.254 6.258 16.383 6.258 22.625 0l143.308-143.308c6.258-6.258 6.258-16.387 0-22.625l-7.535-7.535c-6.254-6.258-16.383-6.258-22.625 0zm0 0"/>
                                    </g>
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-16 h-16"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        fill="#E3F7F9"
                                        d="M416 512H96c-53.023 0-96-42.977-96-96V96C0 42.977 42.977 0 96 0h320c53.023 0 96 42.977 96 96v320c0 53.023-42.977 96-96 96zm0 0"
                                    />
                                    <g fill="#0652DD">
                                        <path
                                            d="M341.328 170.672H170.672c-5.887 0-10.672 4.785-10.672 10.672v21.328c0 5.887 4.785 10.672 10.672 10.672h170.672c5.886 0 10.672-4.785 10.672-10.672v-21.328c-.016-5.887-4.801-10.672-10.688-10.672zm0 0M341.328 234.672H170.672c-5.887 0-10.672 4.785-10.672 10.672v21.328c0 5.887 4.785 10.672 10.672 10.672h170.672c5.886 0 10.672-4.785 10.672-10.672v-21.328c-.016-5.887-4.801-10.672-10.688-10.672zm0 0M341.328 298.672H170.672c-5.887 0-10.672 4.785-10.672 10.672v21.328c0 5.887 4.785 10.672 10.672 10.672h170.672c5.886 0 10.672-4.785 10.672-10.672v-21.328c-.016-5.887-4.801-10.672-10.688-10.672zm0 0"/>
                                    </g>
                                </svg>
                            )}

                        </button>
                    </div>

                </div>
                <div
                    className="h-12 flex items-center justify-center border-4 rounded-none border-blue-500 font-medium text-blue-600 bg-white">
                    <div className="flex">
                        <Phone/>
                        <Link href="tel: 0950922030" passHref>
                            <a className="relative -top-1 -right-4 text-lg text-blue-600 sm:px-3">
                                09 50 92 20 30
                                <small className="absolute top-4 right-0">(appel gratuit)</small>
                            </a>
                        </Link>

                    </div>
                </div>
                {isOpen && (
                    <ul className="w-full overflow-y-auto flex-grow h-auto bg-blue-light shadow-md ring-1 ring-black ring-opacity-5 p-1 md:hidden rounded-lg bg-white">
                        <li className="py-1 mt-5">
                            <Link href="/bennes" passHref>
                                <a className="block py-2 rounded-md text-xl font-bold text-blue-500 bg-white w-full text-center hover:text-primaryColor">
                                    Les gammes de bennes
                                </a>
                            </Link>
                        </li>
                        <li className="py-1" onClick={() => toggleZ(!isOpenZone)}
                            onDoubleClick={() => setOpenZone(false)}>
                            <button
                                className="block py-2 rounded-md text-xl font-bold text-blue-500 bg-white w-full">Prestation
                                de service
                            </button>
                            {isOpenZone && (
                                <ul className="relative cursor-pointer border-t-2 border-blue-700 bg-white rounded">
                                    <Link href="/interventions-93-94-92-77-91-78-95-75" passHref>
                                        <a className="text-primaryColor">
                                            <li className="py-2 px-2 ">
                                                Zone d'intervention
                                            </li>
                                        </a>
                                    </Link>

                                    <Link href="/dechets-gravats" passHref>
                                        <a className="text-primaryColor">
                                            <li className="py-2 px-2 ">
                                                Déchets autorisés
                                            </li>
                                        </a>
                                    </Link>

                                    <Link href="/debarras" passHref>
                                        <a className="text-primaryColor">
                                            <li className="py-2 px-2 hover:bg-blue-400 hover:text-white">
                                                Main d'oeuvre
                                            </li>
                                        </a>
                                    </Link>

                                    <Link href="/faq" passHref>
                                        <a  className="text-primaryColor">
                                            <li className="py-2 px-2 hover:bg-blue-400 hover:text-white">
                                                Questions/Réponses
                                            </li>
                                        </a>
                                    </Link>

                                    <div className="text-right py-2 px-2 text-primaryColor">
                                        Fermer
                                    </div>
                                </ul>
                            )}
                        </li>
                        <li className="py-1">
                            <Link href="/blog" passHref>
                                <a className="block py-2 rounded-md text-xl font-bold text-blue-500 bg-white w-full text-center hover:text-primaryColor">
                                    Blog
                                </a>
                            </Link>
                        </li>
                        <li className="py-1">
                            <Link href="/contact" passHref>
                                <a className="block py-2 rounded-md text-xl font-bold text-blue-500 bg-white w-full text-center hover:text-primaryColor">
                                    Devis gratuit
                                </a>
                            </Link>
                        </li>
                    </ul>
                )}


            </nav>
        </>

    )
}
