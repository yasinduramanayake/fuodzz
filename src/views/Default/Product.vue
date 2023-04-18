<template>
  <div class="container p-8 mx-auto max-w-7xl product-page" v-if="product">
    <Breadcrumb
      :routeName="`DefaultVendor`"
      :routeId="product.vendor.id"
      :routeSlug="product.vendor.name"
      :secondCrumb="product.vendor.name"
      :thirdCrumb="product.name"
    />
    <!-- <section class="py-20" v-if="product">
            <div class="container px-4 mx-auto">
                <div class="max-w-xl mx-auto lg:max-w-6xl">
                    <div class="flex flex-wrap mb-12 -mx-4">
                        <div class="w-full px-4 mb-12 lg:w-1/2 lg:mb-0">
                            <div class="lg:w-112">
                                <a class="relative block w-full mb-6 rounded-md group h-112 bg-blueGray-900" href="#">
                                    <div
                                        class="absolute top-0 left-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 group-hover:translate-y-0 group-hover:translate-x-0">
                                        <img class="object-cover w-full h-full border-2 border-black rounded-md img-fluid"
                                            :src="product.photo" alt="">
                                    </div>
                                </a>
                                <div class="flex flex-wrap justify-between -mx-3 -mb-3">
                                    <div class="w-1/2 px-3 mb-3 xs:w-1/4">
                                        <a class="relative block w-full h-24 rounded-md group bg-blueGray-900" href="#">
                                            <div
                                                class="absolute top-0 left-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 group-hover:translate-y-0 group-hover:translate-x-0">
                                                <img class="object-cover w-full h-full border-2 border-black rounded-md img-fluid"
                                                    :src="product.photo"
                                                    alt="">
                                            </div>
                                        </a>
                                    </div>
                                    <div class="w-1/2 px-3 mb-3 xs:w-1/4">
                                        <a class="relative block w-full h-24 rounded-md group bg-blueGray-900" href="#">
                                            <div
                                                class="absolute top-0 left-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 group-hover:translate-y-0 group-hover:translate-x-0">
                                                <img class="object-cover w-full h-full border-2 border-black rounded-md img-fluid"
                                                    :src="product.photo"
                                                    alt="">
                                            </div>
                                        </a>
                                    </div>
                                    <div class="w-1/2 px-3 mb-3 xs:w-1/4">
                                        <a class="relative block w-full h-24 rounded-md group bg-blueGray-900" href="#">
                                            <div
                                                class="absolute top-0 left-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 group-hover:translate-y-0 group-hover:translate-x-0">
                                                <img class="object-cover w-full h-full border-2 border-black rounded-md img-fluid"
                                                    :src="product.photo"
                                                    alt="">
                                            </div>
                                        </a>
                                    </div>
                                    <div class="w-1/2 px-3 mb-3 xs:w-1/4">
                                        <a class="relative block w-full h-24 rounded-md group bg-blueGray-900" href="#">
                                            <div
                                                class="absolute top-0 left-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 group-hover:translate-y-0 group-hover:translate-x-0">
                                                <img class="object-cover w-full h-full border-2 border-black rounded-md img-fluid"
                                                    :src="product.photo"
                                                    alt="">
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full px-4 lg:w-1/2">
                            <div class="max-w-lg">
                                <h2 class="mb-1 text-4xl font-black">{{ product.name }}</h2>
                                <span class="block mb-5 text-sm font-bold">{{ product.vendor.name }}</span>
                                <div class="flex items-center mb-4">
                                    <button class="inline-block mr-2">
                                        <svg width="20" height="20" viewbox="0 0 20 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.9479 7.67203C19.817 7.26705 19.4578 6.97942 19.0328 6.94112L13.2603 6.41696L10.9777 1.07427C10.8094 0.682715 10.4261 0.42926 10.0002 0.42926C9.57428 0.42926 9.19097 0.682715 9.02266 1.07518L6.74004 6.41696L0.96658 6.94112C0.542375 6.98033 0.184089 7.26705 0.0524023 7.67203C-0.0792845 8.07701 0.0423312 8.5212 0.363232 8.80121L4.72659 12.6279L3.43994 18.2956C3.34579 18.7124 3.50754 19.1431 3.85331 19.3931C4.03917 19.5273 4.25661 19.5957 4.47589 19.5957C4.66495 19.5957 4.85248 19.5447 5.02079 19.444L10.0002 16.468L14.9777 19.444C15.3419 19.6632 15.8011 19.6432 16.1461 19.3931C16.492 19.1424 16.6536 18.7114 16.5595 18.2956L15.2728 12.6279L19.6362 8.80197C19.9571 8.5212 20.0796 8.07777 19.9479 7.67203V7.67203Z"
                                                fill="#474BC5"></path>
                                        </svg>
                                    </button>
                                    <button class="inline-block mr-2">
                                        <svg width="20" height="20" viewbox="0 0 20 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.9479 7.67203C19.817 7.26705 19.4578 6.97942 19.0328 6.94112L13.2603 6.41696L10.9777 1.07427C10.8094 0.682715 10.4261 0.42926 10.0002 0.42926C9.57428 0.42926 9.19097 0.682715 9.02266 1.07518L6.74004 6.41696L0.96658 6.94112C0.542375 6.98033 0.184089 7.26705 0.0524023 7.67203C-0.0792845 8.07701 0.0423312 8.5212 0.363232 8.80121L4.72659 12.6279L3.43994 18.2956C3.34579 18.7124 3.50754 19.1431 3.85331 19.3931C4.03917 19.5273 4.25661 19.5957 4.47589 19.5957C4.66495 19.5957 4.85248 19.5447 5.02079 19.444L10.0002 16.468L14.9777 19.444C15.3419 19.6632 15.8011 19.6432 16.1461 19.3931C16.492 19.1424 16.6536 18.7114 16.5595 18.2956L15.2728 12.6279L19.6362 8.80197C19.9571 8.5212 20.0796 8.07777 19.9479 7.67203V7.67203Z"
                                                fill="#474BC5"></path>
                                        </svg>
                                    </button>
                                    <button class="inline-block mr-2">
                                        <svg width="20" height="20" viewbox="0 0 20 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.9479 7.67203C19.817 7.26705 19.4578 6.97942 19.0328 6.94112L13.2603 6.41696L10.9777 1.07427C10.8094 0.682715 10.4261 0.42926 10.0002 0.42926C9.57428 0.42926 9.19097 0.682715 9.02266 1.07518L6.74004 6.41696L0.96658 6.94112C0.542375 6.98033 0.184089 7.26705 0.0524023 7.67203C-0.0792845 8.07701 0.0423312 8.5212 0.363232 8.80121L4.72659 12.6279L3.43994 18.2956C3.34579 18.7124 3.50754 19.1431 3.85331 19.3931C4.03917 19.5273 4.25661 19.5957 4.47589 19.5957C4.66495 19.5957 4.85248 19.5447 5.02079 19.444L10.0002 16.468L14.9777 19.444C15.3419 19.6632 15.8011 19.6432 16.1461 19.3931C16.492 19.1424 16.6536 18.7114 16.5595 18.2956L15.2728 12.6279L19.6362 8.80197C19.9571 8.5212 20.0796 8.07777 19.9479 7.67203V7.67203Z"
                                                fill="#474BC5"></path>
                                        </svg>
                                    </button>
                                    <button class="inline-block mr-2">
                                        <svg width="20" height="20" viewbox="0 0 20 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.9479 7.67203C19.817 7.26705 19.4578 6.97942 19.0328 6.94112L13.2603 6.41696L10.9777 1.07427C10.8094 0.682715 10.4261 0.42926 10.0002 0.42926C9.57428 0.42926 9.19097 0.682715 9.02266 1.07518L6.74004 6.41696L0.96658 6.94112C0.542375 6.98033 0.184089 7.26705 0.0524023 7.67203C-0.0792845 8.07701 0.0423312 8.5212 0.363232 8.80121L4.72659 12.6279L3.43994 18.2956C3.34579 18.7124 3.50754 19.1431 3.85331 19.3931C4.03917 19.5273 4.25661 19.5957 4.47589 19.5957C4.66495 19.5957 4.85248 19.5447 5.02079 19.444L10.0002 16.468L14.9777 19.444C15.3419 19.6632 15.8011 19.6432 16.1461 19.3931C16.492 19.1424 16.6536 18.7114 16.5595 18.2956L15.2728 12.6279L19.6362 8.80197C19.9571 8.5212 20.0796 8.07777 19.9479 7.67203V7.67203Z"
                                                fill="#474BC5"></path>
                                        </svg>
                                    </button>
                                    <button class="inline-block">
                                        <svg width="20" height="20" viewbox="0 0 20 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.9479 7.67203C19.817 7.26705 19.4578 6.97942 19.0328 6.94112L13.2603 6.41696L10.9777 1.07427C10.8094 0.682715 10.4261 0.42926 10.0002 0.42926C9.57429 0.42926 9.19098 0.682715 9.02267 1.07518L6.74005 6.41696L0.966583 6.94112C0.542377 6.98033 0.184092 7.26705 0.0524051 7.67203C-0.0792816 8.07701 0.0423341 8.5212 0.363235 8.80121L4.7266 12.6279L3.43994 18.2956C3.34579 18.7124 3.50754 19.1431 3.85331 19.3931C4.03917 19.5273 4.25661 19.5957 4.47589 19.5957C4.66495 19.5957 4.85249 19.5447 5.02079 19.444L10.0002 16.468L14.9777 19.444C15.342 19.6632 15.8011 19.6432 16.1461 19.3931C16.492 19.1424 16.6536 18.7114 16.5595 18.2956L15.2728 12.6279L19.6362 8.80197C19.9571 8.5212 20.0796 8.07777 19.9479 7.67203Z"
                                                fill="#E8E8F8"></path>
                                            <defs>
                                                <rect width="20" height="20" fill="white"></rect>
                                            </defs>
                                        </svg>
                                    </button>
                                </div>
                                <span v-if="product.discount_price > 0" class="flex mt-3 space-x-2">

                                    <p class="block mb-4 text-2xl font-black text-green-500">{{ currency }}{{
                                        product.discount_price.toFixed(2)
                                    }}</p>
                                    <p class="text-xs ">{{ currency }}<span class="line-through">{{
                                        product.price.toFixed(2)
                                    }}</span> </p>
                                </span>
                                <span v-else>
                                    <p class="text-2xl font-medium ">{{ currency }}{{ product.price.toFixed(2) }}</p>
                                </span>
                                <p class="mb-2 font-bold">
                                    {{ product.description }}
                                </p>
                                <ul class="mb-6 font-medium list-disc list-inside">
                                    <li>Pariatur ex aliqua elit ut enim consequat amet non do ut.</li>
                                    <li>Ad aute deserunt fugiat qui Lorem in quis velit labore voluptate.</li>
                                    <li>Lorem in quis velit labore</li>
                                </ul>
                                <div class="flex flex-wrap mb-4">
                                    <div class="w-full mb-4 sm:w-auto sm:mb-0 sm:mr-4">
                                        <span class="block mb-2 text-sm font-black">Amount</span>
                                        <div
                                            class="flex items-center justify-between w-24 h-12 px-2 border-2 border-black rounded-md">
                                            <button
                                                @click="decrement()"
                                                class="flex w-3.5 h-3.5 px-px items-center justify-center bg-black hover:bg-indigo-500 rounded transition duration-100">
                                                <div class="w-full h-px mx-px bg-white"></div>
                                            </button>
                                            <input
                                                class="w-10 text-sm font-bold text-center text-black placeholder-black outline-none"
                                                 v-model="quantity" placeholder="2">
                                            <button
                                                @click="increment(product)"
                                                class="relative flex w-3.5 h-3.5 px-px py-px items-center justify-center bg-black hover:bg-indigo-500 rounded transition duration-100">
                                                <div class="relative w-full h-full py-px">
                                                    <div class="absolute left-0 w-full h-px bg-white top-1/2"></div>
                                                    <div class="inline-block h-full mx-auto bg-white max-w-max">
                                                        <div class="inline-block px-px"></div>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="w-full sm:w-auto">
                                        <span class="block mb-2 text-sm font-black">Size</span>
                                        <div
                                            class="relative w-32 h-12 overflow-hidden border-2 border-black rounded-md group">
                                            <select
                                                class="w-full h-full px-4 text-sm font-bold outline-none appearance-none"
                                                name="" id="">
                                                <option value="1">Small</option>
                                                <option value="1">Medium</option>
                                                <option value="1">Large</option>
                                            </select>
                                            <span
                                                class="absolute right-0 mr-3 text-black transform -translate-y-1/2 top-1/2 group-hover:text-indigo-500">
                                                <svg width="10" height="6" viewbox="0 0 10 6" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8.94667 0.453308H4.79333H1.05333C0.413333 0.453308 0.0933335 1.22664 0.546667 1.67997L4 5.13331C4.55333 5.68664 5.45333 5.68664 6.00667 5.13331L7.32 3.81997L9.46 1.67997C9.90667 1.22664 9.58667 0.453308 8.94667 0.453308Z"
                                                        fill="currentColor"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-wrap items-center mb-6 -mx-2 sm:flex-nowrap">
                                    <div class="w-full px-2 mb-4 flex-grow-1">
                                        <a class="relative inline-block w-full h-12 -mb-2 rounded-md group bg-blueGray-900"
                                            href="#">
                                            <div
                                                class="absolute top-0 left-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 group-hover:translate-y-0 group-hover:translate-x-0">
                                                <div
                                                    class="flex items-center justify-center w-full h-full bg-green-600 border-2 border-black rounded-md">
                                                    <span class="text-base font-black text-black">Add to Cart</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="w-auto px-2 mb-4">
                                        <a class="inline-flex items-center justify-center w-12 h-12 text-black transition duration-200 border-2 border-black rounded-md hover:text-indigo-500 hover:border-indigo-500"
                                            href="#">
                                            <svg width="20" height="18" viewbox="0 0 20 18" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M14.44 0.0999756C12.63 0.0999756 11.01 0.979976 10 2.32998C8.99 0.979976 7.37 0.0999756 5.56 0.0999756C2.49 0.0999756 0 2.59998 0 5.68998C0 6.87998 0.19 7.97998 0.52 8.99998C2.1 14 6.97 16.99 9.38 17.81C9.72 17.93 10.28 17.93 10.62 17.81C13.03 16.99 17.9 14 19.48 8.99998C19.81 7.97998 20 6.87998 20 5.68998C20 2.59998 17.51 0.0999756 14.44 0.0999756Z"
                                                    fill="currentColor"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="w-auto px-2 mb-4">
                                        <a class="inline-flex items-center justify-center w-12 h-12 text-black transition duration-200 border-2 border-black rounded-md hover:text-indigo-500 hover:border-indigo-500"
                                            href="#">
                                            <svg width="24" height="24" viewbox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M20.36 12.7299C19.99 12.7299 19.68 12.45 19.64 12.08C19.4 9.87995 18.22 7.89995 16.4 6.63995C16.07 6.40995 15.99 5.95995 16.22 5.62995C16.45 5.29995 16.9 5.21995 17.23 5.44995C19.4 6.95995 20.8 9.31995 21.09 11.93C21.13 12.33 20.84 12.6899 20.44 12.7299C20.41 12.7299 20.39 12.7299 20.36 12.7299Z"
                                                    fill="currentColor"></path>
                                                <path
                                                    d="M3.74001 12.78C3.72001 12.78 3.69001 12.78 3.67001 12.78C3.27001 12.74 2.98001 12.38 3.02001 11.98C3.29001 9.36996 4.67001 7.00996 6.82001 5.48996C7.14001 5.25996 7.60001 5.33996 7.83001 5.65996C8.06001 5.98996 7.98001 6.43996 7.66001 6.66996C5.86001 7.94996 4.69001 9.92996 4.47001 12.12C4.43001 12.5 4.11001 12.78 3.74001 12.78Z"
                                                    fill="currentColor"></path>
                                                <path
                                                    d="M15.99 21.1C14.76 21.69 13.44 21.99 12.06 21.99C10.62 21.99 9.24998 21.67 7.96998 21.02C7.60998 20.85 7.46998 20.41 7.64998 20.05C7.81998 19.69 8.25998 19.55 8.61998 19.72C9.24998 20.04 9.91998 20.26 10.6 20.39C11.52 20.57 12.46 20.58 13.38 20.42C14.06 20.3 14.73 20.09 15.35 19.79C15.72 19.62 16.16 19.76 16.32 20.13C16.5 20.49 16.36 20.93 15.99 21.1Z"
                                                    fill="currentColor"></path>
                                                <path
                                                    d="M12.05 2.01001C10.5 2.01001 9.22998 3.27001 9.22998 4.83001C9.22998 6.39001 10.49 7.65001 12.05 7.65001C13.61 7.65001 14.87 6.39001 14.87 4.83001C14.87 3.27001 13.61 2.01001 12.05 2.01001Z"
                                                    fill="currentColor"></path>
                                                <path
                                                    d="M5.05001 13.87C3.50001 13.87 2.23001 15.13 2.23001 16.69C2.23001 18.25 3.49001 19.51 5.05001 19.51C6.61001 19.51 7.87001 18.25 7.87001 16.69C7.87001 15.13 6.60001 13.87 5.05001 13.87Z"
                                                    fill="currentColor"></path>
                                                <path
                                                    d="M18.95 13.87C17.4 13.87 16.13 15.13 16.13 16.69C16.13 18.25 17.39 19.51 18.95 19.51C20.51 19.51 21.77 18.25 21.77 16.69C21.77 15.13 20.51 13.87 18.95 13.87Z"
                                                    fill="currentColor"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <span class="block mb-2 text-sm font-black">Share on Social Media</span>
                                <div>
                                    <a class="inline-block mr-6 text-green-500 hover:text-indigo-500" href="#">
                                        <svg width="24" height="24" viewbox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M13.6349 20.7272V12.766H16.3583L16.7669 9.66243H13.6349V7.68126C13.6349 6.78299 13.8882 6.17083 15.203 6.17083L16.8771 6.17015V3.39421C16.5876 3.35731 15.5938 3.27271 14.4371 3.27271C12.0217 3.27271 10.3681 4.71878 10.3681 7.37389V9.66243H7.63647V12.766H10.3681V20.7272H13.6349Z"
                                                fill="currentColor"></path>
                                            <mask id="mask0_601_10113" style="mask-type:alpha"
                                                maskunits="userSpaceOnUse" x="7" y="3" width="10" height="18">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M13.6349 20.7272V12.766H16.3583L16.7669 9.66243H13.6349V7.68126C13.6349 6.78299 13.8882 6.17083 15.203 6.17083L16.8771 6.17015V3.39421C16.5876 3.35731 15.5938 3.27271 14.4371 3.27271C12.0217 3.27271 10.3681 4.71878 10.3681 7.37389V9.66243H7.63647V12.766H10.3681V20.7272H13.6349Z"
                                                    fill="white"></path>
                                            </mask>
                                        </svg>
                                    </a>
                                    <a class="inline-block mr-6 text-green-500 hover:text-indigo-500" href="#">
                                        <svg width="24" height="24" viewbox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M21.8181 6.14598C21.1356 6.44844 20.4032 6.65356 19.6336 6.74513C20.4194 6.27462 21.0208 5.52831 21.3059 4.64177C20.5689 5.0775 19.7553 5.39389 18.8885 5.56541C18.1943 4.82489 17.2069 4.36365 16.1118 4.36365C14.0108 4.36365 12.3072 6.06719 12.3072 8.16707C12.3072 8.46489 12.3408 8.75577 12.4057 9.03392C9.24434 8.87513 6.44104 7.3605 4.56483 5.05895C4.23686 5.61986 4.05028 6.27344 4.05028 6.9711C4.05028 8.29107 4.72243 9.45574 5.74225 10.1371C5.11877 10.1163 4.53237 9.94477 4.01901 9.65968V9.70719C4.01901 11.5498 5.33086 13.0876 7.07031 13.4376C6.75161 13.5234 6.41555 13.5709 6.06789 13.5709C5.82222 13.5709 5.58464 13.5466 5.35171 13.5002C5.8361 15.0125 7.24067 16.1123 8.90483 16.1424C7.6034 17.1623 5.96243 17.7683 4.1801 17.7683C3.87301 17.7683 3.57052 17.7498 3.27271 17.7162C4.95655 18.7974 6.95561 19.4279 9.10416 19.4279C16.1026 19.4279 19.928 13.6312 19.928 8.60398L19.9153 8.11147C20.6627 7.57834 21.3094 6.90853 21.8181 6.14598Z"
                                                fill="currentColor"></path>
                                            <mask id="mask0_601_10114" style="mask-type:alpha"
                                                maskunits="userSpaceOnUse" x="3" y="4" width="19" height="16">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M21.8181 6.14598C21.1356 6.44844 20.4032 6.65356 19.6336 6.74513C20.4194 6.27462 21.0208 5.52831 21.3059 4.64177C20.5689 5.0775 19.7553 5.39389 18.8885 5.56541C18.1943 4.82489 17.2069 4.36365 16.1118 4.36365C14.0108 4.36365 12.3072 6.06719 12.3072 8.16707C12.3072 8.46489 12.3408 8.75577 12.4057 9.03392C9.24434 8.87513 6.44104 7.3605 4.56483 5.05895C4.23686 5.61986 4.05028 6.27344 4.05028 6.9711C4.05028 8.29107 4.72243 9.45574 5.74225 10.1371C5.11877 10.1163 4.53237 9.94477 4.01901 9.65968V9.70719C4.01901 11.5498 5.33086 13.0876 7.07031 13.4376C6.75161 13.5234 6.41555 13.5709 6.06789 13.5709C5.82222 13.5709 5.58464 13.5466 5.35171 13.5002C5.8361 15.0125 7.24067 16.1123 8.90483 16.1424C7.6034 17.1623 5.96243 17.7683 4.1801 17.7683C3.87301 17.7683 3.57052 17.7498 3.27271 17.7162C4.95655 18.7974 6.95561 19.4279 9.10416 19.4279C16.1026 19.4279 19.928 13.6312 19.928 8.60398L19.9153 8.11147C20.6627 7.57834 21.3094 6.90853 21.8181 6.14598Z"
                                                    fill="white"></path>
                                            </mask>
                                        </svg>
                                    </a>
                                    <a class="inline-block mr-6 text-green-500 hover:text-indigo-500" href="#">
                                        <svg width="24" height="24" viewbox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M7.6007 2.18176H16.3992C19.3874 2.18176 21.8184 4.61276 21.8182 7.60069V16.3992C21.8182 19.3871 19.3874 21.8181 16.3992 21.8181H7.6007C4.61276 21.8181 2.18188 19.3872 2.18188 16.3992V7.60069C2.18188 4.61276 4.61276 2.18176 7.6007 2.18176ZM16.3993 20.0759C18.4267 20.0759 20.0761 18.4266 20.0761 16.3992H20.076V7.60069C20.076 5.57343 18.4266 3.924 16.3992 3.924H7.6007C5.57343 3.924 3.92412 5.57343 3.92412 7.60069V16.3992C3.92412 18.4266 5.57343 20.076 7.6007 20.0759H16.3993ZM6.85721 12.0001C6.85721 9.16418 9.16425 6.85709 12.0001 6.85709C14.8359 6.85709 17.1429 9.16418 17.1429 12.0001C17.1429 14.8358 14.8359 17.1428 12.0001 17.1428C9.16425 17.1428 6.85721 14.8358 6.85721 12.0001ZM8.62805 11.9999C8.62805 13.8592 10.1408 15.3718 12.0001 15.3718C13.8593 15.3718 15.3721 13.8592 15.3721 11.9999C15.3721 10.1405 13.8594 8.62784 12.0001 8.62784C10.1407 8.62784 8.62805 10.1405 8.62805 11.9999Z"
                                                fill="currentColor"></path>
                                            <mask id="mask0_601_10115" style="mask-type:alpha"
                                                maskunits="userSpaceOnUse" x="2" y="2" width="20" height="20">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M7.6007 2.18176H16.3992C19.3874 2.18176 21.8184 4.61276 21.8182 7.60069V16.3992C21.8182 19.3871 19.3874 21.8181 16.3992 21.8181H7.6007C4.61276 21.8181 2.18188 19.3872 2.18188 16.3992V7.60069C2.18188 4.61276 4.61276 2.18176 7.6007 2.18176ZM16.3993 20.0759C18.4267 20.0759 20.0761 18.4266 20.0761 16.3992H20.076V7.60069C20.076 5.57343 18.4266 3.924 16.3992 3.924H7.6007C5.57343 3.924 3.92412 5.57343 3.92412 7.60069V16.3992C3.92412 18.4266 5.57343 20.076 7.6007 20.0759H16.3993ZM6.85721 12.0001C6.85721 9.16418 9.16425 6.85709 12.0001 6.85709C14.8359 6.85709 17.1429 9.16418 17.1429 12.0001C17.1429 14.8358 14.8359 17.1428 12.0001 17.1428C9.16425 17.1428 6.85721 14.8358 6.85721 12.0001ZM8.62805 11.9999C8.62805 13.8592 10.1408 15.3718 12.0001 15.3718C13.8593 15.3718 15.3721 13.8592 15.3721 11.9999C15.3721 10.1405 13.8594 8.62784 12.0001 8.62784C10.1407 8.62784 8.62805 10.1405 8.62805 11.9999Z"
                                                    fill="white"></path>
                                            </mask>
                                        </svg>
                                    </a>
                                    <a class="inline-block text-green-500 hover:text-indigo-500" href="#">
                                        <svg width="24" height="24" viewbox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.2 3H4.8C3.81 3 3 3.81 3 4.8V19.2C3 20.19 3.81 21 4.8 21H19.2C20.19 21 21 20.19 21 19.2V4.8C21 3.81 20.19 3 19.2 3ZM8.4 18.3H5.7V10.2H8.4V18.3ZM7.05 8.67C6.15 8.67 5.43 7.95 5.43 7.05C5.43 6.15 6.15 5.43 7.05 5.43C7.95 5.43 8.67 6.15 8.67 7.05C8.67 7.95 7.95 8.67 7.05 8.67ZM18.3 18.3H15.6V13.53C15.6 12.81 14.97 12.18 14.25 12.18C13.53 12.18 12.9 12.81 12.9 13.53V18.3H10.2V10.2H12.9V11.28C13.35 10.56 14.34 10.02 15.15 10.02C16.86 10.02 18.3 11.46 18.3 13.17V18.3Z"
                                                fill="currentColor"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-8 border-b-2 border-black">
                        <div class="flex flex-col -mb-px md:flex-row"><a
                                class="inline-block px-2 pb-2 mb-3 text-lg font-black text-indigo-500 border-b-4 border-indigo-500 md:mb-0"
                                href="#">Description</a><a
                                class="inline-block px-2 pb-2 mb-3 text-lg font-bold text-black md:mb-0"
                                href="#">Customer Reviews</a><a
                                class="inline-block px-2 pb-2 mb-3 text-lg font-bold text-black md:mb-0"
                                href="#">Shipping &amp; Returns</a></div>
                    </div>
                    <div>
                        <h4 class="mb-3 text-xl font-black">Lorem ipsum dolor sit amet</h4>
                        <p class="text-lg font-bold">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
        </section> -->
    <div class="grid grid-cols-1 md:grid-cols-2 md:gap-10 product-slide">
      <div class="col-span-full md:col-span-6 product-slide-inner">
          <div class="main-img" v-if="product.photo">
            <img
              v-bind:src="product.photo"
              class="mx-auto mb-5 rounded-lg w-96 md:w-132"
            />
          </div>
          <vue-horizontal
            ref="horizontal"
            class="horizontal"
            responsive
            v-if="product"
          >
            <div
              v-for="photo in product.photos"
              :key="photo.id"
              class="flex flex-row px-2 mb-10 horizontal-slide"
            >
              <a
                @click="selectedImage(photo)"
                class="flex flex-col items-center justify-center p-2 border border-gray-200 hover:border-gray-600 hover:border-2 h-16"
              >
                <img
                  v-if="product"
                  v-bind:src="photo"
                  class="h-12 mx-auto rounded-md"
                />
              </a>
            </div>
          </vue-horizontal>
        </div>


      <!-- to be update -->
      <div class="md:col-start-9 col-span-12 product-details">
          <div class="font-bold text-lg mb-3">
            {{ product.name }}
          </div>
          <!-- <p class="text-4xl font-extrabold sm:mt-0 leading-large heading capitalize">
            {{ product.name }}
          </p> -->
          <div class="flex items-center mb-3">
            <div v-for="(item, index) in 4" :key="index" class="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4"
                viewBox="0 0 576 512"
              >
                <path
                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                />
              </svg>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 mr-3"
              viewBox="0 0 576 512"
            >
              <path
                d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"
              />
            </svg>
            <span class="text-gray-400"> (0 reviews) </span>
          </div>
          <!-- <hr/> -->

          <div class="flex flex-row items-center mb-3" style="font-size: 15px">
            <div class="mr-4">
              <a href="javascript:;" class="no-underline text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-question-circle mb-1"
                  viewBox="0 0 16 16"
                  style="display: inline"
                >
                  <path
                    d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                  />
                  <path
                    d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"
                  />
                </svg>
                Product Inquiry
              </a>
            </div>
            <div class="mr-4">
              <a href="javascript:;" class="no-underline text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-heart"
                  viewBox="0 0 16 16"
                  style="display: inline"
                >
                  <path
                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                  />
                </svg>
                Add to wishlist
              </a>
            </div>
            <div class="mr-4">
              <a href="javascript:;" class="no-underline text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-repeat"
                  viewBox="0 0 16 16"
                  style="display: inline"
                >
                  <path
                    d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
                  />
                </svg>
                Add to compare
              </a>
            </div>
          </div>

          <div class="flex flex-row items-center mb-3">
            <div class="text-gray-400 mr-3">Brand</div>
            <div class="font-bold">Calvin Klein</div>
          </div>

          <div class="flex flex-row items-center mb-3">
            <div class="font-bold mr-4 mt-2">Inhouse product</div>
            <div class="font-bold">
              <button class="border border-yellow-300 text-yellow-300 rounded-full py-2 px-4" >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chat-left-text"
                  viewBox="0 0 16 16"
                  style="display: inline"
                >
                  <path
                    d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                  />
                  <path
                    d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                Message Seller
              </button>
            </div>
          </div>

          <hr />
