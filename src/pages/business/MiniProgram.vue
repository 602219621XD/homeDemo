<!--小程序开发-->
<template>
  <div>
    <!--图片标题-->
    <div class="row">
      <div class="col-xs-6 text-center">
        <img :src="imgText.img1" />
        <div>
          {{ imgText.text1 }}
        </div>
      </div>
      <div class="col-xs-6 text-center">
        <img :src="imgText.img1" />
        <div>
          {{ imgText.text1 }}
        </div>
      </div>
    </div>
    <!--全屏图片-->
    <FullImg :fullImg="fullImg1"></FullImg>
    <FullImg :fullImg="fullImg2"></FullImg>
    <!--半屏图片-->
    <HalfImg :halfImg="halfImg"></HalfImg>
    <FullImg :fullImg="fullImg4"></FullImg>
  </div>
</template>
<script>
import FullImg from "components/business/FullImg";
import HalfImg from "components/business/HalfImg";
export default {
  meta() {
    return {
      title: "小程序开发",
      meta: {
        description: { name: "description", content: "小程序开发" },
      },
    };
  },
  data() {
    return {
      fullImg1: {
        img: require("assets/business/mini/221.png"),
      },
      fullImg2: {
        img: require("assets/business/mini/222.png"),
      },
      halfImg: {
        img1: require("assets/business/mini/42-1.png"),
        img2: require("assets/business/mini/42-2.png"),
      },
      fullImg4: {
        img: require("assets/business/mini/223.png"),
      },
      imgText: {
        img1: require("assets/business/titlebar/9.png"),
        img2: require("assets/business/titlebar/10.png"),
        text1: this.$t("text21"),
        text2: this.$t("text22"),
      },
    };
  },
  components: {
    FullImg,
    HalfImg,
  },
};
</script>
<style></style>
