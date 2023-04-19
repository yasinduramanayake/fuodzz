<template>
  <div class="pt-10 pb-5 bg-gray-50 vendor">
    <div class="container px-5 mx-auto max-w-7xl" v-if="vendor">
      <!-- <div class="row"> -->
      <!-- <div class="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 col-xxl-2">
            <div class="mb-4">
              <a
                href="#"
                class="text-decoration-none text-dark btn btn-lg w-100"
                style="background-color: #eceff3"
              >
                All shops
              </a>
            </div>
            <div>
              <div class="fw-bold fs-5 mb-3">Category</div>
              <div class="mb-3">
                <a href="#" class="text-decoration-none text-muted fs-5">
                  Category 01
                </a>
              </div>
              <div class="mb-3">
                <a href="#" class="text-decoration-none text-muted fs-5">
                  Category 02
                </a>
              </div>
              <div class="mb-3">
                <a href="#" class="text-decoration-none text-muted fs-5">
                  Category 03
                </a>
              </div>
              <div class="mb-3">
                <a href="#" class="text-decoration-none text-muted fs-5">
                  Category 04
                </a>
              </div>
            </div>
          </div> -->
      <div>
        <div class="flex flex-row gap-3 mb-3">
          <div
            class="col-12 sm:col-12 md:col-12 lg:col-10 xl:col-10 2xl:col-10"
          >
            <div class="flex flex-row">
              <div class="pr-4 self-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  fill="currentColor"
                  class="bi bi-shop"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"
                  />
                </svg>
              </div>
              <div>
                <div class="text-4xl font-bold">
                  {{ vendor.name }}
                </div>
                <div style="text-align: justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <div>
                  <a href="#" class="text-gray-900 mr-3 underline">More info</a>
                  <a href="#" class="text-gray-900 mr-3 underline">Schedule</a>
                  <a href="#" class="text-gray-900 mr-3 underline">Recipes</a>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex justify-end col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-2 xl:col-span-2 2xl:col-span-2"
          >
            <button class="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path
                  d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                />
              </svg>
            </button>
            <button class="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-headset"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"
                />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-share"
                viewBox="0 0 16 16"
              >
                <path
                  d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div class="flex flex-col mb-5 mobile-vendor">
          <div
            class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1"
          >
            <div class="flex justify-center items-center border px-2 pt-2 pb-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-clock me-2 mb-1"
                  viewBox="0 0 16 16"
                  style="display: unset"
                >
                  <path
                    d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
                  />
                  <path
                    d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
                  />
                </svg>
                Working time: <span class="font-bold">01:00 — 21:00</span>
              </div>

              <div class="self-center mx-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-dot text-muted"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                </svg>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-star-fill me-2 mb-1 text-warning"
                  viewBox="0 0 16 16"
                  style="display: unset"
                >
                  <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                  />
                </svg>
                5.0
              </div>

              <div class="self-center mx-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-dot text-muted"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                </svg>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-person-exclamation me-2 mb-1 text-warning"
                  viewBox="0 0 16 16"
                  style="display: unset"
                >
                  <path
                    d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"
                  />
                  <path
                    d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 1 0V11a.5.5 0 0 0-.5-.5Zm0 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
                  />
                </svg>
                11-55 min
              </div>

              <div class="self-center mx-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-dot text-muted"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                </svg>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-card-text me-2 mb-1"
                  viewBox="0 0 16 16"
                  style="display: unset"
                >
                  <path
                    d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
                  />
                  <path
                    d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                Delivery — <span class="fw-bold">$1.00</span>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-row">
          <div class="w-full" style="background-color: #eceff3">
            <div class="px-3 py-4">
              <div class="text-3xl mb-3">Express</div>

              <div class="flex flex-row">
                <div
                  class="col-12 sm:col-12 md:col-12 lg:col-3 xl:col-3 2xl:col-3"
                >
                  <div class="bg-white px-3 pb-3 rounded">
                    <div
                      style="
                        background-image: url('/img/placeholder.jpg');
                        width: auto;
                        height: 100px;
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: contain;
                      "
                    ></div>
                    <div class="font-bold text-center">Product</div>
                    <div
                      class="text-gray-400 mb-3"
                      style="text-align: justify; font-size: 12px"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                    <div class="font-bold text-gray-400">$60.00</div>
                  </div>
                </div>

                &nbsp; &nbsp; &nbsp;
                <div
                  class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3"
                >
                  <div class="bg-white px-3 pb-3 rounded">
                    <div
                      style="
                        background-image: url('/img/placeholder.jpg');
                        width: auto;
                        height: 100px;
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: contain;
                      "
                    ></div>
                    <div class="font-bold text-center">Product</div>
                    <div
                      class="text-gray-400 mb-3"
                      style="text-align: justify; font-size: 12px"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                    <div class="font-bold text-gray-400">$60.00</div>
                  </div>
                </div>

                &nbsp; &nbsp; &nbsp;

                <div
                  class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3"
                >
                  <div class="bg-white px-3 pb-3 rounded">
                    <div
                      style="
                        background-image: url('/img/placeholder.jpg');
                        width: auto;
                        height: 100px;
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: contain;
                      "
                    ></div>
                    <div class="font-bold text-center">Product</div>
                    <div
                      class="text-gray-400 mb-3"
                      style="text-align: justify; font-size: 12px"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                    <div class="font-bold text-gray-400">$60.00</div>
                  </div>
                </div>

                &nbsp; &nbsp; &nbsp;
                <div
                  class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3"
                >
                  <div class="bg-white px-3 pb-3 rounded">
                    <div
                      style="
                        background-image: url('/img/placeholder.jpg');
                        width: auto;
                        height: 100px;
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: contain;
                      "
                    ></div>
                    <div class="font-bold text-center">Product</div>
                    <div
                      class="text-gray-400 mb-3"
                      style="text-align: justify; font-size: 12px"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                    <div class="font-bold text-gray-400">$60.00</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="px-3 py-4">
                <div class="text-3xl mb-3">Beverages</div>

              <div class="flex flex-row">
                <div
                  class="col-12 sm:col-12 md:col-12 lg:col-3 xl:col-3 2xl:col-3"
                >
                  <div class="bg-white px-3 pb-3 rounded">
                    <div
                      style="
                        background-image: url('/img/placeholder.jpg');
                        width: auto;
                        height: 100px;
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: contain;
                      "
                    ></div>
                    <div class="font-bold text-center">Product</div>
                    <div
                      class="text-gray-400 mb-3"
                      style="text-align: justify; font-size: 12px"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                    <div class="font-bold text-gray-400">$60.00</div>
                  </div>
                </div>

                &nbsp; &nbsp; &nbsp;
                <div
                  class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3"
                >
                  <div class="bg-white px-3 pb-3 rounded">
                    <div
                      style="
                        background-image: url('/img/placeholder.jpg');
                        width: auto;
                        height: 100px;
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: contain;
                      "
                    ></div>
                    <div class="font-bold text-center">Product</div>
                    <div
                      class="text-gray-400 mb-3"
                      style="text-align: justify; font-size: 12px"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                    <div class="font-bold text-gray-400">$60.00</div>
                  </div>
                </div>

                &nbsp; &nbsp; &nbsp;

                <div
                  class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3"
                >
                  <div class="bg-white px-3 pb-3 rounded">
                    <div
                      style="
                        background-image: url('/img/placeholder.jpg');
                        width: auto;
                        height: 100px;
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: contain;
                      "
                    ></div>
                    <div class="font-bold text-center">Product</div>
                    <div
                      class="text-gray-400 mb-3"
                      style="text-align: justify; font-size: 12px"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                    <div class="font-bold text-gray-400">$60.00</div>
                  </div>
                </div>

                &nbsp; &nbsp; &nbsp;
                <div
                  class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3"
                >
                  <div class="bg-white px-3 pb-3 rounded">
                    <div
                      style="
                        background-image: url('/img/placeholder.jpg');
                        width: auto;
                        height: 100px;
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: contain;
                      "
                    ></div>
                    <div class="font-bold text-center">Product</div>
                    <div
                      class="text-gray-400 mb-3"
                      style="text-align: justify; font-size: 12px"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                    <div class="font-bold text-gray-400">$60.00</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="px-3 py-4">
                <div class="text-3xl mb-3">Baby formula</div>

              <div class="flex flex-row">
                <div
                  class="col-12 sm:col-12 md:col-12 lg:col-3 xl:col-3 2xl:col-3"
                >
                  <div class="bg-white px-3 pb-3 rounded">
                    <div
                      style="
                        background-image: url('/img/placeholder.jpg');
                        width: auto;
                        height: 100px;
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: contain;
                      "
                    ></div>
                    <div class="font-bold text-center">Product</div>
                    <div
                      class="text-gray-400 mb-3"
                      style="text-align: justify; font-size: 12px"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                    <div class="font-bold text-gray-400">$60.00</div>
                  </div>
                </div>

                &nbsp; &nbsp; &nbsp;
                <div
                  class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3"
                >
                  <div class="bg-white px-3 pb-3 rounded">
                    <div
                      style="
                        background-image: url('/img/placeholder.jpg');
                        width: auto;
                        height: 100px;
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: contain;
                      "
                    ></div>
                    <div class="font-bold text-center">Product</div>
                    <div
                      class="text-gray-400 mb-3"
                      style="text-align: justify; font-size: 12px"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                    <div class="font-bold text-gray-400">$60.00</div>
                  </div>
                </div>

                &nbsp; &nbsp; &nbsp;

                <div
                  class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3"
                >
                  <div class="bg-white px-3 pb-3 rounded">
                    <div
                      style="
                        background-image: url('/img/placeholder.jpg');
                        width: auto;
                        height: 100px;
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: contain;
                      "
                    ></div>
                    <div class="font-bold text-center">Product</div>
                    <div
                      class="text-gray-400 mb-3"
                      style="text-align: justify; font-size: 12px"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                    <div class="font-bold text-gray-400">$60.00</div>
                  </div>
                </div>

                &nbsp; &nbsp; &nbsp;
                <div
                  class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3"
                >
                  <div class="bg-white px-3 pb-3 rounded">
                    <div
                      style="
                        background-image: url('/img/placeholder.jpg');
                        width: auto;
                        height: 100px;
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: contain;
                      "
                    ></div>
                    <div class="font-bold text-center">Product</div>
                    <div
                      class="text-gray-400 mb-3"
                      style="text-align: justify; font-size: 12px"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                    <div class="font-bold text-gray-400">$60.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
// import Footer from '@/components/Footer.vue'
// import { LocationMarkerIcon, PhoneIcon, MailIcon, PlusCircleIcon } from '@heroicons/vue/outline'

export default {
  name: "vendorComponent",
  components: {
    // Footer,
    //   LocationMarkerIcon,
    //   StarIcon,
    //   PhoneIcon,
    //   MailIcon,
    //   PlusCircleIcon,
    //   UploadIcon,
    //   LightningBoltIcon,
    //   ClockIcon,
  },
  data() {
    return {
      vendor: null,
      currency: null,
      base_url: this.$store.state.baseUrl,
      settings: null,
    };
  },
  mounted() {
    this.$store.commit("loading", true);
    axios
      .get(this.base_url + "api/vendors/" + this.$route.params.id)
      .then((response) => {
        this.$store.commit("loading", false);
        this.vendor = response.data;
      })
      .catch((error) => console.log(error));

    axios
      .get(this.base_url + "api/app/settings")
      .then((response) => {
        this.settings = response.data;
        this.currency = this.settings.strings.currency;
      })
      .catch((error) => console.log(error));
  },

  methods: {
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
  },
};
</script>

<style></style>
