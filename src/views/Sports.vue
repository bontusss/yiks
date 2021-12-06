<script setup>
import axios from 'axios'
import { onMounted, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import Config from '../config'
defineProps({
    name: String
})
const data = ref([])
const router = useRouter()
async function getNews() {
    let res = await axios.get(`${Config.API_URL}sports`)
    data.value = res.data
    // console.log(res.data);
}
const shuffled = computed(() => {
    return data.value.sort(() => Math.random() - 0.5)
})
function goto(location) {
    console.log('working');
    router.push({
        name: 'AllNewsFromASource',
        params: {
            source: location
        }
    })
}
onMounted(() => {
    getNews()
})


</script>

<template>
    <div class="container-scroller">
        <div class="main-panel">
            <div class="container">
                <!-- <h2>{{ name }}</h2> -->
                <div class="cat_header">
                    <div class="editor-news">
                        <div class="row">
                            <div
                                class="col-6 col-lg-3 mb-5 mb-sm-2"
                                v-for="item in data"
                                :key="item.id"
                            >
                                <a class="text-dark" :href="item.url">
                                    <h5 class="i_title mt-3">{{ item.title }}</h5>
                                </a>
                                <p @click="goto(item.newspaper)" class="source">{{ item.newspaper }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>