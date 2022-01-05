<template>
  <div class="header">
    <div class="page-content-wrapper full-nav" v-if="!isMobile" id="full-nav">
      <div class="page-content">
        <div class="search-input">
          <input type="text" placeholder="Search for something" />
        </div>
        <div class="header-actions">
          <button>
            <img src="@/assets/icons/bell-regular.svg" alt="" />
          </button>
          <button>
            <img src="@/assets/icons/envelope-regular.svg" alt="" />
          </button>
          <button>
            <img src="@/assets/icons/envelope-regular.svg" alt="" />
          </button>
        </div>
      </div>
    </div>

    <div v-else class="mobile-nav" id="mobile-nav">
      <button
        id="toggleDrawerBtn"
        class="button tertiary"
        @click="$emit('toggle-drawer')"
      >
        <img src="@/assets/icons/Menu.svg" alt="" srcset="" />
      </button>

      <router-link to="/">
        <img src="@/assets/icons/logo.svg" alt="" class="header-logo" />
      </router-link>

      <div class="search-input">
        <input type="text" placeholder="Search" />
      </div>

      <div class="header-actions">
        <button>
          <img src="@/assets/icons/bell-regular.svg" alt="" />
        </button>
        <button>
          <img src="@/assets/icons/envelope-regular.svg" alt="" />
        </button>
        <button>
          <img src="@/assets/icons/envelope-regular.svg" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNavMenuOpen: false,
      isMobile: false,
      windowWidth: null,
    };
  },

  mounted() {
    window.addEventListener("resize", this.checkScreenSize);
    //  window.onresize = this.checkScreenSize;
    this.checkScreenSize();
  },

  methods: {
    toggleNavMenu: function () {
      this.isNavMenuOpen = !this.isNavMenuOpen;
    },

    checkScreenSize: function () {
      console.log(this.isNavMenuOpen);
      this.windowWidth = window.outerWidth;

      if (this.windowWidth < 767) {
        this.isMobile = true;
        return;
      }

      this.isMobile = false;
      this.isNavMenuOpen = false;
    },
  },
};
</script>


<style lang="scss">
@import "@/assets/css/main.scss";

$search-icon-width: 12px;

.header {
  .mobile-nav {
    display: flex;
    align-items: center;
    width: stretch;
    padding: $strm-space-md $strm-space-lg;

    .header-logo {
      width: 164px;
      margin-right: $strm-space-lg;
      height: -webkit-fill-available;
    }

    #toggleDrawerBtn {
      display: flex;
      padding: 0;
      margin-right: $strm-space-lg;
    }

    .search-input {
      margin-right: $strm-space-lg;
      input {
        width: inherit;
      }
    }

    .header-actions {
      position: relative;
      display: flex;

      button:last-of-type {
        margin: 0;
      }
    }
  }

  z-index: 10;

  position: absolute;
  width: 100%;

  display: flex;
  background-color: $strm-opacity-black-80;
  .page-content-wrapper .page-content {
    padding: $strm-space-md $strm-space-lg;
  }

  .page-content-wrapper.full-nav .page-content {
    display: flex;

    .header-actions {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(0, -50%);
    }

    &::after {
      /*This invisible dom element is here to ocupy space so the search bar, positioned absolute, doesn't go over the icons */
      content: "";
      display: inline-block;
      min-width: calc(56px * 3);
      height: 0.5rem;
    }
  }

  .search-input {
    margin-right: auto;
    width: 100%;
    max-width: 732px;
    position: relative;
    display: flex;
    align-items: center;

    input {
      border-radius: 0.5rem;
      width: -webkit-fill-available;
      @include button2;
      color: $strm-color-text-light;

      background-color: $strm-color-primary-100;
      border: none;
      padding: $strm-space-sm $strm-space-lg;
      padding-left: calc($strm-space-md + $strm-space-lg + $search-icon-width);
    }

    &::after {
      content: "";
      width: $search-icon-width;
      height: $search-icon-width;
      position: absolute;
      left: $strm-space-md;
      bottom: 50%;
      transform: translate(0, 50%);
      background-image: url(@/assets/icons/search-solid.svg);
      background-size: $search-icon-width;
    }
  }

  button {
    background-color: transparent;
    border: none;
    margin-right: $strm-space-xl;

    :last-of-type {
      margin-right: 0;
    }

    :hover {
      cursor: pointer;
    }
  }
}
</style>
