<template>
  <div class="drawer-user-cards">
    <ul v-if="data && data.length">
      <li v-for="item in data" :key="item.id">
        <drawer-user-card :data="item" />
      </li>
    </ul>

    <ul v-if="errors && errors.length">
      <li v-for="(error, index) of errors" :key="index">
        {{ error.message }}
      </li>
    </ul>
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
      //  .get(baseURL + "featured_users")
      .get(baseURL + "featured_users" + ".json")
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
</style>