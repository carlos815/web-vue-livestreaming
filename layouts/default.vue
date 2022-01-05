<template>
  <div class="content-wrapper">
    <Drawer :drawerOpen="drawerOpen" />
    <div class="main-content-section">
      <Header v-on:toggle-drawer="toggleDrawer" />
      <Nuxt />
    </div>
  </div>
</template>w

<script>
export default {
  data: () => {
    return {
      drawerOpen: false,
    };
  },
  mounted() {
    document.addEventListener("resize", this.closeDrawer);
  },
  methods: {
    hideOnClickOutside: function (element) {
      const isVisible = (elem) =>
        !!elem &&
        !!(
          elem.offsetWidth ||
          elem.offsetHeight ||
          elem.getClientRects().length
        ); // source (2018-03-11): https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js

      const outsideClickListener = (event) => {
        if (!element.contains(event.target) && isVisible(element)) {
          // or use: event.target.closest(selector) === null
          //  element.style.display = "none";
          if (!event.target.closest("#toggleDrawerBtn")) {
            console.log("elem hidden");
            this.drawerOpen = false;

            removeClickListener();
          }
        }
      };

      const removeClickListener = () => {
        document.removeEventListener("click", outsideClickListener);
      };

      document.addEventListener("click", outsideClickListener);
    },

    toggleDrawer: function () {
      this.drawerOpen = !this.drawerOpen;

      if (this.drawerOpen == true) {
        const element = document.getElementById("drawer");
        this.hideOnClickOutside(element);
      }
    },
    closeDrawer: function () {
      this.drawerOpen = false;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/main.scss";

.content-wrapper {
  display: flex;
  width: 100%;

  .main-content-section {
    width: inherit;
    position: relative;
    @include screen-min($screen-767) {
      margin-left: 272px;
    }
  }
}
</style>