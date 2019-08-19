import Vue from 'vue'
import Button from './button'
import Icon from './icon'

Vue.component('lgm-button', Button);
Vue.component('lgm-icon', Icon);

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    loading3: false
  },
  methods:{
    changeLoading1(){
      this.loading1 = !this.loading1
    },
    changeLoading2(){
      this.loading2 = !this.loading2
    },
    changeLoading3(){
      this.loading3 = !this.loading3
    }
  }
});