<template>
  <div v-if="data && data.title" class="hero">
    <div class="page-content-wrapper">
      <div class="page-content">
        <div class="hero-content">
          <h1>{{ data.title }}</h1>
          <h3>{{ data.subtitle }}</h3>

          <router-link :to="data.url">
            <button class="button primary">go live</button>
          </router-link>
        </div>
      </div>
    </div>
    <Img :src="data.image_url" class="hero-background" />
  </div>
</template>

<script>
import axios from "axios";
import { baseURL } from "@/composables/variables";

export default {
  data() {
    return {
      data: [],
      errors: [],
    };
  },

  created() {
    axios
      .get(baseURL + "hero")
      .then((response) => {
        this.data = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>

<style lang="scss">
@import "@/assets/css/main.scss";

.hero {
  position: relative;
  overflow: hidden;
  min-height: 425px;

  display: flex;
  align-items: center;

  a {
    text-decoration: none;
  }
  &-content {
    padding: $strm-space-lg;
  }

  h1,
  h3 {
    margin: 0;
  }

  h3 {
    margin-bottom: $strm-space-xl;
  }

  &-background {
    position: absolute;
    top: 0;

    z-index: -2;
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: top;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    background-image: linear-gradient(
      0deg,
      $strm-color-neutral-100 0.22%,
      transparent 63.76%
    );
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
  }
}
</style>
