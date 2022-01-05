<template>
  <router-link :to="`/user/${data.username}`" class="drawer-user-card">
    <div class="small-profile-image"><Img :src="data.profile_pic_url" /></div>
    <div class="drawer-user-card-content-wrapper">
      <div class="drawer-user-card-top-wrapper">
        <p class="drawer-user-card-username">{{ data.username }}</p>
        <p class="drawer-user-card-viewers-count">
          {{ data.now_playing.viewers_count }}
        </p>
      </div>
      <p class="drawer-user-card-game-title">
        {{ data.now_playing.game.title }}
      </p>
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

<style lang="scss">
@import "@/assets/css/main.scss";
.drawer-user-card {
  display: flex;
  padding: $spacing-x-small;
  align-items: center;
  border-radius: 8px;
  margin-bottom: $spacing-medium;

  &:hover {
    background-color: $transparent-white-10;
  }
  &-top-wrapper {
    display: flex;
  }

  &-content-wrapper {
    width: 100%;
  }

  &-username {
    @include small1bold;
    color: $color-text-white;
    margin-right: auto;
  }

  &-viewers-count {
    @include small1;
    color: $color-text-white;

    &::after {
      content: "";
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      -moz-border-radius: 7.5px;
      -webkit-border-radius: 7.5px;
      border-radius: 7.5px;
      background-color: $color-alert;
    }
  }

  &-game-title {
    @include small1;
    color: $color-text-light;
  }
}
</style>