<!--新闻中心-->
<template>
  <div>
    <NewsCenter
      v-for="(news, index) in newscenters"
      :key="index"
      :news="news"
    ></NewsCenter>
  </div>
</template>
<script>
import NewsCenter from "components/news/NewsCenter";
import gql from "graphql-tag";
const newscenters = gql`
  query {
    newscenters {
      id
      img {
        url
      }
      title
      title_us
      text
      text_us
      created_at
    }
  }
`;

export default {
  meta() {
    return {
      title: "大连红松-新闻中心",
      meta: {
        description: { name: "description", content: "新闻中心" },
      },
    };
  },
  data() {
    return {};
  },
  apollo: {
    newscenters: newscenters,
  },
  components: {
    NewsCenter,
  },
};
</script>


