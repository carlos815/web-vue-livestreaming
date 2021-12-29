<template>
  <div>
    <h1>This is the homepage</h1>
    <div v-if="hero">{{ hero.value }}</div>

    <!--- <game-card v-if="popular_games" :data="popular_games.value[0]" /> --->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import getData from "@/composables/getData";
import getDataFromId from "@/composables/getDataFromId";
import GameCard from "~/components/GameCard.vue";

export default Vue.extend({
  components: { GameCard },
  name: "IndexPage",

  data() {
    return {
      loading: false,
      hero: {},
      error: {},
      popular_games: {},
    };
  },

  mounted() {},

  methods: {
    fetchData() {
      this.loading = true;

      this.loading = false;

      console.log(this.hero);

      async function load() {
        let data;
        let error;
        try {
          let dataFetched = await fetch("http://localhost:3000/featured_users");
          if (!dataFetched.ok) {
            throw Error("no data available");
          }
          data = await dataFetched.json();
        } catch (e) {
          error = e.message;
          console.log(e.message);
        }
        return data;
      }

      this.hero = load().data;
    },
  },

  created() {
    this.fetchData();
    console.log(this.hero);
  },
});
</script>
