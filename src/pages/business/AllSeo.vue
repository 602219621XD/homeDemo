<!--SEO-->
<template>
  <div>
    <!--图片标题-->
    <TitleBar :imgText="imgText"></TitleBar>
    <!--全屏图片-->
    <FullImg :fullImg="fullImg1"></FullImg>
    <FullImg :fullImg="fullImg2"></FullImg>
  </div>
</template>
<script>
import FullImg from "components/business/FullImg";
import TitleBar from "components/business/TitleBar";

export default {
  meta() {
    return {
      title: "全站SEO",
      meta: {
        description: { name: "description", content: "全站SEO" },
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
        text3: this.$t("text1"),
        text4: this.$t("text22"),
        text5: this.$t("text4"),
        text6: this.$t("text8"),
      },
      fullImg1: {
        img: require("assets/business/seo/411.png"),
      },
      fullImg2: {
        img: require("assets/business/seo/412.png"),
      },
    };
  },
  components: {
    FullImg,
    TitleBar,
  },
};
</script>
