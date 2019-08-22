import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import GroupButton from './button-group';
import Input from './input';

Vue.component(Button.name, Button);
Vue.component(Icon.name, Icon);
Vue.component(GroupButton.name, GroupButton);
Vue.component(Input.name, Input);

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    loading3: false,
    str: 'sssssssss'
  },
  methods:{
    changeLoading1(){
      this.loading1 = !this.loading1;
    },
    changeLoading2(){
      this.loading2 = !this.loading2;
    },
    changeLoading3(){
      this.loading3 = !this.loading3;
    },
    ddd(){
      console.log(1)
    },
    change(v){
      console.log(v)
    },
    focus(v){
      console.log(v)
    },
    blur(v){
      console.log(v)
    }
  }
});
