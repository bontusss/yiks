<template>
  <div class="container fixed-bottom">
    <div class="row">
      <div class="col-md-12">
        <div class="d-flex justify-content-between align-items-center breaking-news bg-white">
          <div
            class="d-flex flex-row flex-grow-1 flex-fill justify-content-center bg-dark py-2 text-white px-1 news"
          >
            <span class="d-flex align-items-center font-weight-bolder n">&nbsp; Yik News</span>
          </div>
          <marquee
            class="news-scroll"
            behavior="scroll"
            direction="left"
            onmouseover="this.stop();"
            onmouseout="this.start();"
          >
            <!-- <Loader v-if="isLoading" /> -->
            <a class="text-dark" v-for="(item, index) in shuffled" :key="index" :href="item.url">
              &nbsp;
              <span class="font-weight-bold">{{ item.newspaper }}</span>
              {{ " - " + item.title }} &nbsp;
              <span class="dot"></span>
            </a>
          </marquee>
        </div>
      </div>
    </div>
    <!-- <topheader /> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      isLoading: true,
      data: [],
    };
  },

  methods: {
    async getNews() {
      let res = await axios.get("https://thebontus.heroku.com/api/v1/all");
      this.data = res.data;
      this.isLoading = false;
    },
  },

  mounted() {
    this.getNews();
  },

  computed: {
    shuffled() {
      return this.data.sort(() => Math.random() - 0.5);
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: chomsky;
  src: url("~/static/fonts/Chomsky.woff");
}

.n {
  font-family: chomsky;
}
.news {
  width: 160px;
}

.news-scroll a {
  text-decoration: none;
}

.dot {
  height: 6px;
  width: 6px;
  margin-left: 3px;
  margin-right: 3px;
  margin-top: 2px !important;
  background-color: gray;
  border-radius: 50%;
  display: inline-block;
}
</style>
