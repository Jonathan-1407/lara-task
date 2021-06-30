<template>
    <div class="md:pl-10 md:pr-10 lg:pl-10 lg:pr-10 xl:pl-10 xl:pr-10">
        <header class="text-gray-700 body-font border-b border-gray-200">
            <div
                class="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
            >
                <a
                    class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
                    href="#"
                >
                    <span class="ml-3 text-xl font-bold">Lara Task</span>
                </a>
                <template v-if="!isLoggedIn">
                    <router-link
                        class="md:ml-auto flex flex-wrap items-center text-base justify-center"
                        :to="{ name: 'Register' }"
                    >
                        <a class="mr-5 hover:text-gray-900">Sign up</a>
                    </router-link>
                    <router-link
                        class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0"
                        :to="{ name: 'Login' }"
                    >
                        Sign in
                        <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-4 h-4 ml-1"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </router-link>
                </template>
                <template v-else>
                    <router-link
                        class="md:ml-auto flex flex-wrap items-center text-base justify-center inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0"
                        :to="{ name: 'Board' }"
                    >
                        Dashboard
                    </router-link>
                </template>
            </div>
        </header>
        <section class="text-gray-700 body-font">
            <div
                class="mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
            >
                <div
                    class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
                >
                    <h1
                        class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
                    >
                        Amet repudiandae repellat magnam
                        <br class="hidden lg:inline-block" />
                        Adipisicing
                    </h1>
                    <p class="mb-8 leading-relaxed">
                        Lorem deleniti vero quae tenetur officiis sit Sit
                        inventore maxime molestiae perferendis cupiditate?
                        Repellat consectetur facere repellendus minus
                        exercitationem, tenetur Laborum saepe corrupti
                        consequuntur ipsam voluptas repudiandae. Consectetur
                        vitae atque?
                    </p>
                    <div class="flex justify-center">
                        <button
                            class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                        >
                            Button
                        </button>
                        <button
                            class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg"
                        >
                            Button
                        </button>
                    </div>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        class="object-cover object-center rounded"
                        alt="hero"
                        src="/image/home/image-2.png"
                    />
                </div>
            </div>
        </section>
        <section class="text-gray-700 body-font border-t border-gray-200">
            <div class="px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                    <h2
                        class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1"
                    >
                        TESTIMONIALS
                    </h2>
                    <h1
                        class="sm:text-3xl text-2xl font-medium title-font text-gray-900"
                    >
                        Sit Adipisicing Sint Molestiae
                    </h1>
                </div>
                <div class="flex flex-wrap -m-4">
                    <div class="p-4 md:w-1/3">
                        <div
                            class="flex rounded-lg h-full bg-gray-100 p-8 flex-col"
                        >
                            <div class="flex items-center mb-3">
                                <div
                                    class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0"
                                >
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        class="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M22 12h-4l-3 9L9 3l-3 9H2"
                                        ></path>
                                    </svg>
                                </div>
                                <h2
                                    class="text-gray-900 text-lg title-font font-medium"
                                >
                                    Lorem Ipsum
                                </h2>
                            </div>
                            <div class="flex-grow">
                                <p class="leading-relaxed text-base">
                                    Dolor libero rerum voluptatibus amet
                                    voluptatem. Ut consectetur nobis nam autem
                                    cupiditate sint
                                </p>
                                <a
                                    class="mt-3 text-indigo-500 inline-flex items-center"
                                >
                                    Learn More
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        class="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/3">
                        <div
                            class="flex rounded-lg h-full bg-gray-100 p-8 flex-col"
                        >
                            <div class="flex items-center mb-3">
                                <div
                                    class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0"
                                >
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        class="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
                                        ></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <h2
                                    class="text-gray-900 text-lg title-font font-medium"
                                >
                                    Lorem Ipsum
                                </h2>
                            </div>
                            <div class="flex-grow">
                                <p class="leading-relaxed text-base">
                                    Dolor libero rerum voluptatibus amet
                                    voluptatem. Ut consectetur nobis nam autem
                                    cupiditate sint
                                </p>
                                <a
                                    class="mt-3 text-indigo-500 inline-flex items-center"
                                    >Learn More
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        class="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/3">
                        <div
                            class="flex rounded-lg h-full bg-gray-100 p-8 flex-col"
                        >
                            <div class="flex items-center mb-3">
                                <div
                                    class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0"
                                >
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        class="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle cx="6" cy="6" r="3"></circle>
                                        <circle cx="6" cy="18" r="3"></circle>
                                        <path
                                            d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"
                                        ></path>
                                    </svg>
                                </div>
                                <h2
                                    class="text-gray-900 text-lg title-font font-medium"
                                >
                                    Lorem Ipsum
                                </h2>
                            </div>
                            <div class="flex-grow">
                                <p class="leading-relaxed text-base">
                                    Dolor libero rerum voluptatibus amet
                                    voluptatem. Ut consectetur nobis nam autem
                                    cupiditate sint
                                </p>
                                <a
                                    class="mt-3 text-indigo-500 inline-flex items-center"
                                    >Learn More
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        class="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="text-gray-700 body-font border-t border-gray-200">
            <div class="px-5 py-24 mx-auto flex flex-wrap">
                <div
                    class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden"
                >
                    <img
                        alt="feature"
                        class="object-cover object-center h-full w-full"
                        src="image/home/image-5.png"
                    />
                </div>
                <div
                    class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center"
                >
                    <div
                        class="flex flex-col mb-10 lg:items-start items-center"
                    >
                        <div
                            class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5"
                        >
                            <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-6 h-6"
                                viewBox="0 0 24 24"
                            >
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                        </div>
                        <div class="flex-grow">
                            <h2
                                class="text-gray-900 text-lg title-font font-medium mb-3"
                            >
                                Lorem Ipsum
                            </h2>
                            <p class="leading-relaxed text-base">
                                Consectetur nam quas aliquam inventore suscipit!
                                Esse aliquam nihil ducimus voluptas molestiae
                                landitiis facere.
                            </p>
                            <a
                                class="mt-3 text-indigo-500 inline-flex items-center"
                            >
                                Learn More
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    class="w-4 h-4 ml-2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div
                        class="flex flex-col mb-10 lg:items-start items-center"
                    >
                        <div
                            class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5"
                        >
                            <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-6 h-6"
                                viewBox="0 0 24 24"
                            >
                                <circle cx="6" cy="6" r="3"></circle>
                                <circle cx="6" cy="18" r="3"></circle>
                                <path
                                    d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"
                                ></path>
                            </svg>
                        </div>
                        <div class="flex-grow">
                            <h2
                                class="text-gray-900 text-lg title-font font-medium mb-3"
                            >
                                Lorem Ipsum
                            </h2>
                            <p class="leading-relaxed text-base">
                                Consectetur nam quas aliquam inventore suscipit!
                                Esse aliquam nihil ducimus voluptas molestiae
                                landitiis facere. Blue bottle crucifix vinyl
                                post-ironic four dollar toast vegan taxidermy.
                                Gastropub indxgo juice poutine.
                            </p>
                            <a
                                class="mt-3 text-indigo-500 inline-flex items-center"
                            >
                                Learn More
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    class="w-4 h-4 ml-2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div
                        class="flex flex-col mb-10 lg:items-start items-center"
                    >
                        <div
                            class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5"
                        >
                            <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-6 h-6"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
                                ></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <div class="flex-grow">
                            <h2
                                class="text-gray-900 text-lg title-font font-medium mb-3"
                            >
                                Lorem Ipsum
                            </h2>
                            <p class="leading-relaxed text-base">
                                Consectetur nam quas aliquam inventore suscipit!
                                Esse aliquam nihil ducimus voluptas molestiae
                                landitiis facere.
                            </p>
                            <a
                                class="mt-3 text-indigo-500 inline-flex items-center"
                                >Learn More
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    class="w-4 h-4 ml-2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="text-gray-700 body-font border-t border-gray-200">
            <div class="px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                    <h1
                        class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
                    >
                        Our Team
                    </h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Adipisicing pariatur architecto dolor sunt quisquam.
                        Consequuntur ea consequatur consectetur quaerat id, fuga
                        nobis
                    </p>
                </div>
                <div class="flex flex-wrap -m-2">
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div
                            class="h-full flex items-center border-gray-200 border p-4 rounded-lg"
                        >
                            <img
                                alt="team"
                                class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                src="https://dummyimage.com/80x80/edf2f7/a5afbd"
                            />
                            <div class="flex-grow">
                                <h2
                                    class="text-gray-900 title-font font-medium"
                                >
                                    Lorem Ipsum
                                </h2>
                                <p class="text-gray-500">UI Designer</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div
                            class="h-full flex items-center border-gray-200 border p-4 rounded-lg"
                        >
                            <img
                                alt="team"
                                class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                src="https://dummyimage.com/84x84/edf2f7/a5afbd"
                            />
                            <div class="flex-grow">
                                <h2
                                    class="text-gray-900 title-font font-medium"
                                >
                                    Lorem Ipsum
                                </h2>
                                <p class="text-gray-500">CTO</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div
                            class="h-full flex items-center border-gray-200 border p-4 rounded-lg"
                        >
                            <img
                                alt="team"
                                class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                src="https://dummyimage.com/88x88/edf2f7/a5afbd"
                            />
                            <div class="flex-grow">
                                <h2
                                    class="text-gray-900 title-font font-medium"
                                >
                                    Lorem Ipsum
                                </h2>
                                <p class="text-gray-500">Founder</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div
                            class="h-full flex items-center border-gray-200 border p-4 rounded-lg"
                        >
                            <img
                                alt="team"
                                class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                src="https://dummyimage.com/90x90/edf2f7/a5afbd"
                            />
                            <div class="flex-grow">
                                <h2
                                    class="text-gray-900 title-font font-medium"
                                >
                                    Lorem Ipsum
                                </h2>
                                <p class="text-gray-500">DevOps</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div
                            class="h-full flex items-center border-gray-200 border p-4 rounded-lg"
                        >
                            <img
                                alt="team"
                                class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                src="https://dummyimage.com/94x94/edf2f7/a5afbd"
                            />
                            <div class="flex-grow">
                                <h2
                                    class="text-gray-900 title-font font-medium"
                                >
                                    Lorem Ipsum
                                </h2>
                                <p class="text-gray-500">Software Engineer</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div
                            class="h-full flex items-center border-gray-200 border p-4 rounded-lg"
                        >
                            <img
                                alt="team"
                                class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                src="https://dummyimage.com/98x98/edf2f7/a5afbd"
                            />
                            <div class="flex-grow">
                                <h2
                                    class="text-gray-900 title-font font-medium"
                                >
                                    Lorem Ipsum
                                </h2>
                                <p class="text-gray-500">UX Researcher</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div
                            class="h-full flex items-center border-gray-200 border p-4 rounded-lg"
                        >
                            <img
                                alt="team"
                                class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                src="https://dummyimage.com/100x90/edf2f7/a5afbd"
                            />
                            <div class="flex-grow">
                                <h2
                                    class="text-gray-900 title-font font-medium"
                                >
                                    Lorem Ipsum
                                </h2>
                                <p class="text-gray-500">QA Engineer</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div
                            class="h-full flex items-center border-gray-200 border p-4 rounded-lg"
                        >
                            <img
                                alt="team"
                                class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                src="https://dummyimage.com/104x94/edf2f7/a5afbd"
                            />
                            <div class="flex-grow">
                                <h2
                                    class="text-gray-900 title-font font-medium"
                                >
                                    Lorem Ipsum
                                </h2>
                                <p class="text-gray-500">System</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div
                            class="h-full flex items-center border-gray-200 border p-4 rounded-lg"
                        >
                            <img
                                alt="team"
                                class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                src="https://dummyimage.com/108x98/edf2f7/a5afbd"
                            />
                            <div class="flex-grow">
                                <h2
                                    class="text-gray-900 title-font font-medium"
                                >
                                    Lorem Ipsum
                                </h2>
                                <p class="text-gray-500">Product Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer class="text-gray-700 body-font p-0">
            <div class="border-t border-gray-200">
                <div class="px-5 py-8 flex flex-wrap mx-auto items-center">
                    <div
                        class="flex md:flex-no-wrap flex-wrap justify-center md:justify-start"
                    >
                        <input
                            class="sm:w-64 w-40 bg-gray-100 rounded sm:mr-4 mr-2 border border-gray-400 focus:outline-none focus:border-indigo-500 text-base py-2 px-4"
                            placeholder="Placeholder"
                            type="text"
                        />
                        <button
                            class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                        >
                            Button
                        </button>
                        <p
                            class="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center"
                        ></p>
                    </div>
                    <span
                        class="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto"
                    >
                        <a class="text-gray-500">
                            <svg
                                fill="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                                ></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-500">
                            <svg
                                fill="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                                ></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-500">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <rect
                                    width="20"
                                    height="20"
                                    x="2"
                                    y="2"
                                    rx="5"
                                    ry="5"
                                ></rect>
                                <path
                                    d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                                ></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-500">
                            <svg
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="0"
                                class="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="none"
                                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                ></path>
                                <circle
                                    cx="4"
                                    cy="4"
                                    r="2"
                                    stroke="none"
                                ></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
            <div class="bg-gray-200">
                <div
                    class="mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row"
                >
                    <p class="text-gray-500 text-sm text-center sm:text-left">
                        <b>Jonathan Cua</b> © {{ new Date().getFullYear() }}
                    </p>
                    <span
                        class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm"
                    >
                        Illustrations by
                        <a
                            href="https://undraw.co/illustrations"
                            target="__blank"
                            class="hover:underline"
                        >
                            <b>
                                Udraw.co
                            </b>
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "Home",
    computed: {
        ...mapGetters(["isLoggedIn"])
    }
};
</script>
