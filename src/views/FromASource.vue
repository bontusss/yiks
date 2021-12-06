<template>
    <div class="container-scroller">
        <div class="main-panel">
            <navbar />
            <!-- start -->
            <div class="container">
                <h2>News from {{ s }}</h2>
                <div class="editors-news">
                    <div class="row">
                        <Loader />
                        <div
                            class="col-6 col-lg-3 mb-5 mb-sm-2"
                            v-for="item in data"
                            :key="item.id"
                        >
                            <a class="text-dark" :href="item.url">
                                <h5 class="i_title mt-3">{{ item.title }}</h5>
                            </a>
                            <p>{{ item.datee }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end -->
            <pagefooter />
        </div>
    </div>
</template>
<script>

import axios from 'axios'
import Config from '../config'
import Loader from '../components/Loader.vue'
// const url = `${Config.API_URL}newspapers`
// import { useRouter } from "vue-router"
export default {
    components: {
        Loader,
    },
    data() {
        return {
            isLoading: true,
            data: [],
            s: this.$route.params.source,
        };
    },

    methods: {
        async fromSource() {
            let res = await axios.get(Config.API_URL + 'search/' + this.s);
            this.data = res.data;
            this.isLoading = false;
        },
    },

    mounted() {
        this.fromSource();
    },

    computed: {
        shuffled() {
            return this.data.sort(() => Math.random() - 0.5);
        },
    },
};
</script>
<style scoped>
p {
    font-size: 10px;
    float: right;
}
</style>
