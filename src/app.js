import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import GroupButton from './button-group';

Vue.component('lgm-button', Button);
Vue.component('lgm-icon', Icon);
Vue.component('lgm-button-group', GroupButton);

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    loading3: false
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
    }
  }
});

// import chai from 'chai';
// import spies from 'chai-spies';
// chai.use(spies);
// const expect = chai.expect;
// // 单元测试
// {
//   // 测试按钮含有 icon
//   let Constructor = Vue.extend(Button);
//   let vm = new Constructor({
//     propsData: {
//       icon: 'i-setting'
//     }
//   });
//   vm.$mount();
//   let useElement = vm.$el.querySelector('use');
//   let href = useElement.getAttribute('xlink:href');
//   expect(href).to.eq('#i-setting');
//   vm.$el.remove();
//   vm.$destroy()
// }
// {
//   let constructor = Vue.extend(Button);
//   let vm = new constructor({
//     propsData: {
//       icon: 'i-setting',
//       loading: true
//     }
//   });
//   vm.$mount();
//   let useElement = vm.$el.querySelector('use');
//   let href  = useElement.getAttribute('xlink:href');
//   expect(href).to.eq('#i-loading');
//   vm.$el.remove();
//   vm.$destroy()
// }
// {
//   const div = document.createElement('div');
//   document.body.appendChild(div);
//   let constructor = Vue.extend(Button);
//   let vm = new constructor({
//     propsData: {
//       icon: 'i-setting'
//     }
//   });
//   vm.$mount(div);
//   let svg = vm.$el.querySelector('svg');
//   let {order} = window.getComputedStyle(svg);
//   expect(order).to.eq('0');
//   vm.$el.remove();
//   vm.$destroy()
// }
// {
//   const div = document.createElement('div');
//   document.body.appendChild(div);
//   let constructor = Vue.extend(Button);
//   let vm = new constructor({
//     propsData: {
//       icon: 'i-setting',
//       iconPosition: 'right'
//     }
//   });
//   vm.$mount(div);
//   let svg = vm.$el.querySelector('svg');
//   let {order} = window.getComputedStyle(svg);
//   expect(order).to.eq('1');
//   vm.$el.remove();
//   vm.$destroy()
// }
// {
//   let constructor = Vue.extend(Button);
//   let vm = new constructor({
//     propsData: {
//       icon: 'i-setting'
//     }
//   });
//   vm.$mount();
//   let spy = chai.spy(function () {});
//   vm.$on('click',spy);
//   vm.$el.click();
//   expect(spy).to.have.been.called();
//   vm.$el.remove();
//   vm.$destroy()
// }
