<script setup>
import { ref } from "vue"
import { useRouter } from 'vue-router'

// import moment from "moment";
defineProps({
    site: String
})
const queryString = ref('')
const router = useRouter()
function showSearch() {
    document.getElementById("mobile-search").style.display = "block"
}

function goto() {
    router.push({
        name: 'search',
        query: {
            search: queryString.value,
        }
    })
}

</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="d-flex justify-content-around align-items-center navbar-top">
            <div>
                <a class="navbar-brand" href="/">
                    <!-- <img src="~/assets/images/logo.png" alt="" -->
                    <p class="title text-secondary font-weight-bold">
                        {{ site }}
                        <i class="news">News</i>
                    </p>
                </a>
            </div>

            <div class="d-flex">
                <ul class="navbar-right">
                    <li>
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
                                    @keydown:enter="goto()"
                                />
                            </div>
                            <p
                                @click="goto()"
                                :disabled="() => { }"
                                class="btn btn-dark mb-2"
                            >Search</p>
                            <!-- <p @click="linkTo(query_string)">text</p> -->
                        </form>
                    </li>
                </ul>
            </div>
        </div>
        <div class="mobile-search" id="mobile-search">
            <form class="form-inline d-lg-none">
                <div class="form-group mx-sm-3 mb-2">
                    <label for="search" class="sr-only">Search</label>
                    <input
                        type="text"
                        class="form-control shadow-none border-dark"
                        id="search"
                        placeholder="Eg: Chelsea, Buhari, Biden"
                        required
                        v-model="queryString"
                        @keydown:enter="goto()"
                    />
                </div>
                <p @click="() => { }" :disabled="() => { }" class="ty btn btn-dark mb-2">Search</p>
                <!-- <p @click="linkTo(query_string)">text</p> -->
            </form>
        </div>
        <div @click="showSearch" class="search d-lg-none">
            <i class="mdi mdi-magnify"></i>
        </div>
        <div class="navbar-bottom-menu">
            <button
                class="navbar-toggler"
                type="button"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div
                class="navbar-collapse justify-content-center collapse"
                id="navbarSupportedContent"
            >
                <ul class="navbar-nav d-lg-flex justify-content-between align-items-center">
                    <li>
                        <button class="navbar-close">
                            <i class="mdi mdi-close"></i>
                        </button>
                    </li>
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/newspapers">Newspapers</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/sports">Sports</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/entertainment">Entertainment</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/crypto">Crypto</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/tech">Tech</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/business">Business</router-link>
                    </li>
                    <li class="nav-item">
                        <!-- <router-link class="nav-link" to="/blogs">Blogs</router-link> -->
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>



<style scoped>
/* @font-face {
    font-family: chomsky;
    src: url("~/static/fonts/Chomsky.woff");
} */
.title {
    font-family: cursive;
    font-size: 60px;
    color: grey;
}

.navbar-top {
    padding: 20px 0 10px 0;
}

.news {
    font-size: 14px;
    font-weight: normal;
    margin-left: -21px;
}

@media (max-width: 999px) {
    .title {
        font-size: 50px;
        margin: -41px 0 0 10px;
    }

    .navbar-bottom-menu .navbar-toggler {
        top: 14px;
        margin-right: 10px;
    }

    .navbar-top {
        border: 0;
    }

    .navbar-bottom-menu {
        border-bottom: 0px !important;
    }

    .navbar {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 1030;
        background-color: white;
        height: 70px;
        display: flex;
    }

    .search {
        position: relative;
        margin-right: -30px;
        font-size: 30px;
    }
    .mobile-search {
        display: none;
        margin: auto;
        margin-top: -30px;
    }

    .ty {
        margin-left: 3px;
        margin-top: -2px;
    }
}
</style>
