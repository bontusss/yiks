<template>
    <div>
        <navbar />
        <div class="container-scroller">
            <div class="main-panel">
                <!-- start -->
                <div class="container">
                    <div class="editors-news">
                        <h1>
                            Search results for
                            <b>"{{ $route.query.search }}"</b>
                        </h1>
                        <div class="row">
                            <!-- <Loader v-if="isLoading" /> -->
                            <div
                                class="col-6 col-lg-3 mb-5 mb-sm-2"
                                v-for="item in data"
                                :key="item.id"
                            >
                                <a class="text-dark" :href="item.url">
                                    <h5 class="i_title mt-3">{{ item.title }}</h5>
                                </a>
                                <section class="d-flex justify-content-between">
                                    <p>{{ item.datee }}</p>
                                    <p>{{ item.newspaper }}</p>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end -->
            </div>
        </div>
        <pagefooter />
    </div>
</template>
<script>
import axios from 'axios'
import Config from '../config'
export default {
    data() {
        return {
            isLoading: true,
            data: [],
            s: this.$route.query.search,
        };
    },

    methods: {
        async search() {
            let res = await axios.get(`${Config.API_URL}search/${this.s}`);
            this.data = res.data;
            this.isLoading = false;
        },
    },

    mounted() {
        this.search();
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
}

.right {
    float: right;
}

.left {
    float: left;
}
</style>
