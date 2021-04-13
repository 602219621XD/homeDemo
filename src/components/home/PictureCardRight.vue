<template>
  <!-- <router-link to="/mini"> -->
  <div>
    <div
      class="items-start desktop-only"
      style="position: relative"
      @mouseenter="isEnter()"
      @mouseleave="isLeave()"
    >
      <q-card class="my-card">
        <q-img v-if="isShow == false" :src="rightCard.beforeImg"> </q-img>
        <q-img v-else :src="rightCard.afterImg"> </q-img>
      </q-card>
      <transition name="fade">
        <div
          v-show="isShow == false"
          style="position: absolute; left: 50px; top: 50px"
        >
          <div class="text-center text-h6 text-grey-10">
            {{ rightCard.title }}
          </div>
          <div class="text-center q-mt-md text-subtitle1 text-grey-10">
            {{ rightCard.themeA }}<br />
            {{ rightCard.themeB }}
          </div>
        </div>
      </transition>

      <div
        class="my-card-up"
        v-show="isShow == true"
        style="
          position: absolute;
          left: 0;
          top: 0;
          background: rgba(0, 153, 255, 0.8);
        "
      >
        <transition name="bounce">
          <div
            v-show="isShow == true"
            class="text-center q-pt-xl text-h4 text-grey-1"
          >
            {{ rightCard.title }}
          </div>
        </transition>
        <!-- <transition name="fade">
        < <div
          v-show="isShow == true"
          class="text-center q-mt-xl text-h4 text-grey-1"
        >
          →
        </div>
      </transition> -->
      </div>
    </div>
    <div class="mobile-only" style="position: relative">
      <div>
        <q-img :src="rightCard.beforeImg" :ratio="16 / 9"> </q-img>
        <div style="position: absolute; left: 20px; top: 40px">
          <div class="text-center text-h6 text-grey-10">
            {{ rightCard.title }}
          </div>
          <div class="text-center q-mt-md text-subtitle1 text-grey-10">
            {{ rightCard.themeA }}<br />
            {{ rightCard.themeB }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
      print: "~assets/01.jpg",
    };
  },
  methods: {
    isEnter() {
      this.isShow = true;
    },
    isLeave() {
      this.isShow = false;
    },
  },
  props: {
    rightCard: {
      type: Object,
    },
  },
};
</script>
<style lang="sass" scoped>
.my-card-up
  width: 100%
  height: 100%
  margin: 0
.my-card
  height: 250px
</style>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
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
