<template>
  <img :src="computedSrc" :alt="alt" />
</template>

<script>
export default {
  props: ["src", "alt"],
  created() {},
  computed: {
    computedSrc() {
      if (!this.src) return;
      return require(`../assets/images/${this.src}`);
    },
  },
};
</script>