<template>
  <div class="row">
    <div class="col">
      <q-img :src="halfImg.img1" :ratio="4 / 3" />
    </div>
    <div class="col">
      <q-img :src="halfImg.img2" :ratio="4 / 3" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    halfImg: {},
  },
};
</script>