<br>
          <div class="mr-4">
            <table class="border-collapse border-0 divide-y divide-gray-200">
              <tr style="vertical-align: middle">
                <td class="text-gray-400 pl-0">Price</td>
                <td class="text-left">
                  <span class="font-bold text-red-500">
                    {{ currency }} {{ product.discount_price.toFixed(2) }}
                  </span>
                  <span class="text-gray-400 mr-1"> / PC </span>
                  <span
                    class="bg-yellow-300 text-white rounded-full py-2 px-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-wifi"
                      viewBox="0 0 16 16"
                      style="display: inline"
                    >
                      <path
                        d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z"
                      />
                      <path
                        d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z"
                      />
                    </svg>
                    Club Point: 300
                  </span>
                </td>
              </tr>
              <tr style="vertical-align: middle">
                <td class="text-gray-400 pl-0">Quantity</td>
                <td>
                  <div class="flex items-center">
                    <button
                      class="flex items-center justify-center w-7 h-7 p-2 m-2 font-light transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-0 cursor-pointer hover:bg-green-50 hover:-translate-y-1 hover:scale-110"
                      @click="decrement()"
                    >
                      <MinusIcon class="w-6 h-6 text-gray-500" />
                    </button>
                    <div class="w-10 h-10 overflow-hidden">
                      <input
                        class="w-full h-full font-light text-center"
                        v-model="quantity"
                      />
                    </div>
                    <button
                      class="flex items-center justify-center w-7 h-7 p-2 m-2 font-light transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-0 cursor-pointer hover:bg-green-50 hover:-translate-y-1 hover:scale-110"
                      @click="increment(product)"
                    >
                      <PlusIcon class="w-6 h-6 text-gray-500" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr style="vertical-align: middle">
                <td class="text-gray-400 pl-0">Total Price</td>
                <td class="text-base font-bold text-red-500 text-left">
                  {{ currency }} {{ totalPrice.toFixed(2) }}
                </td>
              </tr>
            </table>
          </div>


          <br>

          <div class="mr-4">
            <button
              type="button"
              class="bg-yellow-300 rounded-0 text-white me-3 py-2 px-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-bag-plus-fill me-2 mb-1"
                viewBox="0 0 16 16"
                style="display: unset"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"
                />
              </svg>
              <span class="font-bold">Add to cart</span>
            </button>
            &nbsp;
            <button type="button" class="bg-red-500 rounded-0 text-white py-2 px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-cart me-2 mb-1"
                viewBox="0 0 16 16"
                style="display: unset"
              >
                <path
                  d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                />
              </svg>
              <span class="font-bold">Buy Now</span>
            </button>
          </div>

          <br>

          <div>
            <table class="border-collapse border-0">
              <tr style="vertical-align: middle">
                <td class="pl-0 text-gray-400">Refund</td>
                &nbsp;
                <td class="mx-10">
                  <div
                    style="
                      background-image: url('/img/refund-sticker.jpg');
                      width: 230px;
                      height: 50px;
                      background-repeat: no-repeat;
                      background-position: center;
                      background-size: contain;
                    "
                  ></div>
                </td>
                 &nbsp;
                <td class="mx-10">
                  <a href="#" class="no-underline text-blue-500"> View Policy </a>
                </td>
              </tr>
              
              <tr class="mx-10">
                
                <td class="pl-0 text-gray-400">Share</td>
                <td colspan="2">
                  <button
                    type="button"
                    class="bg-gray-800 rounded-0 py-2 px-4 mr-2 text-white"
                    style="background-color: #3490f3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-envelope"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    class="bg-gray-800 rounded-0 py-2 px-4 mr-2 text-white"
                    style="background-color: #00aced"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-twitter"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    class="bg-gray-800 rounded-0 py-2 px-4 mr-2 text-white"
                    style="background-color: #3b5998"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    class="bg-gray-800 rounded-0 py-2 px-4 mr-2 text-white"
                    style="background-color: #007bb6"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    class="bg-gray-800 rounded-0 py-2 px-4 mr-2 text-white"
                    style="background-color: #29a628"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-whatsapp"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </table>
          </div>

          
          <span v-if="product.discount_price > 0">
            <div class="flex">
              <!-- <p class="pt-2 text-2xl pr-5 text-gray-400">Price:</p> -->
              <!-- <p
                class="pt-2 text-3xl font-bold text-red-800 tracking-wide pr-3"
              >
                {{ currency }} {{ product.discount_price.toFixed(2) }}
              </p>
              <p class="pt-3 text-base tracking-wide">
                <span class="line-through text-gray-400">
                  {{ currency }}{{ product.price.toFixed(2) }}</span
                >
              </p> -->
            </div>
            <!-- <p class="pt-2 text-2xl font-bold text-red-800 tracking-wide">
             {{ currency }} {{ product.discount_price.toFixed(2) }}
            </p>  -->
            <!-- <p class="pb-2 text-2xl tracking-wide">
              {{ currency
              }}<span class="line-through">{{ product.price.toFixed(2) }}</span>
            </p> -->
          </span>
          <!-- <span v-else>
            <p class="pt-2 text-2xl font-bold text-red-800 tracking-wide pr-3">
              {{ currency }} {{ product.price.toFixed(2) }}
            </p>
          </span> -->
          <!-- <p class="pb-2 leading-7 text-gray-600">{{ product.description }}</p> -->

          <!-- <div
            class="flex mb-4 space-x-4"
            v-if="product.vendor.vendor_type.slug != 'service'"
          >
            <div
              class="p-2 text-sm font-light border bg-green-800 text-white rounded-full px-4 border-green-600 shadow-md"
              v-if="product.deliverable == 1"
            >
              Deliverable
            </div>
            <div
              class="p-2 text-xs font-light text-white border bg-red-800 border-red-600 rounded-full px-4"
              v-if="product.deliverable == 0"
            >
              Not Deliverable
            </div>
            <div class="p-2 text-sm font-normal text-black">
              {{ product.capacity }} {{ product.unit }}
            </div>
            <div
              class="p-2 text-xs font-light text-black border bg-gray-200 border-gray-500 rounded-full px-4"
            >
              {{ product.package_count }} Item(s)
            </div>
          </div> -->

          <!-- <div v-if="product.option_groups">
                    <p class="mb-3 text-4xl" v-if="product.option_groups.length != '0'">{{ $t('product.optionHeader') }}</p>
                    <p class="mt-4 text-sm text-gray-600" v-if="product.option_groups.length != '0'">{{ $t('product.optionSubHeader') }}</p>
                     <select v-model="selectedOption" id="" class="block w-full px-3 py-2 mt-1 bg-gray-100 border border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                     <option selected>Select Options</option>
                        <optgroup  v-for="option_group in product.option_groups" :key="option_group.id" :label=" option_group.name">
                            <option  :value="option" v-for="(option, index) in option_group.options" :key="index">
                                {{ truncate(option.name, 13) }}
                            </option>
                        </optgroup>
                    </select>    
                </div> -->

          <!-- <div class="flex" v-if="product.vendor.vendor_type.slug != 'service'">
            <p class="flex items-center px-2 text-sm mt-3">
              {{ $t("product.quantity") }}:
            </p>
            
            <div class="flex items-center">
              <button
                class="flex items-center justify-center w-7 h-7 p-2 m-2 font-light transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-full cursor-pointer hover:bg-green-50 hover:-translate-y-1 hover:scale-110"
                @click="decrement()"
              >
                <MinusIcon class="w-6 h-6 text-gray-500" />
              </button>
              <div class="w-10 h-10 overflow-hidden">
                <input
                  class="w-full h-full text-lg font-light text-center"
                  v-model="quantity"
                />
              </div>
              <button
                class="flex items-center justify-center w-7 h-7 p-2 m-2 font-light transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-full cursor-pointer hover:bg-green-50 hover:-translate-y-1 hover:scale-110"
                @click="increment(product)"
              >
                <PlusIcon class="w-6 h-6 text-gray-500" />
              </button>
            </div>
            
          </div> -->
          <!-- <div class=""  v-if="product.available_qty > 0">
                    <p class="my-5 text-xs">
                        {{ $t('Instock') }}: <span>{{ product.available_qty }}</span>
                    </p>
                </div>
                <div v-else>
                    <p class="my-5 text-xs">
                        {{ $t('Outofstock') }}
                    </p>
                </div> -->
          <!-- <div class="mt-4 btn-wrap" v-if="settings">
            <button
              :style="{ 'background-color': settings.colors.primaryColor }"
              @click="addToCart(product)"
              class="w-full px-3 py-3 mr-5 text-xs font-semibold text-white md:py-4"
            >
              {{ $t("product.addtocart") }} {{ currency }}
              {{ totalPrice.toFixed(2) }}
            </button>
          </div> -->
      </div>

      <!-- to be update  -->
    </div>
    <div class="mt-20 mb-10" v-if="product.option_groups">
      <p
        class="mb-3 text-4xl text-center text-gray-700"
        v-if="product.option_groups.length != '0'"
      >
        {{ $t("product.optionHeader") }}
      </p>
      <!-- <p class="mt-4 text-sm text-gray-600" v-if="product.option_groups.length != '0'">
                    Select options to add them to the product</p> -->

      <div v-for="option_group in product.option_groups" :key="option_group.id">
        <p class="mt-5 mb-3 text-xs font-medium text-gray-500 md:text-sm">
          {{ option_group.name }}
        </p>

        <div class="flex flex-row space-x-5" v-if="option_group.multiple == 0">
          <div
            v-for="option in option_group.options"
            :key="option"
            class="flex flex-row p-2 rounded-lg shadow w-36"
          >
            <img
              class="object-contain w-14 h-14"
              v-if="option"
              v-bind:src="option.photo"
              alt=""
            />
            <div class="flex flex-col">
              <p class="text-sm">{{ truncate(option.name, 10) }}</p>
              <div class="flex justify-between">
                <p class="text-sm">{{ currency }}{{ option.price }}</p>

                <input
                  v-model="selectedOption"
                  type="radio"
                  :value="option"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5" v-else-if="option_group.multiple == 1">
          <!-- .slice(0, 5) -->
          <vue-horizontal
            ref="horizontal"
            class="container flex items-center mx-auto horizontal"
          >
            <section class="flex flex-row space-x-5">
              <div
                class="w-24 mx-3 my-3 bg-white rounded-lg shadow-md hover:text-black hover:bg-blue-900"
                v-for="(option, index) in option_group.options"
                :key="index"
              >
                <div class="flex flex-col p-2">
                  <h5 class="text-xs text-center truncate">
                    {{ truncate(option.name, 13) }}
                  </h5>
                  <div class="">
                    <img
                      class="object-contain w-24 h-20"
                      v-if="option"
                      v-bind:src="option.photo"
                      alt=""
                    />
                  </div>
                  <div class="flex flex-col p-2">
                    <!-- <p class="my-1 text-xs text-gray-500">{{ option.description }}</p> -->
                    <div class="flex justify-between">
                      <p class="text-xs font-light">
                        {{ currency }}{{ option.price.toFixed(2) }}
                      </p>

                      <input
                        type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        v-model="selectedOptions"
                        :value="option"
                      />
                    </div>
                    <!-- {{ selected0ptions }} -->
                  </div>
                </div>
              </div>
            </section>
          </vue-horizontal>
        </div>
      </div>
    </div>
    <!-- <Options :product="product" :currency="currency" /> -->
    <!-- :style="{ 'background-color': settings.colors.primaryColor }" -->
    <VendorProducts :products="products" />

    <Recommended :products="recommended" />
  </div>
