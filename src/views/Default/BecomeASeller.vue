<template>
  <select
    v-model="$i18n.locale"
    class="w-16 px-3 m-2 text-black bg-transparent rounded-md"
  >
    <option
      v-for="(lang, i) in $i18n.availableLocales"
      class=""
      :key="`Lang${i}`"
      :value="lang"
    >
      <span>{{ lang }}</span>
    </option>
  </select>
  <nav
    class="mb-4"
    style="
      background-image: url('/img/mushroom.jpg');
      height: 500px;
      width: auto;
      background-repeat: no-repeat;
      background-position: center;
    "
  >
    <div class="mx-auto max-w-7xl">
      <div class="text-center text-white" style="padding-top: 180px">
        <div class="text-4xl">
          {{ $t("BecomeAseller.Header") }}
        </div>
        <div class="small_break"></div>
        <div class="text-lg uppercase mb-3">
          {{ $t("BecomeAseller.SubHeader") }}
        </div>
        <div class="small_break"></div>
        <div>
          <a
            :href="`${this.$store.state.baseUrl}register/driver`"
            class="bg-yellow-300 rounded-0 text-lead text-white uppercase py-3 px-6"
          >
            {{ $t("BecomeAseller.Button") }}
          </a>
        </div>
      </div>
    </div>
  </nav>
  <main>
    <div class="container mx-auto">
      <div class="row">
        <div class="w-full">
          <ul class="flex justify-evenly" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                @click="tab1Switch()"
                class="nav-link active"
                id="tab1"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="true"
              >
                {{ $t("BecomeAseller.Tab1Header") }}
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                @click="tab2Switch()"
                class="nav-link"
                id="tab2"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
              >
                {{ $t("BecomeAseller.Tab2Header") }}
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                @click="tab3Switch()"
                class="nav-link"
                id="tab3"
                data-bs-toggle="tab"
                data-bs-target="#contact-tab-pane"
                type="button"
                role="tab"
                aria-controls="contact-tab-pane"
                aria-selected="false"
              >
                {{ $t("BecomeAseller.Tab3Header") }}
              </button>
            </li>
          </ul>
          <br />
          <hr />
          <div class="tab-content" id="myTabContent">
            <div
              v-if="tab === 'benifits'"
              class="tab-pane fade show active"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
              tabindex="0"
            >
              <h1 class="text-center text-uppercase mt-4 text-xl font-bold">
                {{ $t("BecomeAseller.Tab1ContentHeader") }}
              </h1>
              <div class="text-center italic text-gray-500 mt-5">
                {{ $t("BecomeAseller.Tab1ContentSubHeader") }}
              </div>
              <div
                class="grid grid-cols-1 gap-6 mt-10 md:grid-cols-3 lg:grid-cols-3"
              >
                <div class="bg-white p-6 rounded-lg shadow">
                  <div
                    class="rounded-full bg-dark h-20 w-20 mx-auto mb-3 flex items-center justify-center"
                  >
                    <img src="/img/images.jpg" />
                  </div>
                  <h5 class="text-center text-xl font-medium mb-3">
                    {{ $t("BecomeAseller.Tab1ContentRow1Header") }}
                  </h5>
                  <div class="text-center text-sm text-gray-600">
                    {{ $t("BecomeAseller.Tab1ContentRow1Content") }}
                  </div>
                </div>
                <div class="bg-white p-6 rounded-lg shadow">
                  <div
                    class="rounded-full bg-dark h-20 w-20 mx-auto mb-3 flex items-center justify-center"
                  >
                    <img src="/img/istockphoto-1004165346-612x612.jpg" />
                  </div>
                  <h5 class="text-center text-xl font-medium mb-3">
                    {{ $t("BecomeAseller.Tab1ContentRow2Header") }}
                  </h5>
                  <div class="text-center text-sm text-gray-600">
                    {{ $t("BecomeAseller.Tab1ContentRow2Content") }}
                  </div>
                </div>
                <div class="bg-white p-6 rounded-lg shadow">
                  <div
                    class="rounded-full bg-dark h-20 w-20 mx-auto mb-3 flex items-center justify-center"
                  >
                    <img src="/img/images.png" />
                  </div>
                  <h5 class="text-center text-xl font-medium mb-3">
                    {{ $t("BecomeAseller.Tab1ContentRow3Header") }}
                  </h5>
                  <div class="text-center text-sm text-gray-600">
                    {{ $t("BecomeAseller.Tab1ContentRow3Content") }}
                  </div>
                </div>
              </div>
            </div>
            <div
              v-if="tab === 'works'"
              class="tab-pane fade"
              id="profile-tab-pane"
              role="tabpanel"
              aria-labelledby="profile-tab"
              tabindex="0"
            >
              <h1 class="text-center text-uppercase mt-4 text-xl font-bold">
                {{ $t("BecomeAseller.Tab2ContentHeader") }}
              </h1>
              <div class="text-center text-gray-500 italic mb-5">
                {{ $t("BecomeAseller.Tab2ContentSubHeader") }}
              </div>

              <br /><br />
              <div class="row">
                <div
                  class="grid grid-cols-3 gap-8 md:gap-12 lg:gap-16 xl:gap-20 mb-12"
                >
                  <div class="col-span-1 text-end mb-8 md:mb-12 lg:mb-16">
                    <h5 class="text-2xl font-bold">
                      {{ $t("BecomeAseller.Tab2Contentlistitem1Header") }}
                    </h5>
                    <div class="text-gray-500">
                      {{ $t("BecomeAseller.Tab2Contentlistitem1Content") }}
                    </div>
                  </div>

                  <div
                    class="col-span-1 flex justify-center mb-8 md:mb-12 lg:mb-16"
                  >
                    <div
                      class="w-52 h-52 rounded-full border-4 border-gray-300 bg-no-repeat bg-center bg-contain"
                      style="background-image: url('/img/time_line_step_1.png')"
                    ></div>
                  </div>

                  <div class="col-span-1 mb-8 md:mb-12 lg:mb-16"></div>
                  <div class="col-span-1 mb-8 md:mb-12 lg:mb-16"></div>

                  <div
                    class="col-span-1 flex justify-center mb-8 md:mb-12 lg:mb-16"
                  >
                    <div
                      class="w-52 h-52 rounded-full border-4 border-gray-300 bg-no-repeat bg-center bg-contain"
                      style="background-image: url('/img/time_line_step_2.png')"
                    ></div>
                  </div>
                  <div class="col-span-1 text-start mb-8 md:mb-12 lg:mb-16">
                    <h5 class="text-2xl font-bold">
                      {{ $t("BecomeAseller.Tab2Contentlistitem2Header") }}
                    </h5>
                    <div class="text-gray-500">
                      {{ $t("BecomeAseller.Tab2Contentlistitem2Content") }}
                    </div>
                  </div>

                  <div class="col-span-1 text-end mb-8 md:mb-12 lg:mb-16">
                    <h5 class="text-2xl font-bold">
                      {{ $t("BecomeAseller.Tab2Contentlistitem3Header") }}
                    </h5>
                    <div class="text-gray-500">
                      {{ $t("BecomeAseller.Tab2Contentlistitem3Content") }}
                    </div>
                  </div>
                  <div
                    class="col-span-1 flex justify-center mb-8 md:mb-12 lg:mb-16"
                  >
                    <div
                      class="w-52 h-52 rounded-full border-4 border-gray-300 bg-no-repeat bg-center bg-contain"
                      style="background-image: url('/img/time_line_step_3.png')"
                    ></div>
                  </div>
                </div>

                <div class="col-span-4 flex justify-center">
                  <div
                    class="rounded-full uppercase text-center text-white flex justify-center items-center"
                    style="
                      width: 170px;
                      height: 170px;
                      background-color: #fed136;
                      border: 7px solid #f1f1f1;
                    "
                  >
                    <h4 class="text-lg font-bold leading-7">
                      {{ $t("BecomeAseller.Tab2Contentlistitem4Content1") }}
                      <br />
                      {{ $t("BecomeAseller.Tab2Contentlistitem4Content2") }}
                      <br />
                      {{ $t("BecomeAseller.Tab2Contentlistitem4Content3") }}
                    </h4>
                  </div>
                </div>
                <div class="col-span-4 text-left"></div>
              </div>
            </div>

            <div
              v-if="tab === 'faq'"
              class="tab-pane fade"
              id="contact-tab-pane"
              role="tabpanel"
              aria-labelledby="contact-tab"
              tabindex="0"
            >
              <br />

              <h2 class="text-center text-uppercase mt-4 text-xl font-bold">
                {{ $t("BecomeAseller.FaqMainHeader") }}
              </h2>
              <div class="text-center text-gray-400 italic mb-5">
                {{ $t("BecomeAseller.FaqSubHeader") }}
              </div>
              <div class="faq-section">
                <h1 class="faq-main-header">Overview</h1>

                <br />

                <div class="faq">
                  <div class="faq-item">
                    <div class="faq-header" id="faq1-header">
                      <h3 class="faq-question">
                        <b>{{ $t("BecomeAseller.FaqAccordian1Header") }}</b>
                      </h3>
                      <button class="toggle-btn" @click="faq1()">
                        <span class="arrow">{{ icon1 }}</span>
                      </button>
                    </div>
                    <div v-if="icon1 === '\u25B2'" class="faq-content">
                      <small class="answer-faq">{{
                        $t("BecomeAseller.FaqAccordian1Body")
                      }}</small>
                    </div>
                  </div>
                  <hr />
                  <div class="faq-item">
                    <div class="faq-header" id="faq2-header">
                      <h3 class="faq-question">
                        <b>{{ $t("BecomeAseller.FaqAccordian2Header") }}</b>
                      </h3>
                      <button class="toggle-btn" @click="faq2()">
                        <span class="arrow">{{ icon2 }}</span>
                      </button>
                    </div>
                    <div v-if="icon2 === '\u25B2'" class="faq-content">
                      <small class="answer-faq">{{
                        $t("BecomeAseller.FaqAccordian2Body")
                      }}</small>
                    </div>
                  </div>
                  <hr />
                  <div class="faq-item">
                    <div class="faq-header" id="faq3-header">
                      <h3 class="faq-question">
                        <b>{{ $t("BecomeAseller.FaqAccordian3Header") }}</b>
                      </h3>
                      <button class="toggle-btn" @click="faq3()">
                        <span class="arrow">{{ icon3 }}</span>
                      </button>
                    </div>
                    <div v-if="icon3 === '\u25B2'" class="faq-content">
                      <small class="answer-faq">{{
                        $t("BecomeAseller.FaqAccordian3Body")
                      }}</small>
                    </div>
                  </div>
                </div>
                <br /><br />
                <h1 class="faq-main-header">Sell Your Items</h1>

                <br />

                <div class="faq">
                  <div class="faq-item">
                    <div class="faq-header" id="faq4-header">
                      <h3 class="faq-question">
                        <b>{{ $t("BecomeAseller.FaqAccordian4Header") }}</b>
                      </h3>
                      <button class="toggle-btn" @click="faq4()">
                        <span class="arrow">{{ icon4 }}</span>
                      </button>
                    </div>
                    <div v-if="icon4 === '\u25B2'" class="faq-content">
                      <small class="answer-faq">{{
                        $t("BecomeAseller.FaqAccordian4Body")
                      }}</small>
                    </div>
                  </div>
                  <hr />
                  <div class="faq-item">
                    <div class="faq-header" id="faq5-header">
                      <h3 class="faq-question">
                        <b>{{ $t("BecomeAseller.FaqAccordian5Header") }}</b>
                      </h3>
                      <button class="toggle-btn" @click="faq5()">
                        <span class="arrow">{{ icon5 }}</span>
                      </button>
                    </div>
                    <div v-if="icon5 === '\u25B2'" class="faq-content">
                      <small class="answer-faq">{{
                        $t("BecomeAseller.FaqAccordian5Body")
                      }}</small>
                    </div>
                  </div>
                  <hr />
                  <div class="faq-item">
                    <div class="faq-header" id="faq6-header">
                      <h3 class="faq-question">
                        <b>{{ $t("BecomeAseller.FaqAccordian6Header") }}</b>
                      </h3>
                      <button class="toggle-btn" @click="faq6()">
                        <span class="arrow">{{ icon6 }}</span>
                      </button>
                    </div>
                    <div v-if="icon6 === '\u25B2'" class="faq-content">
                      <small class="answer-faq">{{
                        $t("BecomeAseller.FaqAccordian6Body")
                      }}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "DefaultProduct",

  data() {
    return {
      tab: "benifits",
      base_url: this.$store.state.baseUrl,
      faqNumber: "",
      icon1: "\u25BC",
      icon2: "\u25BC",
      icon3: "\u25BC",
      icon4: "\u25BC",
      icon5: "\u25BC",
      icon6: "\u25BC",
    };
  },
  mounted() {
    document.getElementById("tab1").style.color = "blue";
  },
  methods: {
    tab1Switch() {
      this.tab = "benifits";
      document.getElementById("tab2").style.color = "#666";
      document.getElementById("tab3").style.color = "#666";
      document.getElementById("tab1").style.color = "blue";
    },
    tab2Switch() {
      this.tab = "works";
      document.getElementById("tab1").style.color = "#666";
      document.getElementById("tab3").style.color = "#666";
      document.getElementById("tab2").style.color = "blue";
    },
    tab3Switch() {
      this.tab = "faq";
      document.getElementById("tab2").style.color = "#666";
      document.getElementById("tab1").style.color = "#666";
      document.getElementById("tab3").style.color = "blue";
    },
    faq1() {
      if (this.icon1 === "\u25BC") {
        this.icon1 = "\u25B2";
        document.getElementById("faq1-header").style.color = "#145FA9";
        document.getElementById("faq1-header").style.backgroundColor =
          "#D5E1ED";
      } else if (this.icon1 === "\u25B2") {
        this.icon1 = "\u25BC";
        document.getElementById("faq1-header").style.color = "black";
        document.getElementById("faq1-header").style.backgroundColor = "white";
      }
    },
    faq2() {
      if (this.icon2 === "\u25BC") {
        this.icon2 = "\u25B2";
        document.getElementById("faq2-header").style.color = "#145FA9";
        document.getElementById("faq2-header").style.backgroundColor =
          "#D5E1ED";
      } else if (this.icon2 === "\u25B2") {
        this.icon2 = "\u25BC";
        document.getElementById("faq2-header").style.color = "black";
        document.getElementById("faq2-header").style.backgroundColor = "white";
      }
    },
    faq3() {
      if (this.icon3 === "\u25BC") {
        this.icon3 = "\u25B2";
        document.getElementById("faq3-header").style.color = "#145FA9";
        document.getElementById("faq3-header").style.backgroundColor =
          "#D5E1ED";
      } else if (this.icon3 === "\u25B2") {
        this.icon3 = "\u25BC";
        document.getElementById("faq3-header").style.color = "black";
        document.getElementById("faq3-header").style.backgroundColor = "white";
      }
    },
    faq4() {
      if (this.icon4 === "\u25BC") {
        this.icon4 = "\u25B2";
        document.getElementById("faq4-header").style.color = "#145FA9";
        document.getElementById("faq4-header").style.backgroundColor =
          "#D5E1ED";
      } else if (this.icon4 === "\u25B2") {
        this.icon4 = "\u25BC";
        document.getElementById("faq4-header").style.color = "black";
        document.getElementById("faq4-header").style.backgroundColor = "white";
      }
    },
    faq5() {
      if (this.icon5 === "\u25BC") {
        this.icon5 = "\u25B2";
        document.getElementById("faq5-header").style.color = "#145FA9";
        document.getElementById("faq5-header").style.backgroundColor =
          "#D5E1ED";
      } else if (this.icon5 === "\u25B2") {
        this.icon5 = "\u25BC";
        document.getElementById("faq5-header").style.color = "black";
        document.getElementById("faq5-header").style.backgroundColor = "white";
      }
    },
    faq6() {
      if (this.icon6 === "\u25BC") {
        this.icon6 = "\u25B2";
        document.getElementById("faq6-header").style.color = "#145FA9";
        document.getElementById("faq6-header").style.backgroundColor =
          "#D5E1ED";
      } else if (this.icon6 === "\u25B2") {
        this.icon6 = "\u25BC";
        document.getElementById("faq6-header").style.color = "black";
        document.getElementById("faq6-header").style.backgroundColor = "white";
      }
    },
  },
};
</script>

