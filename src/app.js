import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import GroupButton from './button-group';
import Input from './input';
import Row from './row';
import Col from './col';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Sider from './sider';
import Toast from './toast';

Vue.component(Button.name, Button);
Vue.component(Icon.name, Icon);
Vue.component(GroupButton.name, GroupButton);
Vue.component(Input.name, Input);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Layout.name, Layout);
Vue.component(Header.name, Header);
Vue.component(Content.name, Content);
Vue.component(Footer.name, Footer);
Vue.component(Sider.name, Sider);
Vue.use(Toast);

// console.log(Toast);

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
    },
    showToast(){
      Toast.use({message:' 这是一个不会自动关闭的消息这是一个不会自动关闭的消息这是一个不会自动关闭的消息这是一个不会自动关闭的消息这是一个不会自动关闭的消息这是一个不会自动关闭的消息这是一个不会自动关闭的消息这是一个不会自动关闭的消息',
         showClose: true,
        duration: 0,
        type: 'error',
        position: 'right',
        onClose: function (vm) {
          console.log(vm);
          console.log(111)
        }})
    },
    showToast2(){
      this.$toast({ type: 'warning', showClose: true, message: 'xxx', position: 'left',})
    }
  }
});
