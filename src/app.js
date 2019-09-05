import Vue from 'vue';
import Button from './button/button';
import Icon from './icon/icon';
import GroupButton from './button/button-group';
import Input from './input/input';
import Row from './grid/row';
import Col from './grid/col';
import Layout from './layout/layout';
import Header from './layout/header';
import Content from './layout/content';
import Footer from './layout/footer';
import Sider from './layout/sider';
import Toast from './toast/toast';
import Tabs from './tabs/tabs';
import TabsHead from './tabs/tabsHead';
import TabsItem from './tabs/tabsItem';
import TabsBody from './tabs/tabsBody';
import TabsPane from './tabs/tabsPane';
import Popover from './popover/popover';
import Collapse from './collapse/collapse';
import CollapseItem from './collapse/collapseItem';
import Sticky from './sticky/sticky';
import Dialog from './dialog/dialog';

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
Vue.component(Tabs.name, Tabs);
Vue.component(TabsHead.name, TabsHead);
Vue.component(TabsItem.name, TabsItem);
Vue.component(TabsBody.name, TabsBody);
Vue.component(TabsPane.name, TabsPane);
Vue.component(Popover.name, Popover);
Vue.component(Collapse.name, Collapse);
Vue.component(CollapseItem.name, CollapseItem);
Vue.component(Sticky.name, Sticky);
Vue.component(Dialog.name, Dialog);
Vue.use(Toast);

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    loading3: false,
    str: 'left',
    select: 'middle',
    position: 'left',
    show: true,
    selectItems: ['3', '4'],
    dialogVisible: true
  },
  watch: {
    select(n){
      console.log(n)
    },
    selectItems(n){
      console.log(n)
    }
  },
  methods:{
    changePosition(){
      this.position = this.str
    },
    changeLoading1(){
      this.loading1 = !this.loading1;
    },
    changeLoading2(){
      this.loading2 = !this.loading2;
    },
    changeLoading3(){
      this.loading3 = !this.loading3;
    },
    closeCallback(){
      console.log(1)
    },
    open(){
      console.log('open')
    },
    ddd(close){
      console.log(1);
      close()
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
    changeShow(){
      this.show = !this.show
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
      this.$toast({ message: '123'})
    }
  }
});
