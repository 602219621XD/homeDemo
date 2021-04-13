<!--首页-->
<template>
  <div>
    <!--轮播图-->
    <Slideshow :slideshows="sildeshow.img"></Slideshow>
    <SlideshowPhone :slideshowsPhone="sildeshowPhone.img"></SlideshowPhone>
    <!--分类标题-->
    <div class="text-center q-mt-md text-h4">{{ $t("oneTitle") }}</div>
    <div class="text-center q-mb-md text-text-subtitle1">
      {{ $t("oneTitleB") }}
    </div>
    <!--主要业务引导图-->
    <div class="row">
      <PictureLeft
        :leftCard="leftCard"
        class="col-md-6 col-sm-12 col-xs-12"
      ></PictureLeft>
      <PictureRight
        :rightCard="rightCard"
        class="col-md-6 col-sm-12 col-xs-12"
      ></PictureRight>
    </div>
    <!--业务引导图-->
    <div class="row">
      <Cards class="col col-md-3 col-sm-6 col-xs-12" :cards="cards1_1"></Cards>
      <Cards class="col col-md-3 col-sm-6 col-xs-12" :cards="cards1_2"></Cards>
      <Cards class="col col-md-3 col-sm-6 col-xs-12" :cards="cards1_3"></Cards>
      <Cards class="col col-md-3 col-sm-6 col-xs-12" :cards="cards1_4"></Cards>
    </div>
    <div class="row">
      <Cards :cards="cards2_1" class="col col-md-3 col-sm-6 col-xs-12"></Cards>
      <Cards :cards="cards2_2" class="col col-md-3 col-sm-6 col-xs-12"></Cards>
      <Cards :cards="cards2_3" class="col col-md-3 col-sm-6 col-xs-12"></Cards>
      <Cards :cards="cards2_4" class="col col-md-3 col-sm-6 col-xs-12"></Cards>
    </div>
    <!--展示区 -->
    <Scopephoto></Scopephoto>
    <!--分类标题-->
    <div>
      <div class="pillar">
        <div class="title">
          <div class="text-h4">{{ $t("twoTitle") }}</div>
        </div>
      </div>
      <div class="q-mb-md q-ml-lg text-text-subtitle1">
        {{ $t("twoTitleB") }}
      </div>
    </div>

    <!--新闻模块-->
    <div class="row justify-center">
      <Newscards
        v-for="(news, index) in newscenters"
        :key="index"
        :newsCard="news"
        class="col col-md-3 col-sm-6 col-xs-10"
      ></Newscards>
    </div>
  </div>
