<template>
  <div v-if="loading" class="loading-page">
    <div class="loading"></div>
  </div>
</template>
<script>
export default {
  data: () => ({
    loading: false,
  }),
  props: {
    load: {
      type: Boolean,
      default: true
    },
  },
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },

  },
  mounted() {
    this.start();
    setTimeout(() => this.finish(), 10000)
  },
};
</script>
<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem;
  text-align: center;
  font-size: 3rem;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.loading {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border: 4px solid grey;
  border-radius: 50%;
  border-top-color: #000;
  animation: spin 1s ease-in-out infinite;
}
@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}

@media (max-width: 999px) {
  .loading {
    margin-top: 70px;
  }
}
</style>
