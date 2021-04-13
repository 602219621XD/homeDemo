
<template>
  <router-link :to="{ name: 'details', params: { id: newsCard.id } }">
    <div class="q-ma-lg desktop-only">
      <q-card class="my-card">
        <img class="q-pa-sm" :src="`${process}${newsCard.img[0].url}`" />

        <q-card-section>
          <div v-if="language === 'zh-cn'" class="text-h6 text-green">
            {{ newsCard.title }}
          </div>
          <div v-else class="text-h6 text-green">{{ newsCard.title_us }}</div>
        </q-card-section>

        <q-card-section v-if="language === 'zh-cn'" class="q-pt-none">
          <div>{{ newsCard.text }}</div>
        </q-card-section>

        <q-card-section v-else class="q-pt-none">
          <div>{{ newsCard.text_us }}</div>
        </q-card-section>
      </q-card>
    </div>

    <div class="q-ma-xs mobile-only">
      <q-card class="my-card">
        <img class="q-pa-sm" :src="`${process}${newsCard.img[0].url}`" />

        <q-card-section>
          <div v-if="language === 'zh-cn'" class="text-h6 text-green">
            {{ newsCard.title }}
          </div>
          <div v-else class="text-h6 text-green">{{ newsCard.title_us }}</div>
        </q-card-section>

        <q-card-section v-if="language === 'zh-cn'" class="q-pt-none">
          <div>{{ newsCard.text }}</div>
        </q-card-section>

        <q-card-section v-else class="q-pt-none">
          <div>{{ newsCard.text_us }}</div>
        </q-card-section>
      </q-card>
    </div>
  </router-link>
</template>
<script>
export default {
  data() {
    return {
      process: process.env.API_HOST,
      language: "",
    };
  },
  props: {
    newsCard: {},
  },
  mounted() {
    this.language = this.$i18n.locale;
  },
};
</script>
<style lang="sass" scoped>
.my-card
  margin: 0
</style>
<style scoped>
img {
  height: 290px;
}
</style>
