<!--详细新闻-->
<template>
  <div>
    <div class="row q-mt-xl desktop-only">
      <div class="col-2"></div>
      <div class="col-8">
        <div v-if="language === 'zh-cn'" class="q-pl-md text-h5 q-pt-lg">
          {{ newscenter.title }}
          <q-icon
            id="mouse"
            name="logout"
            @click="back(`${newscenter.id}`)"
            @mouseover="changeMask(true)"
            @mouseout="changeMask(false)"
          />
        </div>

        <div v-else class="q-pl-md text-h5 q-pt-lg">
          {{ newscenter.title_us }}
          <q-icon
            id="mouse"
            name="logout"
            @click="back(`${newscenter.id}`)"
            @mouseover="changeMask(true)"
            @mouseout="changeMask(false)"
          />
        </div>

        <div
          v-if="language === 'zh-cn'"
          id="t"
          class="text-subtitle1 q-pl-md q-mt-lg"
        >
          <p v-html="newscenter.detail"></p>
        </div>

        <div v-else id="t" class="text-subtitle1 q-pl-md q-mt-lg">
          <p v-html="newscenter.detail_us"></p>
        </div>
      </div>
      <div class="col-2"></div>
    </div>

    <div class="q-mt-md mobile-only">
      <div class="newsimg">
        <div v-if="language === 'zh-cn'" class="q-pl-md text-h5 q-pt-lg">
          {{ newscenter.title }}
          <q-icon
            id="mouse"
            name="logout"
            @click="back(`${newscenter.id}`)"
            @mouseover="changeMask(true)"
            @mouseout="changeMask(false)"
          />
        </div>

        <div v-else class="q-pl-md text-h5 q-pt-lg">
          {{ newscenter.title_us }}
          <q-icon
            id="mouse"
            name="logout"
            @click="back(`${newscenter.id}`)"
            @mouseover="changeMask(true)"
            @mouseout="changeMask(false)"
          />
        </div>

        <div
          v-if="language === 'zh-cn'"
          id="t"
          class="text-subtitle1 q-pl-md q-mt-lg"
        >
          <p v-html="newscenter.detail"></p>
        </div>

        <div v-else id="t" class="text-subtitle1 q-pl-md q-mt-lg">
          <p v-html="newscenter.detail_us"></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import gql from "graphql-tag";
export default {
  meta() {
    return {
      title: "新闻详情",
      meta: {
        description: { name: "description", content: "啊实打实的" },
        keywords: { name: "keywords", content: "啊实打实的" },
      },
    };
  },
  data() {
    return {
      language: "",
      // description: "",
      newscenter: {},
    };
  },
  mounted() {
    this.language = this.$i18n.locale;
  },
  apollo: {
    newscenter: {
      query: gql`
        query($id: ID!) {
          newscenter(id: $id) {
            id
            title
            title_us
            detail
            detail_us
          }
        }
      `,
      variables() {
        // 在这里使用 vue 响应式属性
        return {
          id: this.$route.params.id,
        };
      },
      update({ newscenter }) {
        let datailtemp = newscenter.detail + "";
        let datailtemp_us = newscenter.detail_us + "";
        let prefix = datailtemp.replace(
          /!.+\(/g,
          "<img src=http://182.92.120.91:1337"
        );
        let prefix_us = datailtemp_us.replace(
          /!.+\(/g,
          "<img src=http://182.92.120.91:1337"
        );
        let suffix = prefix.replace(/\)/g, " />");
        let suffix_us = prefix_us.replace(/\)/g, " />");
        let line = suffix.replace(/\n/g, "<br/>");
        let line_us = suffix_us.replace(/\n/g, "<br/>");

        newscenter.detail = line;
        newscenter.detail_us = line_us;
        return newscenter;
      },
    },
  },
  methods: {
    back(id) {
      let select = id;
      localStorage.setItem("id", select);
      this.$router.push({
        path: "/news",
      });
    },
    changeMask(flag) {
      if (flag) {
        document.getElementById("mouse").style.cursor = "pointer";
      } else {
        document.getElementById("mouse").style.cursor = "wait";
      }
    },
  },
};
</script>
<style >
#t {
  height: 150%;
}
.newsimg img {
  width: 350px;
}
</style>