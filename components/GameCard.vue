<template>
  <router-link :to="data.url">
    <div>
      <img :src="data.thumbnail_url" />
      <h1>{{ data.title }}</h1>
      <p>{{ data.viewers_count }} people watching</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
    },
  },
};
</script>

<style>
</style>