</template>
<script>
import Slideshow from "components/home/SlideShow";
import SlideshowPhone from "components/home/SlideShowPhone";
import Cards from "components/home/Card";
import PictureLeft from "components/home/PictureCardLeft";
import PictureRight from "components/home/PictureCardRight";
import Scopephoto from "components/home/ScopePhoto";
import Newscards from "components/home/NewsCards";
import gql from "graphql-tag";
const sildeshow = gql`
  query {
    sildeshow(id: 1) {
      img {
        url
      }
    }
  }
`;
const newscenters = gql`
  query {
    newscenters(limit: 4) {
      img {
        url
      }
      title
      text
      title_us
      text_us
      id
    }
  }
`;
export default {
  meta() {
    return {
      title: "大连红松科技有限公司",
      meta: {
        description: {
          name: "description",
          content:
            "SEO，整站开发，小程序开发，App制作，营销推广，人力外包，人才派遣",
        },
      },
    };
  },
  data() {
    return {
      newsCard: {},
      sildeshow: {},
      newscenters: {},
      sildeshowPhone: {},
      leftCard: {
        beforeImg: require("assets/home/prototype.jpg"),
        afterImg: require("assets/home/changeUpLeft.jpg"),
        title: this.$t("leftup"),
        themeA: this.$t("themeAl"),
        themeB: this.$t("themeBl"),
      },
      rightCard: {
        beforeImg: require("assets/home/prototype2.jpg"),
        afterImg: require("assets/home/changeUpRight.jpg"),
        title: this.$t("rightup"),
        themeA: this.$t("themeAr"),
        themeB: this.$t("themeBr"),
      },
      cards1_1: {
        img: require("assets/home/1-1.png"),
        title: this.$t("cardtitle1"),
        themeA: this.$t("cardthemeA1"),
        themeB: this.$t("cardthemeB1"),
      },
      cards1_2: {
        img: require("assets/home/2-1.png"),
        title: this.$t("cardtitle2"),
        themeA: this.$t("cardthemeA2"),
        themeB: this.$t("cardthemeB2"),
      },
      cards1_3: {
        img: require("assets/home/3-1.png"),
        title: this.$t("cardtitle3"),
        themeA: this.$t("cardthemeA3"),
        themeB: this.$t("cardthemeB3"),
      },
      cards1_4: {
        img: require("assets/home/4-1.png"),
        title: this.$t("cardtitle4"),
        themeA: this.$t("cardthemeA4"),
        themeB: this.$t("cardthemeB4"),
      },
      cards2_1: {
        img: require("assets/home/5-1.png"),
        title: this.$t("cardtitle5"),
        themeA: this.$t("cardthemeA5"),
        themeB: this.$t("cardthemeB5"),
      },
      cards2_2: {
        img: require("assets/home/6-1.png"),
        title: this.$t("cardtitle6"),
        themeA: this.$t("cardthemeA6"),
        themeB: this.$t("cardthemeB6"),
      },
      cards2_3: {
        img: require("assets/home/7-1.png"),
        title: this.$t("cardtitle7"),
        themeA: this.$t("cardthemeA7"),
        themeB: this.$t("cardthemeB7"),
      },
      cards2_4: {
        img: require("assets/home/8-1.png"),
        title: this.$t("cardtitle8"),
        themeA: this.$t("cardthemeA8"),
        themeB: this.$t("cardthemeB8"),
      },
      newsCard1: {
        img: require("assets/home/news1.jpg"),
        title: "立足新基建打造云平台，数字智能与云上",
        theme: "打造云上丶",
        body:
          "Lorem ipsum dolor smpor incididunt ut labore et dolore magna aliqua.",
      },
      newsCard2: {
        img: require("assets/home/news2.jpg"),
        title: "数字智能进去长沙智慧城市。",
        theme: "好的去长沙去长沙去长沙站/微站丶",
        body:
          "Lorem ipsum dolor smpor incididunt ut labore et dolore magna aliqua.",
      },
      newsCard3: {
        img: require("assets/home/news3.jpg"),
        title: "数字智城参加山东潍坊城乡数智产业融合发展生态共建大会",
        theme: "好的手机站/微站丶",
        body:
          "Lorem ipsum dolor smpor incididunt ut labore et dolore magna aliqua.",
      },
      newsCard4: {
        img: require("assets/home/news4.jpg"),
        title: "手机站.微网站",
        theme: "好的手机站/微站丶",
        body:
          "Lorem ipsum dolor smpor incididunt ut labore et dolore magna aliqua.",
      },
    };
  },
  apollo: {
    sildeshow: sildeshow,
    newscenters: newscenters,
    sildeshowPhone: {
      query: gql`
        query {
          sildeshow(id: 2) {
            img {
              url
            }
          }
        }
      `,
      update({ sildeshow }) {
        return sildeshow;
      },
    },
  },

  components: {
    SlideshowPhone,
    Slideshow,
    Cards,
    PictureLeft,
    PictureRight,
    Scopephoto,
    Newscards,
  },
};
</script>
<style scoped>
.pillar {
  background-color: green;
  position: relative;
  height: 40px;
  width: 10px;
  margin-top: 30px;
  margin-left: 20px;
}
.title {
  position: absolute;
  left: 20px;
  width: 300px;
}
</style>
