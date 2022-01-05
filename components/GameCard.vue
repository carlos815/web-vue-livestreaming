<template>
  <div class="game-card">
    <router-link :to="`game/${data.id}`">
      <div class="thumbnail-wrapper">
        <Img :src="data.thumbnail_url" />
      </div>
      <h4>{{ data.title }}</h4>
      <p>{{ data.viewers_count }} people watching</p>
    </router-link>
  </div>
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

<style lang="scss">
@import "@/assets/css/main.scss";

.game-card {
  .thumbnail-wrapper {
    height: 258px;
    border-radius: 8px;

    img {
      object-position: top;
    }
  }

  h4,
  p {
    margin: 0;
  }

  p {
    @include body2;
    color: $strm-color-text-light;
  }

  a {
    text-decoration: none;
  }
}
</style>
