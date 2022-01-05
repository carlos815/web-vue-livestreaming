<template>
  <router-link :to="`/stream/${data.id}`">
    <div class="live-stream-card">
      <div class="thumbnail-wrapper">
        <Img :src="data.thumbnail_url" class="thumbnail-image" />
      </div>
      <div class="tags-wrapper">
        <router-link
          :to="`/tag/${tag}`"
          v-for="tag in data.tags"
          :key="tag"
          class="tag"
        >
          {{ tag }}</router-link
        >
      </div>

      <div class="live-stream-card-info">
        <router-link
          :to="`user/${data.user.username}`"
          class="small-profile-image"
        >
          <Img :src="data.user.profile_pic_url" />
        </router-link>
        <div>
          <router-link :to="`/stream/${data.id}`">
            <h4>{{ data.title }}</h4>
          </router-link>
          <router-link :to="`/user/${data.user.username}`">
            <p>{{ data.user.username }}</p>
          </router-link>
        </div>
      </div>
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

.live-stream-card {
  max-width: 357.33px;

  .thumbnail-wrapper {
    height: 204px;
    margin-bottom: $strm-space-md;
  }

  .tags-wrapper {
    display: flex;
    margin-bottom: $strm-space-md;

    .tag {
      background-color: $strm-opacity-white-10;
      margin-right: $strm-space-md;
      padding: 0 $strm-space-md;
      border-radius: 9999px;

      @include button2;
      color: $strm-color-text-white;

      a {
        text-decoration: none;
      }
    }
  }

  &-info {
    display: flex;
    align-items: center;

    h4,
    p {
      margin: 0;
    }

    p {
      color: $strm-color-text-light;
    }
  }
}
</style>
