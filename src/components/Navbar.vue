<script setup>
import { ref } from "vue"


// import moment from "moment";
defineProps({
    site: String
})
const queryString = ref('')

</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="d-flex justify-content-around align-items-center navbar-top">
            <div>
                <a class="navbar-brand" href="/">
                    <!-- <img src="~/assets/images/logo.png" alt="" -->
                    <p class="title text-grey font-weight-bold">
                        {{ site }}
                        <i class="news">News</i>
                    </p>
                </a>
            </div>

            <div class="d-flex">
                <ul class="navbar-right">
                    <li>
                        <form class="form-inline">
                            <router-link to="/search">
                                <button class="btn btn-dark font-weight-bold">Search Yik</button>
                            </router-link>
                            <router-link to="#">
                                <button class="btn btn-dark">
                                    <i class="mdi mdi-facebook"></i>
                                </button>
                            </router-link>
                            <router-link to="#">
                                <button class="btn btn-dark">
                                    <i class="mdi mdi-twitter"></i>
                                </button>
                            </router-link>
                        </form>
                    </li>
                </ul>
            </div>
        </div>
        <div class="search d-lg-none">
            <router-link to="/search">
                <i class="mdi mdi-magnify"></i>
            </router-link>
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

.yik {
    font-size: 30px;
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