</template>
<script>
import axios from "axios";
import VueHorizontal from "vue-horizontal";
import { notify } from "@kyvg/vue3-notification";
import Swal from "sweetalert2/dist/sweetalert2.js";
import Breadcrumb from "@/components/Default/Breadcrumb.vue";
// import product from '@/components/Default/Product/product.vue'
import VendorProducts from "@/components/Default/Product/ProductsFromVendor.vue";
import Recommended from "@/components/Default/Product/Recommended.vue";
// import Options from '@/components/Default/Product/Options.vue'

export default {
  name: "DefaultProduct",
  components: {
    VueHorizontal,
    Breadcrumb,
    VendorProducts,
    Recommended,
  },

  data() {
    return {
      products: null,
      quantity: 1,
      settings: null,
      product: null,
      base_url: this.$store.state.baseUrl,
      recommended: null,
      currency: null,
      selectedOption: null,
      selectedOptions: [],
      isLoggedIn: false,
      AuthStr: "Bearer " + localStorage.getItem("authToken"),
    };
  },

  mounted() {
    this.$store.commit("loading", true);
    if (localStorage.getItem("authToken")) {
      this.isLoggedIn = true;
      this.user = JSON.parse(localStorage.getItem("user"));
    }

    axios
      .get(this.base_url + "api/products/" + this.$route.params.id)
      .then((response) => {
        this.product = response.data;
        // console.log(this.product)
        this.vendorProducts(this.product.vendor.id);
        this.Recommended(this.product.vendor.vendor_type.id);
        this.$store.commit("loading", false);
      })
      .catch((error) => console.log(error));

    this.$store.dispatch("fetchSettings", this.items).then(() => {
      this.settings = this.$store.state.settings;
      this.currency = this.settings.strings.currency;
    });
  },

  computed: {
    totalPrice() {
      let total;
      if (this.product.discount_price != 0) {
        total = Number(this.quantity) * Number(this.product.discount_price);
      } else {
        total = Number(this.quantity) * Number(this.product.price);
      }

      if (this.selectedOption) {
        total += this.selectedOption.price;
        // console.log('total')
      }
      if (this.selectedOptions) {
        this.selectedOptions.forEach((item) => {
          total += Number(item.price);
          // console.log("hi",total)
        });
      }
      return total;
    },
  },

  methods: {
    addToFavourite(product) {
      axios
        .post(
          this.base_url + "api/favourites/",
          {
            product_id: product.id,
            is_favourite: true,
          },
          {
            headers: { Authorization: this.AuthStr },
          }
        )
        .then((response) => {
          notify({
            type: "success",
            title: "Favourited",
            text: response.data.message,
          });
        })
        .catch((error) => {
          if (error.response) {
            this.message = error.response.data.message;
            notify({
              type: "error",
              title: "Favourited",
              text: error.response.data.message,
              duration: 3000,
            });
          }
        });
    },

    vendorProducts(vendor_id) {
      axios
        .get(this.base_url + "api/products?vendor_id=" + vendor_id)
        .then((response) => {
          this.products = response.data.data.slice(0, 10);
        })
        .catch((error) => console.log(error));
    },

    Recommended(vendor_type_id) {
      axios
        .get(
          this.base_url +
            "api/products?type=popular&vendor_type_id=" +
            vendor_type_id
        )
        .then((response) => {
          this.recommended = response.data.data.slice(0, 10);
        })
        .catch((error) => console.log(error));
    },

    truncate(str, n) {
      return str.length > n ? str.substr(0, n - 1) + "..." : str;
    },

    sanitizeTitle(title) {
      var slug = "";
      // Change to lower case
      var titleLower = title.toLowerCase();
      // Letter "e"
      slug = titleLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, "e");
      // Letter "a"
      slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, "a");
      // Letter "o"
      slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, "o");
      // Letter "u"
      slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, "u");
      // Letter "d"
      slug = slug.replace(/đ/gi, "d");
      // Trim the last whitespace
      slug = slug.replace(/\s*$/g, "");
      // Change whitespace to "-"
      slug = slug.replace(/\s+/g, "-");

      return slug;
    },

    selectedImage(image) {
      this.product.photo = image;
    },

    addToCart(
      product,
      quantity = this.quantity,
      selectedOption = this.selectedOption,
      selectedOptions = this.selectedOptions
    ) {
      if (product.available_qty >= 1 || product.available_qty == null) {
        if (selectedOption) {
          this.$store.commit("addToCart", {
            product,
            quantity,
            selectedOption,
            selectedOptions,
          });
        } else if (this.selectedOptions) {
          this.$store.commit("addToCart", {
            product,
            quantity,
            selectedOption: this.selectedOption,
            selectedOptions: this.selectedOptions,
          });
        } else {
          this.$store.commit("addToCart", { product, quantity });
        }
      } else if (product.available_qty == 0) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Product out of stock",
        });
      }
    },

    increment(product) {
      if (product.available_qty == 0) {
        notify({
          type: "error",
          title: "Cart",
          text: "product out of stock",
        });
      } else {
        this.quantity++;
        if (product.discount_price != 0) {
          this.totalPrice = product.discount_price + this.quantity;
        } else {
          this.totalPrice = product.price + this.quantity;
        }
      }
    },

    decrement() {
      if (this.quantity === 1) {
        notify({
          type: "error",
          title: "Cart",
          text: "You cannot add 0 product",
        });
      } else {
        this.quantity--;
      }
    },
  },
};
</script>
