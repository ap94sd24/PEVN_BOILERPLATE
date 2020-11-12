<template>
  <test-request/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TestRequest from "./components/TestRequest.vue";

export default defineComponent({
  name: "App",
  components: {
    TestRequest
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