<style scoped>
.nav-link {
  color: #666;
}
/*.project-tab {
	    padding: 10%;
	    margin-top: -8%;
	}
	.project-tab #tabs{
	    background: #007b5e;
	    color: #eee;
	}
	.project-tab #tabs h6.section-title{
	    color: #eee;
	}*/
.project-tab #tabs .nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  color: #0062cc;
  background-color: transparent;
  border-color: transparent transparent #f3f3f3;
  border-bottom: 3px solid !important;
  font-size: 16px;
  font-weight: bold;
}
/*.project-tab .nav-link {
	    border: 1px solid transparent;
	    border-top-left-radius: .25rem;
	    border-top-right-radius: .25rem;
	    color: #0062cc;
	    font-size: 16px;
	    font-weight: 600;
	}
	.project-tab .nav-link:hover {
	    border: none;
	}
	.project-tab thead{
	    background: #f3f3f3;
	    color: #333;
	}
	.project-tab a{
	    text-decoration: none;
	    color: #333;
	    font-weight: 600;
	}*/
.nav-tabs .nav-link:focus,
.nav-tabs .nav-link:hover {
  color: #0062cc;
  background-color: transparent;
  border-color: transparent transparent #f3f3f3;
  border-bottom: 3px solid !important;
  font-size: 16px;
  font-weight: bold;
}

.faq {
  font-family: Arial, sans-serif;
}

.faq-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  background-color: #ffffff;
}

.faq-header h3 {
  margin: 0;
}

.faq-content {
  padding: 10px;
  background-color: #f9f9f9;
}

.faq-item.active .faq-content {
  display: block;
}

.arrow {
  transition: all 0.3s ease-in-out;
}

.toggle-btn {
  border: none;
  background: transparent;
  cursor: pointer;
}

.faq-item.active .arrow {
  transform: rotate(180deg);
}
</style>
