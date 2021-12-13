<template>
    <div>
        <navbar />
        <div class="container-scroller">
            <div class="main-panel">
                <!-- start -->
                <div class="container">
                    <div class="editors-news">
                        <div class="row">
                            <div class="xn">
                                <form class="form-inline">
                                    <div class="form-group mx-sm-3 mb-2">
                                        <label for="search" class="sr-only">Search</label>
                                        <input
                                            type="text"
                                            class="form-control shadow-none border-dark"
                                            id="search"
                                            placeholder="Eg: Chelsea, Buhari, Biden"
                                            required
                                            v-model="queryString"
                                            @keydown:enter="search()"
                                        />
                                    </div>
                                    <p
                                        @click="search()"
                                        :disabled="() => { }"
                                        class="btn btn-dark mb-2 yik"
                                    >
                                        <b>Yik It</b>
                                    </p>
                                    <!-- <p @click="linkTo(query_string)">text</p> -->
                                </form>
                            </div>
                        </div>
                        <!-- <search-tabs /> -->
                        <h1 v-show="queryString.length > 0">
                            <span
                                v-if="shuffled.length"
                                class="text-secondary"
                            >{{ shuffled.length }}</span> Search results for
                            <b>"{{ queryString }}"</b>
                        </h1>
                        <p v-if="Loading">Yiking ...</p>
                        <div class="row">
                            <!-- <Loader v-if="isLoading" /> -->
                            <div
                                class="col-6 col-lg-3 mb-5 mb-sm-2"
                                v-for="item in shuffled"
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
import SearchTabs from '../components/SearchTabs.vue'
export default {
    components: {
        SearchTabs,
    },
    data() {
        return {
            Loading: false,
            data: [],
            s: this.$route.query.search,
            queryString: "",
        };
    },

    methods: {
        async search() {
            this.loading = true
            let res = await axios.get(`${Config.API_URL}search/${this.queryString}`);
            this.data = res.data;
            console.log(this.data + this.queryString)
            this.Loading = false;
        },
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

.yik {
    font-size: 14px;
}

.xn {
    margin: auto;
}

#search {
    width: 700px;
}

@media (max-width: 999px) {
    #search {
        width: 98%;
    }
}
</style>
