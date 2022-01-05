<template>
  <img :src="computedSrc" :alt="alt" />
</template>

<script>
import { baseURL } from "@/composables/variables";

export default {
  props: ["src", "alt"],
  data() {
    return {
      baseURL: baseURL,
    };
  },
  created() {},
  computed: {
    computedSrc() {
      if (!this.src) return;

      // return require(`../assets/images/${this.src}`); /* TODO: configure to run as this on dev env only */
      return `${this.baseURL}images/${this.src}`;
    },
  },
};
</script>