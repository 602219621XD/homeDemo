<template>
  <q-layout view="hHh Lpr fFf" class="#ffffff no-scroll">
    <q-header elevated>
      <q-toolbar class="text-white desktop-only" style="background: #ffffff">
        <q-avatar class="q-ma-md">
          <img src="~assets/home/logo.png" />
        </q-avatar>
        <div class="q-ml-md text-h5 text-grey-10">
          {{ $t("logo") }}
          <div class="text-subtitle1">{{ $t("logoB") }}</div>
        </div>
        <!-- <div class="q-ml-xs q-pt-lg text-grey-10 text-weight-medium">
          {{ $t("logoB") }}
        </div> -->
        <q-space />
        <Menu mode="horizontal" :theme="theme1" :active-name="getActive()">
          <MenuItem name="1" to="/home" class="q-mx-xl">{{
            $t("home")
          }}</MenuItem>
          <Submenu name="2" class="q-mx-xl">
            <template slot="title">{{ $t("business") }}</template>
            <MenuItem name="2_1" to="/build">{{ $t("business1") }}</MenuItem>
            <MenuItem name="2_2" to="/mini">{{ $t("business2") }}</MenuItem>
            <MenuItem name="2_3" to="/wechat">{{ $t("business3") }}</MenuItem>
            <MenuItem name="2_4" to="/allseo">{{ $t("business4") }}</MenuItem>
            <MenuItem name="2_5" to="/spread">{{ $t("business5") }}</MenuItem>
            <MenuItem name="2_6" to="/aiot">{{ $t("business6") }}</MenuItem>
          </Submenu>
          <MenuItem name="3" class="q-mx-xl" to="/news">{{
            $t("news")
          }}</MenuItem>
          <MenuItem name="4" class="q-mx-xl" to="/aboult"
            >{{ $t("about") }}
          </MenuItem>
        </Menu>

        <q-select
          on-right
          v-model="lang"
          :options="langOptions"
          label="Language"
          dense
          borderless
          emit-value
          map-options
          options-dense
          style="min-width: 100px"
          class="q-ml-xl"
        />
      </q-toolbar>
      <q-toolbar class="bg-black mobile-only">
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <q-toolbar-title>{{ $t("logo") }}</q-toolbar-title>
        <q-select
          v-model="lang"
          :options="langOptions"
          label="Language"
          dark
          dense
          borderless
          emit-value
          map-options
          options-dense
        />
      </q-toolbar>
      <q-drawer
        v-model="drawer"
        :width="150"
        :breakpoint="500"
        overlay
        bordered
        content-class="bg-grey-10"
      >
        <q-scroll-area class="fit">
          <q-list>
            <template v-for="(menuItem, index) in menuList">
              <q-item :key="index" clickable v-ripple>
                <q-item-section
                  avatar
                  class="text-center text-subtitle2"
                  @click="into(menuItem.adrass, index)"
                >
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
            </template>
          </q-list>
        </q-scroll-area>
      </q-drawer>
    </q-header>
    <q-page-container v-if="update">
      <router-view />
    </q-page-container>
    <q-banner class="bg-grey-10 text-white q-mt-xl desktop-only">
      <div class="row items-center">
        <div class="col-9">
          <span class="q-ml-xl">联系方式</span>
          <span class="q-ml-md">人才招聘</span>
          <span class="q-ml-md">合作伙伴</span>
          <span class="q-ml-md">|</span>
          <span class="q-ml-md">隐私权政策</span>
          <span class="q-ml-md">使用条款</span>
        </div>
        <div class="col-2">
          <img class="qr" src="~assets/qr-img/qrcode.jpg" />
        </div>
      </div>
      <q-separator dark inset />
      <div class="row q-mt-sm">
        <div class="col-5 q-ml-xl">
          Coperight&nbsp;©&nbsp;2020-2021&nbsp;大连红松&nbsp;版权所有
        </div>
        <a class="text-white" target="_blank" href="http://beian.miit.gov.cn/"
          >辽ICP备2021002965号</a
        >
      </div>
    </q-banner>
    <q-banner class="bg-grey-10 text-white q-mt-xl mobile-only">
      <div class="text-center">
        <img class="qr-tele" src="~assets/qr-img/qrcode.jpg" />
      </div>
      <q-separator dark inset />
      <div class="text-center q-my-md">
        Copyright&nbsp;©&nbsp;2020-2021&nbsp;大连红松&nbsp;版权所有
      </div>
    </q-banner>
  </q-layout>
</template>
<script>
export default {
  data() {
    return {
      theme1: "light",
      drawer: false,
      hidFlag: -1,
      menuList: this.getdata(),
      lang: this.$i18n.locale,
      update: true,
      langOptions: [
        { value: "en-us", label: "English" },
        { value: "zh-cn", label: "简体中文" },
      ],
    };
  },
  methods: {
    getActive() {
      if (this.$route.path === "/" || this.$route.path === "/home") {
        return "1";
      }
      if (this.$route.path === "/build") {
        return "2_1";
      }
      if (this.$route.path === "/mini") {
        return "2_2";
      }
      if (this.$route.path === "/wechat") {
        return "2_3";
      }
      if (this.$route.path === "/allseo") {
        return "2_4";
      }
      if (this.$route.path === "/spread") {
        return "2_5";
      }
      if (this.$route.path === "/aiot") {
        return "2_6";
      }
      if (this.$route.path === "/news" || this.$route.path === "/details/") {
        return "3";
      }
      if (this.$route.path === "/aboult") {
        return "4";
      }
    },
    into(adrass, index) {
      if (this.hidFlag == index) {
        this.drawer = false;
      }
      this.$router.push({
        path: adrass,
      });
      this.hidFlag = index;
    },
    getdata() {
      return [
        {
          label: this.$t("home"),
          adrass: "/home",
        },
        {
          label: this.$t("business1"),
          adrass: "/build",
        },
        {
          label: this.$t("business2"),
          adrass: "/mini",
        },
        {
          label: this.$t("business3"),
          adrass: "/wechat",
        },
        {
          label: this.$t("business4"),
          adrass: "/allseo",
        },
        {
          label: this.$t("business5"),
          adrass: "/spread",
        },
        {
          label: this.$t("business6"),
          adrass: "/aiot",
        },
        {
          label: this.$t("news"),
          adrass: "/news",
        },
        {
          label: this.$t("about"),
          adrass: "/aboult",
        },
      ];
    },
  },
  watch: {
    lang(lang) {
      this.$i18n.locale = lang;
      this.menuList = [];
      this.update = false;
      this.$nextTick(() => {
        this.update = true;
        this.menuList = this.getdata();
      });
    },
  },
};
</script>
<style lang="sass" scoped>
.menu-list .q-item
  border-radius: 0 32px 32px 0
</style>
<style scoped>
.dropdown:hover > .dropdown-menu {
  display: block;
}
.dropdown > .dropdown-toggle:active {
  pointer-events: none;
}
</style>
<style >
.qr {
  width: 70px;
  height: 70px;
}
.qr-tele {
  width: 100px;
  height: 100px;
}
</style>


