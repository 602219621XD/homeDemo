import Vue from 'vue'
Vue.prototype.$changeTime =changeTime;

export default function changeTime(id,max){
window.setTimeout(function () {
    if (id ==max) {
        id = 0;
      }
      this.id++;
    }, 2000);
}