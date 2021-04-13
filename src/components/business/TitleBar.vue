<template>
  <div>
    <div class="row">
      <div class="col-sm col-xs-6 text-center">
        <img :src="imgText.img1" />
        <div>
          {{ imgText.text1 }}
        </div>
      </div>
      <div class="col-sm col-xs-6 text-center">
        <img :src="imgText.img2" />
        <div>
          {{ imgText.text2 }}
        </div>
      </div>
      <div class="col-sm col-xs-6 text-center">
        <img :src="imgText.img3" />
        <div>
          {{ imgText.text3 }}
        </div>
      </div>
      <div class="col-sm col-xs-6 text-center">
        <img :src="imgText.img4" />
        <div>
          {{ imgText.text4 }}
        </div>
      </div>
      <div class="col-sm col-xs-6 text-center">
        <img :src="imgText.img5" />
        <div>
          {{ imgText.text5 }}
        </div>
      </div>
      <div class="col-sm col-xs-6 text-center">
        <img :src="imgText.img6" />
        <div>
          {{ imgText.text6 }}
        </div>
      </div>
      <div class="col-sm col-xs-6 text-center">
        <img :src="imgText.img7" />
        <div>
          {{ imgText.text7 }}
        </div>
      </div>
      <div class="col-sm col-xs-6 text-center">
        <img :src="imgText.img8" />
        <div>
          {{ imgText.text8 }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    imgText: {},
  },
};
</script>