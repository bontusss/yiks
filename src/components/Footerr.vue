<template>
    <!-- partial:partials/_footer.html -->
    <footer>
        <BackTop />
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="d-flex justify-content-between">
                        <!-- <img src="~/assets/images/logo.png" class="footer-logo" alt="" /> -->
                        <p class="title">yik</p>

                        <div class="d-flex justify-content-end footer-social">
                            <h5 class="m-0 font-weight-600 mr-3 d-none d-lg-flex">Follow on</h5>
                            <ul class="social-media">
                                <li>
                                    <a href="#">
                                        <i class="mdi mdi-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="mdi mdi-twitter"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div
                        class="d-lg-flex justify-content-between align-items-center border-top mt-5 footer-bottom"
                    >
                        <ul class="footer-horizontal-menu">
                            <li>
                                <a href="#">Terms of Use.</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy.</a>
                            </li>
                            <li>
                                <a href="#">Contact.</a>
                            </li>
                            <li>
                                <a href="#">AdChoices.</a>
                            </li>
                            <li>
                                <a href="#">Advertise with us Transcripts.</a>
                            </li>
                            <li>
                                <a href="#">FAQ.</a>
                            </li>
                            <li>
                                <a href="#">About.</a>
                            </li>
                        </ul>
                        <p class="font-weight-medium">
                            © {{ year }}
                            <a
                                href="https://www.twitter.com/bontusss"
                                target="_blank"
                                class="text-dark"
                            >@Yiks</a>, Inc. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <NewsTicker />
    </footer>

    <!-- partial -->
</template>

<script>
import moment from "moment";
import NewsTicker from "./NewsTicker.vue";
import BackTop from "./BackTop.vue"
export default {
    components: { NewsTicker, BackTop },
    data() {
        return {
            year: moment().format("YYYY"),
        };
    },
};
</script>
<style scoped>
/* @font-face {
    font-family: chomsky;
    src: url("~/static/fonts/Chomsky.woff");
} */
.title {
    font-family: chomsky;
    font-size: 50px;
    margin: -38px 0 0 0;
    font-weight: bold;
}
</style>
