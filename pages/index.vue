<template>
  <div>
    <hero />

    <div class="page-content-wrapper">
      <div class="page-content">
        <all-game-cards />
        <all-live-stream-cards />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",

  data() {
    return {};
  },

  mounted() {
    
  },

  methods: {},

  created() {},
});
</script>
