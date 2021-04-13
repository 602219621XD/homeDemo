<template>
  <div>
    <q-carousel
      class="desktop-only"
      swipeable
      animated
      v-model="slide"
      thumbnails
      infinite
      :autoplay="autoplay"
      height="600px"
    >
      <q-carousel-slide
        v-for="(slideshow, index) in slideshows"
        :key="index"
        :name="index + 1"
        :img-src="`${process}${slideshow.url}`"
      />
    </q-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      slide: 1,
      autoplay: true,
      process: process.env.API_HOST,
    };
  },
  props: ["slideshows"],
  mounted() {},
};
</script>
<style scoped>
/* img {
  height: 100%;
} */
</style>>

