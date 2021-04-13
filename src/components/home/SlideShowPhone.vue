<template>
  <div>
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      class="mobile-only"
      height="300px"
    >
      <q-carousel-slide
        v-for="(slideshow, index) in slideshowsPhone"
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
  props: ["slideshowsPhone"],
  mounted() {},
};
</script>
<style scoped>
/* img {
  height: 100%;
} */
</style>>

