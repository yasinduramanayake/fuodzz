<template>
    <div class="object-contain w-full bg-center bg-no-repeat bg-cover h-60"
        :style="{ 'backgroundImage': 'url(' + vendor.feature_image + ')' }" v-if="vendor">
        <div class="container flex flex-row max-w-6xl p-8 mx-auto">
            <img v-bind:src="vendor.logo" class="w-20 h-16 pl-2 pr-2 rounded-full md:w-36 md:h-32 " alt="">
            <div>
                <div class="flex">
                    <h1 class="mr-2 text-2xl font-bold text-white">{{ vendor.name }}</h1>
                </div>

                <p class="mt-2 text-sm font-light text-white md:w-96">{{ vendor.description }}</p>
                <div>

                </div>
                <p class="text-sm font-light text-white">Delivery {{ currency }}{{ vendor.delivery_fee }} ({{
                    vendor.delivery_time }} mins)</p>
                <div v-if="vendor.vendor_type.slug.match(/pharmacy.*/)" class="flex items-center ">
                    <!-- <div v-if="settings" class="p-1 rounded-md" :style="{ 'background-color': settings.colors.primaryColor }"> -->
                    <a class="flex p-2 mt-2 text-sm text-white bg-blue-500 rounded-full shadow-sm"
                        :href="$router.resolve({ name: 'UploadPrescription', params: { id: vendor.id, slug: sanitizeTitle(`${vendor.name}`) } }).href">
                        <img src="/img/prescription.png" class="w-4 h-4 text-white" alt="">
                        Upload prescription
                    </a>
                    <!-- </div> -->
                </div>
            </div>
        </div>
    </div>

    <div v-if="vendor">
        <div class="bg-slate-50">
            <vue-horizontal class="container flex items-center h-10 mx-auto ">
                <router-link :to="{ name: 'DefaultCategory', params: { id: menu.id, slug: sanitizeTitle(menu.name) } }"
                    class="px-6 py-16" v-for="menu in vendor.menus" :key="menu.id">
                    <p class="w-16 text-xs text-gray-500 capitalize truncate">{{ menu.name }}</p>
                </router-link>
            </vue-horizontal>
        </div>

        <ProductsList :products="products" :responce="resp" @load-more="loadMore" @load-less="loadLess" />

    </div>
</template>

<script>
import axios from 'axios';
import VueHorizontal from 'vue-horizontal';
import ProductsList from '@/components/Default/ProductsList.vue'
// import { UploadIcon } from '@heroicons/vue/solid'
export default {
    name: 'DefaultVendor',
    data() {
        return {
            vendor: null,
            base_url: this.$store.state.baseUrl,
            currency: null,
            products: null,
            resp: null
        }
    },
    components: {
        ProductsList,
        VueHorizontal,
        // UploadIcon,
    },

    mounted() {

        this.$store.commit("loading", true)
        this.$store.dispatch('fetchSettings').then(() => {
            this.settings = this.$store.state.settings;
            this.currency = this.settings.strings.currency
        })



        axios
            .get(this.base_url + 'api/products?vendor_id=' + this.$route.params.id)
            .then((response) => {
                this.products = response.data.data;
                this.resp = response
            })
            .catch((error) => console.log(error));

        axios
            .get(this.base_url + 'api/vendors/' + this.$route.params.id)
            .then((response) => {
                this.vendor = response.data;
                this.$store.commit("loading", false)
            })
            .catch((error) => console.log(error));
    },

    methods: {
        loadLess() {
            // this.$store.commit("loading", true)
            this.pageNo--
            axios.get(this.base_url + "api/products?page=" + this.pageNo + "&vendor_id=" + this.$route.params.id)
                .then((response) => {
                    // this.$store.commit("loading", false);
                    this.products = response.data.data.slice(0, 20);

                })

        },

        loadMore() {
            //   this.$store.commit("loading", true)
            this.pageNo++
            axios.get(this.base_url + "api/products?page=" + this.pageNo + "&vendor_id=" + this.$route.params.id)
                .then((response) => {
                    // this.$store.commit("loading", false);
                    this.products = this.products.concat(response.data.data);

                    this.resp = response.data

                })
        },

        sanitizeTitle(title) {
            var slug = "";
            // Change to lower case
            var titleLower = title.toLowerCase();
            // Letter "e"
            slug = titleLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, 'e');
            // Letter "a"
            slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, 'a');
            // Letter "o"
            slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, 'o');
            // Letter "u"
            slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, 'u');
            // Letter "d"
            slug = slug.replace(/đ/gi, 'd');
            // Trim the last whitespace
            slug = slug.replace(/\s*$/g, '');
            // Change whitespace to "-"
            slug = slug.replace(/\s+/g, '-');

            return slug;
        },
    }

}
</script>
  
    
  
  