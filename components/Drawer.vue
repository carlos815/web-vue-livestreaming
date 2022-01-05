<template>
  <div class="drawer" :class="{ open: drawerOpen }" id="drawer">
    <router-link to="/">
      <img src="@/assets/icons/logo.svg" alt="" class="drawer-logo" />
    </router-link>
    <ul class="drawer-tab">
      <li class="selected">
        <img src="@/assets/icons/Explore.svg" alt="" srcset="" />
        <span>Explore</span>
      </li>
      <li>
        <img src="@/assets/icons/Highlights.svg" alt="" srcset="" />
        <span>Highlights</span>
      </li>
      <li>
        <img src="@/assets/icons/Following.svg" alt="" srcset="" />
        <span>Following</span>
      </li>
    </ul>

    <hr />
    <h3>Featured Users</h3>

    <all-drawer-user-cards />
  </div>
</template>

<script>
export default {
  props: ["drawerOpen"],
};
</script>

<style lang="scss">
@import "@/assets/css/main.scss";

.drawer {
  background-color: $palette-primary-100;
  width: 272px;
  min-width: 272px;

  display: flex;
  flex-direction: column;
  padding: $spacing-x-large $spacing-large;
  color: $color-text-white;
  right: auto;
  touch-action: pan-y;
  position: fixed;
  overflow-y: auto;
  bottom: 0;
  top: 0;
  @include screen-max($screen-767) {
    z-index: 20;
    height: 100%;
    display: flex;
    left: -600px;
    transition: left 0.8s;
    &.open {
      left: 0;
      display: flex;
    }
  }

  h3 {
    @include subtitle1Bold;
    margin-bottom: $spacing-large;
    padding: $spacing-x-small;
  }

  &-logo {
    margin-bottom: calc($spacing-x-large + 0.25rem);
    width: 164px;
  }

  hr {
    border: 0;
    border-top: 1px solid $palette-neutral-40;
    margin-bottom: $spacing-large;
  }

  ul {
    list-style-type: none;
  }

  &-tab li {
    display: flex;
    border-radius: 8px;
    margin-bottom: $spacing-large;
    padding: $spacing-x-small $spacing-medium;
    align-items: center;

    @include button2;
    img {
      margin-right: $spacing-x-small;
      height: 12px;
    }

    &.selected {
      @include button2bold;
      background-color: $transparent-white-20;
    }

    &:hover {
      background-color: $transparent-white-10;
      cursor: pointer;
    }

    &:active {
      background-color: $transparent-white-20;
      cursor: pointer;
    }
  }
}
</style>