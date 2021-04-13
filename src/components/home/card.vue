<template>
  <q-card
    flat
    bordered
    class="my-card"
    @mouseenter="isShow = true"
    @mouseleave="isShow = false"
    style="position: relative"
  >
    <q-card-section>
      <div class="row q-mt-lg text-center">
        <div class="col-3" v-if="isShow == false">
          <q-img :src="cards.img" />
        </div>

        <div class="up-img col-11" v-if="isShow == true">
          <q-img :src="cards.img" />
        </div>

        <div class="col text-h6 q-pt-md text-center" v-show="isShow == false">
          {{ cards.title }}
          <div class="col text-caption text-center">
            {{ cards.themeA }}<br />{{ cards.themeB }}
          </div>
        </div>
      </div>
    </q-card-section>
    <div
      class="up-card"
      v-show="isShow == true"
      style="
        position: absolute;
        left: 0;
        top: 0;
        background: rgba(139, 0, 0, 0.8);
      "
    >
      <transition
        name="custom-classes-transition"
        enter-active-class="animated tada"
        2
        leave-active-class="animated bounceOutRight"
      >
        <div
          v-show="isShow == true"
          class="text-center q-mt-xl text-h5 text-grey-1"
        >
          {{ cards.title }}
        </div>
      </transition>

      <!-- <transition name="fade">
        <div
          v-show="isShow == true"
          class="text-center q-mt-xs text-h4 text-grey-1"
        >
          →
        </div>
      </transition> -->
    </div>
  </q-card>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  props: {
    cards: {},
  },
};
</script>
<style lang="sass" scoped>
.my-card
  height: 180px
  margin: 0
.up-card
  height: 180px
  width: 100%
  margin: 0
</style>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
