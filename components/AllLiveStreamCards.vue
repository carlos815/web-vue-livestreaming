<template>
  <div class="cards-set" ref="cardSet">
    <div class="cards-set-title">
      <h2>Some Live Channels</h2>
      <button>See all</button>
    </div>

    <ul v-if="data && data.length" class="content-ul">
      <li v-for="item in data" :key="item.id">
        <live-stream-card :data="item" :style="childStyleObject" />
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
      childStyleObject: {
        width: 263.5 + "px",
        height: 311 + "px",
      },
    };
  },

  created() {
    axios
      .get(baseURL + "live_streams")
      .then((response) => {
        this.data = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/main.scss";

.content-ul {
  height: 309px;
  overflow-y: hidden;
  margin-bottom: 5px;

  li {
    margin-bottom: 5px;
  }
}
</style>