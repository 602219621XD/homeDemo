<template>
  <div class="col-4">
    <q-img :src="fullImg.img" :ratio="21 / 9" />
  </div>
</template>
<script>
export default {
  props: {
    fullImg: {},
  },
};
</script>
<style></style>
