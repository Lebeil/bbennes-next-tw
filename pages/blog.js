import React from 'react';
import Layout from "../components/layout";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
    return (
        <Layout>
            <section className="pt-24 bg-fondColor">
                <div className="container mx-auto">
                    <div>
                        <h1 className="text-2xl font-black text-gray-800 mt-5 pb-3 px-6 md:px-12">
                            A LA UNE
                        </h1>
                    </div>
                    <div className="flex flex-wrap px-6">
                        <Link href="blog/comment-louer-une-benne" passHref>
                            <a className="w-full lg:w-1/2 md:px-4 lg:px-6 py-5">
                                <div className="bg-white hover:shadow-xl">
                                    <div className="">
                                        <Image
                                            src="/img/blogComment.jpg"
                                            alt="comment louer une benne"
                                            width={700}
                                            height={475}
                                            objectFit="cover"
                                        />
                                    </div>
                                    <div className="px-4 py-4 md:px-10">
                                        <h1 className="font-bold text-2xl ">
                                            Comment louer une benne correctement ?
                                        </h1>
                                        <p className="py-4">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quas
                                            sapiente
                                            voluptate
                                            earum natus facilis dolor deserunt dolorum tempora obcaecati consequatur
                                            rem, vel
                                            distinctio
                                            perferendis tempore nemo sequi eos accusantium.
                                        </p>
                                        <div className="flex justify-between pt-8">
                                            <div className="text-sm font-medium flex items-center italic">
                                                1er FEVRIER 2020
                                            </div>
                                            <div className="2/3">
                                                <div className="text-sm font-medium">
                                                        <Link href="/blog/comment-louer-une-benne" passHref className="text-blue-700 px-1 ">
                                                            <a className="flex items-center pr-2 text-primaryColor">
                                                                Lire la suite
                                                                <div className="">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="26"
                                                                        height="26"
                                                                        viewBox="-74 0 362 362.667"
                                                                    >
                                                                        <path
    fill="#2196f3"
    d="M213.668 181.332c0 4.27-1.281 8.535-3.629 11.734l-106.664 160c-3.84 5.762-10.242 9.602-17.707 9.602h-64c-11.734 0-21.336-9.602-21.336-21.336 0-4.266 1.281-8.531 3.629-11.73l98.773-148.27L3.961 33.066C1.613 29.867.332 25.602.332 21.332.332 9.602 9.934 0 21.668 0h64c7.465 0 13.867 3.84 17.707 9.602l106.664 160c2.348 3.199 3.629 7.464 3.629 11.73zm0 0"
    />
                                                                    </svg>
                                                                </div>

                                                            </a>
                                                        </Link>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Link>

                        {/*<Link href="/" passHref>
                            <a className="w-full lg:w-1/2  md:px-4 lg:px-6 py-5">
                                <div className="bg-white hover:shadow-xl">
                                    <div className="">
                                        <Image
                                            src="/img/blog2.jpg"
                                            alt="bennes à déchets gravat"
                                            width={700}
                                            height={475}
                                            objectFit="cover"
                                        />
                                    </div>
                                    <div className="px-4 py-4 md:px-10">
                                        <h1 className="font-bold text-2xl">
                                            CommentLouerUneBenne se débarrasser les déchets ?
                                        </h1>
                                        <p className="py-4">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quas
                                            sapiente
                                            voluptate
                                            earum natus facilis dolor deserunt dolorum tempora obcaecati consequatur
                                            rem, vel
                                            distinctio
                                            perferendis tempore nemo sequi eos accusantium.
                                        </p>
                                        <div className="flex flex-wrap pt-8">
                                            <div className="w-full md:w-1/3 text-sm font-medium">
                                                NOVEMBER 1,2019
                                            </div>
                                            <div className="md:2/3">
                                                <div className="text-sm font-medium">
                                                    SHARE:
                                                    <a href="" className="text-blue-700 px-1 ">
                                                        FACEBOOk
                                                    </a>
                                                    <a href="" className="text-blue-500 px-1 ">
                                                        TWITTER
                                                    </a>
                                                    <a href="" className="text-red-600 px-1 ">
                                                        GOOGLE+
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Link>*/}

                    </div>
                </div>

                {/*<div className="container mx-auto">
                    <div className="flex flex-wrap px-6">
                        <div className="w-full lg:w-1/2   md:px-4 lg:px-6 py-5">
                            <div className="bg-white hover:shadow-xl">
                                <div className="">
                                    <img src="https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""
                                         className="h-56 w-full border-white border-8 hover:opacity-25"/>
                                </div>
                                <div className="px-4 py-4 md:px-10">
                                    <h1 className="font-bold text-lg">
                                        UI,UX Concepts
                                    </h1>
                                    <p className="py-4">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quas sapiente
                                        voluptate
                                        earum natus facilis dolor deserunt dolorum tempora obcaecati consequatur rem, vel
                                        distinctio
                                        perferendis tempore nemo sequi eos accusantium.
                                    </p>
                                    <div className="flex flex-wrap pt-8">
                                        <div className="w-full md:w-1/3 text-sm font-medium">
                                            NOVEMBER 1,2019
                                        </div>
                                        <div className="2/3">
                                            <div className="text-sm font-medium">
                                                SHARE:
                                                <a href="" className="text-blue-700 px-1 ">
                                                    FACEBOOk
                                                </a>
                                                <a href="" className="text-blue-500 px-1 ">
                                                    TWITTER
                                                </a>
                                                <a href="" className="text-red-600 px-1 ">
                                                    GOOGLE+
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2  md:px-4 lg:px-6 py-5">
                            <div className="bg-white hover:shadow-xl">
                                <div className="">
                                    <img src="https://images.pexels.com/photos/952670/pexels-photo-952670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""
                                         className="h-56 w-full border-white border-8 hover:opacity-25"/>
                                </div>
                                <div className="px-4 py-4 md:px-10">
                                    <h1 className="font-bold text-lg">
                                        UI,UX Concepts
                                    </h1>
                                    <p className="py-4">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quas sapiente
                                        voluptate
                                        earum natus facilis dolor deserunt dolorum tempora obcaecati consequatur rem, vel
                                        distinctio
                                        perferendis tempore nemo sequi eos accusantium.
                                    </p>
                                    <div className="flex flex-wrap pt-8">
                                        <div className="w-full md:w-1/3 text-sm font-medium">
                                            NOVEMBER 1,2019
                                        </div>
                                        <div className="md:2/3">
                                            <div className="text-sm font-medium">
                                                SHARE:
                                                <a href="" className="text-blue-700 px-1 ">
                                                    FACEBOOk
                                                </a>
                                                <a href="" className="text-blue-500 px-1 ">
                                                    TWITTER
                                                </a>
                                                <a href="" className="text-red-600 px-1 ">
                                                    GOOGLE+
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>*/}
            </section>
        </Layout>
    );
};

export default Blog;
