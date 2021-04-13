<!--全网站建设-->
<template>
  <div>
    <!--图片标题-->
    <TitleBar :imgText="imgText"></TitleBar>
    <!--全屏图片-->
    <FullImg :fullImg="fullImg1"></FullImg>
    <FullImg :fullImg="fullImg2"></FullImg>
    <!--半屏图片-->
    <HalfImg :halfImg="halfImg"></HalfImg>
    <HalfImg :halfImg="halfImg2"></HalfImg>

    <div class="eight column">
      <div class="text-red-14 text-center text-h3 text-bold col-2">
        {{ $t("eightitle") }}
      </div>

      <div class="col row text-grey-1 text-h5 desktop-only">
        <div class="col-sm col-xs-5 bg-blue-4 q-ma-md">
          {{ $t("eight1_1") }}<br />{{ $t("eight1_2") }}
        </div>
        <div class="col-sm col-xs-5 col- bg-blue-4 q-ma-md">
          {{ $t("eight2_1") }}<br />{{ $t("eight2_2") }}
        </div>
        <div class="col bg-blue-4 q-ma-md">
          {{ $t("eight3_1") }}<br />{{ $t("eight3_2") }}
        </div>
        <div class="col-sm col-xs-5 bg-blue-4 q-ma-md">
          {{ $t("eight4_1") }}<br />{{ $t("eight4_2") }}
        </div>
      </div>
      <!-- 移动端显示 -->

      <div class="col row text-grey-1 text-subtitle1 mobile-only">
        <div class="col-sm col-xs-5 bg-blue-4 q-ma-md">
          {{ $t("eight1_1") }}<br />{{ $t("eight1_2") }}
        </div>
        <div class="col-sm col-xs-5 col- bg-blue-4 q-ma-md">
          {{ $t("eight2_1") }}<br />{{ $t("eight2_2") }}
        </div>
        <div class="col bg-blue-4 q-ma-md">
          {{ $t("eight3_1") }}<br />{{ $t("eight3_2") }}
        </div>
        <div class="col-sm col-xs-5 bg-blue-4 q-ma-md">
          {{ $t("eight4_1") }}<br />{{ $t("eight4_2") }}
        </div>
      </div>

      <!--  -->

      <div class="col row text-grey-1 text-h5 desktop-only">
        <div class="col-sm col-xs-5 q-ma-md bg-blue-4">
          {{ $t("eight5_1") }}<br />{{ $t("eight5_2") }}
        </div>
        <div class="col-sm col-xs-5 q-ma-md bg-blue-4">
          {{ $t("eight6_1") }}<br />{{ $t("eight6_2") }}
        </div>
        <div class="col q-ma-md bg-blue-4">
          {{ $t("eight7_1") }}<br />{{ $t("eight7_2") }}
        </div>
        <div class="col q-ma-md bg-blue-4">
          {{ $t("eight8_1") }}<br />{{ $t("eight8_2") }}
        </div>
      </div>

      <!-- 移动端显示 -->
      <div class="col row text-grey-1 text-subtitle1 mobile-only">
        <div class="col-sm col-xs-5 q-ma-md bg-blue-4">
          {{ $t("eight5_1") }}<br />{{ $t("eight5_2") }}
        </div>
        <div class="col-sm col-xs-5 q-ma-md bg-blue-4">
          {{ $t("eight6_1") }}<br />{{ $t("eight6_2") }}
        </div>
        <div class="col q-ma-md bg-blue-4">
          {{ $t("eight7_1") }}<br />{{ $t("eight7_2") }}
        </div>
        <div class="col q-ma-md bg-blue-4">
          {{ $t("eight8_1") }}<br />{{ $t("eight8_2") }}
        </div>
      </div>
      <!--  -->
    </div>
  </div>
</template>
<script>
import FullImg from "components/business/FullImg";
import HalfImg from "components/business/HalfImg";
import TitleBar from "components/business/TitleBar";
export default {
  meta() {
    return {
      title: "全网站建设",
      meta: {
        description: { name: "description", content: "全网站建设" },
      },
    };
  },

  data() {
    return {
      fullImg1: {
        img: require("assets/business/buildweb/2-2.png"),
      },
      fullImg2: {
        img: require("assets/business/buildweb/1-1.png"),
      },
      halfImg: {
        img1: require("assets/business/buildweb/3-1.png"),
        img2: require("assets/business/buildweb/3-2.png"),
      },
      halfImg2: {
        img1: require("assets/business/buildweb/4-1.png"),
        img2: require("assets/business/buildweb/4-2.png"),
      },
      imgText: {
        img1: require("assets/business/titlebar/1.png"),
        img2: require("assets/business/titlebar/2.png"),
        img3: require("assets/business/titlebar/3.png"),
        img4: require("assets/business/titlebar/4.png"),
        img5: require("assets/business/titlebar/5.png"),
        img6: require("assets/business/titlebar/6.png"),
        img7: require("assets/business/titlebar/7.png"),
        img8: require("assets/business/titlebar/8.png"),
        text1: this.$t("text1"),
        text2: this.$t("text2"),
        text3: this.$t("text3"),
        text4: this.$t("text4"),
        text5: this.$t("text5"),
        text6: this.$t("text6"),
        text7: this.$t("text7"),
        text8: this.$t("text8"),
      },
    };
  },
  components: {
    FullImg,
    HalfImg,
    TitleBar,
  },
};
</script>
<style>
.eight div {
  text-align: center;
  padding-top: 3%;
  padding-bottom: 2%;
}
</style>
