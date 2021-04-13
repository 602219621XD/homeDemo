<!--新闻中心-->
<template>
  <router-link :to="{ name: 'details', params: { id: news.id } }">
    <div class="row out q-mt-xl desktop-only">
      <div class="col-2"></div>
      <q-card :id="news.id" class="col-8 row">
        <div class="col-3 q-pa-sm">
          <q-img class="imgout" :src="`${process}${news.img[0].url}`" />
        </div>
        <div class="col-9 column">
          <div
            v-if="language === 'zh-cn'"
            class="col-5 q-pl-md text-h5 q-pt-lg"
          >
            {{ news.title }}
          </div>

          <div v-else class="col-5 q-pl-md text-h5 q-pt-lg">
            {{ news.title_us }}
          </div>

          <div v-if="language === 'zh-cn'" class="col-5 text-subtitle1 q-pl-md">
            {{ news.text }}
          </div>

          <div v-else class="col-5 text-subtitle1 q-pl-md">
            {{ news.text_us }}
          </div>

          <div class="col-2 q-pl-md">{{ news.created_at }}</div>
        </div>
      </q-card>
      <div class="col-2"></div>
    </div>

    <div class="q-mt-sm mobile-only">
      <q-card :id="news.id" class="row">
        <div class="col-5 q-pa-sm">
          <q-img class="imgout" :src="`${process}${news.img[0].url}`" />
        </div>
        <div class="col-7 column">
          <div
            v-if="language === 'zh-cn'"
            class="col-5 q-pl-md text-h5 q-pt-lg"
          >
            {{ news.title }}
          </div>

          <div v-else class="col-5 q-pl-md text-h5 q-pt-lg">
            {{ news.title_us }}
          </div>

          <div v-if="language === 'zh-cn'" class="col-7 text-subtitle1 q-pl-md">
            {{ news.text }}
          </div>

          <div v-else class="col-7 text-subtitle1 q-pl-md">
            {{ news.text_us }}
          </div>
        </div>
      </q-card>
    </div>
  </router-link>
</template>
<script>
export default {
  data() {
    return {
      language: "",
      process: process.env.API_HOST,
    };
  },
  props: {
    news: {
      type: Object,
    },
  },
  methods: {
    getlocal() {
      let select = localStorage.getItem("id");
      let elm = document.getElementById(select);
      if (select) {
        elm.scrollIntoView(true);
      }
    },
  },
  created() {
    this.$nextTick(() => {
      this.getlocal();
    });
  },
  mounted() {
    this.language = this.$i18n.locale;
    this.$nextTick(function () {
      window.addEventListener("scroll", this.handleScroll);
    });
  },
  destroyed() {
    localStorage.setItem("id", "");
  },
};
</script>
<style >
.out {
  height: 200px;
}
.imgout {
  height: 180px;
}
a:visited {
  color: rgb(2, 2, 20);
}
</style>

