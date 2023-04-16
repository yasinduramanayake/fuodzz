<template>
  <div class="" v-if="settings">
    <!-- <div class="p-4" :style="{ 'background-color': settings.colors.accentColor }"> -->

    <!-- </div> -->
    <div class="container p-5 mx-auto max-w-7xl mt-14 md:p-10">
      <div
        class="grid gap-4 md:justify-items-center md:grid-cols-6"
        v-if="settings"
      >
        <div class="mb-5">
          <a
            href="/"
            style="text-decoration: none"
            class="text-xl font-bold text-black md:self-center md:text-center md:text-2xl"
            >ShopsWallet</a
          >
          <p class="mt-2 text-xs leading-widest font-light uppercase">
            {{ settings.strings.website.websiteFooterBrief }}
          </p>
          <div class="flex flex-row mt-3 mb-3 space-x-5">
            <a
              :href="
                settings.strings.website.social
                  ? settings.strings.website.social.fbLink
                  : '#'
              "
              ><img src="/img/icons/facebook.svg" class="w-6 h-6" alt=""
            /></a>
            <a
              :href="
                settings.strings.website.social
                  ? settings.strings.website.social.igLink
                  : '#'
              "
              ><img src="/img/icons/instagram.svg" class="w-6 h-6" alt=""
            /></a>
            <a
              :href="
                settings.strings.website.social
                  ? settings.strings.website.social.twLink
                  : '#'
              "
              ><img src="/img/icons/twitter.svg" class="w-6 h-6" alt=""
            /></a>
          </div>
        </div>

        <div class="flex flex-col mb-3 text-black">
          <p
            class="text-xs tracking-widest uppercase text-black mb-3 font-light"
          >
            {{ $t("footer.header1") }}
          </p>
          <div class="flex flex-col text-white font-medium space-y-1">
            <a
              style="text-decoration: none"
              class="text-black hover:text-gray-600"
              target="__blank"
              :href="`${this.$store.state.baseUrl}pages/contact`"
              >{{ $t("footer.sub1") }}</a
            >
            <a
              style="text-decoration: none"
              class="text-black hover:text-gray-600"
              target="__blank"
              :href="`${this.$store.state.baseUrl}privacy/policy`"
              >{{ $t("footer.sub2") }}</a
            >
            <a
              style="text-decoration: none"
              class="text-black hover:text-gray-600"
              target="__blank"
              :href="`${this.$store.state.baseUrl}pages/terms`"
              >{{ $t("footer.sub3") }}</a
            >
          </div>
        </div>
        <div class="flex flex-col mb-3 text-black">
          <p
            class="text-xs tracking-widest uppercase text-black mb-3 font-light"
          >
            {{ $t("footer.header2") }}
          </p>
          <div class="flex flex-col text-white font-medium space-y-1">
            <a
              style="text-decoration: none"
              class="text-black hover:text-gray-600"
              target="__blank"
              :href="`${this.$store.state.baseUrl}register#driver`"
              >{{ $t("footer.sub4") }}</a
            >
            <a
              style="text-decoration: none"
              class="text-black hover:text-gray-600"
              target="__blank"
              :href="`${this.$store.state.baseUrl}register#vendor`"
              >{{ $t("footer.sub5") }} ShopsWallet?</a
            >
          </div>
        </div>
        <div class="flex flex-col mb-3 text-black">
          <p
            class="text-xs tracking-widest uppercase text-black mb-3 font-light"
          >
            {{ $t("footer.header3") }}
          </p>
          <div class="flex flex-col text-white font-medium space-y-1">
            <a
              style="text-decoration: none"
              class="text-black hover:text-gray-600"
              href="/profile"
              >{{ $t("footer.sub6") }}</a
            >
            <a
              style="text-decoration: none"
              class="text-black hover:text-gray-600"
              href="/orders"
              >{{ $t("footer.sub7") }}</a
            >
          </div>
        </div>
        <div class="flex flex-col mb-3 text-black">
          <p
            class="text-xs tracking-widest uppercase text-black mb-3 font-light"
          >
            {{ $t("footer.header4") }}
          </p>
          <div class="flex flex-col text-white font-medium space-y-1">
            <a
              style="text-decoration: none"
              class="text-black hover:text-gray-600"
              target="__blank"
              :href="`${this.$store.state.baseUrl}pages/contact`"
              >{{ $t("footer.sub1") }}</a
            >
            <a
              style="text-decoration: none"
              class="text-black hover:text-gray-600"
              href="/vendors"
              >{{ $t("footer.sub8") }}</a
            >
            <a
              style="text-decoration: none"
              class="text-black hover:text-gray-600"
              href="#services"
              >{{ $t("footer.header4") }}</a
            >
          </div>
        </div>

        <div class="flex flex-col mb-3 text-black">
          <p
            class="text-xs tracking-widest uppercase text-black mb-3 font-light"
          >
            {{ $t("footer.header5") }}
          </p>
          <div
            class="flex flex-col text-white font-medium space-y-1"
            v-for="vendor in vendors"
            :key="vendor.id"
          >
            <a
              style="text-decoration: none"
              class="text-black hover:text-gray-600"
              :href="
                $router.resolve({
                  params: {
                    id: vendor.id,
                    slug: sanitizeTitle(`${vendor.slug}`),
                  },
                }).href
              "
              >{{ vendor.name }}</a
            >
          </div>
        </div>

        <!-- <div class="flex flex-col mb-3 text-black ">
                  <p class="mb-1 font-semibold text-black md:mb-3 ">Connect</p>
                  <div class="flex flex-row mb-3 space-x-2">
                      <a :href="settings.strings.website.social ? settings.strings.website.social.fbLink: '#'"><img src="/img/icons/facebook.svg" class="w-4 h-4 " alt=""></a>
                      <a :href="settings.strings.website.social ? settings.strings.website.social.igLink: '#'"><img src="/img/icons/instagram.svg" class="w-4 h-4" alt=""></a>
                      <a :href="settings.strings.website.social ? settings.strings.website.social.twLink: '#'"><img src="/img/icons/twitter.svg" class="w-4 h-4" alt=""></a>
                  </div>
              </div> -->
      </div>
      <div class="py-4 text-xs text-black border-t md:text-center">
        {{ $t("footer.copyright") }} &copy; {{ new Date().getFullYear()
        }}<span class=""> ShopsWallet - {{ $t("footer.copyright2") }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

// import CookieLaw from 'vue-cookie-law'
export default {
  name: "FooterComponent",
  data() {
    return {
      settings: null,
      vendors: null,
      base_url: this.$store.state.baseUrl,
    };
  },
  components: {
    //   CookieLaw
  },

  mounted() {
    this.$store.commit("loading", true);
    axios
      .get(this.base_url + "api/app/settings")
      .then((response) => {
        this.$store.commit("loading", false);
        this.settings = response.data;
      })
      .catch((error) => console.log(error));

    axios
      .get(this.base_url + "api/vendor/types")
      .then((response) => {
        let vendorTypes = response.data;
        //get 4 vendor types
        this.vendors = vendorTypes.slice(0, 4);
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
