<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
  👀
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code><a class="a-none-deco" href="https://github.com/cybertramp/vue3-boilerplate#readme">README.md</a></code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>
  <p>
    <button type="button" @click="count++">count is: {{ count }}</button>
    <button type="button" @click="loadCurrentTime">Renew Time</button>
  </p>
  
  <p>UTC Time: {{data_time}}</p>
  <p>
    Edit
    <code>components/Home.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
.a-none-deco {
  text-decoration:none !important;
  color: black;
}

a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import ResponseData from "../types/ResponseData";
import DataService from "../services"

export default defineComponent({
  methods: {
    loadCurrentTime(){
      DataService.getCurrentTime().then((res: ResponseData) => {
        this.data_time = res.data.currentDateTime;
      })
    },
  },
  mounted() {
    this.loadCurrentTime();
    console.log("[log] mounted");
  },
  data(){
    return{
      data_time: "",
    }
  }
})
</script>