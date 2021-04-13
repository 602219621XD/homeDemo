<!--微信运用-->
<template>
  <div>
    <!--图片标题-->
    <TitleBar :imgText="imgText"></TitleBar>
    <!--全屏图片-->
    <FullImg :fullImg="fullImg1"></FullImg>
    <FullImg :fullImg="fullImg2"></FullImg>
    <FullImg :fullImg="fullImg3"></FullImg>
  </div>
</template>
<script>
import FullImg from "components/business/FullImg";
import TitleBar from "components/business/TitleBar";

export default {
  meta() {
    return {
      title: "微信运用",
      meta: {
        description: { name: "description", content: "微信运用" },
      },
    };
  },
  data() {
    return {
      imgText: {
        img3: require("assets/business/titlebar/1.png"),
        img4: require("assets/business/titlebar/2.png"),
        img5: require("assets/business/titlebar/3.png"),
        img6: require("assets/business/titlebar/4.png"),
        text3: this.$t("text3"),
        text4: this.$t("text7"),
        text5: this.$t("text5"),
        text6: this.$t("text22"),
      },
      fullImg1: {
        img: require("assets/business/wechat/311.png"),
      },
      fullImg2: {
        img: require("assets/business/wechat/312.png"),
      },
      fullImg3: {
        img: require("assets/business/wechat/313.png"),
      },
    };
  },
  components: {
    FullImg,
    TitleBar,
  },
};
</script>
