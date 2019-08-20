const expect = chai.expect;
import Vue from 'vue';
import Button from '../src/button';

// 关闭Vue生产提示
Vue.config.productionTip = false;
// 关闭Vue自检工具
Vue.config.devtools = false;

describe('Button', () => {
  it('存在.', () => {
    expect(Button).to.be.ok
  });
  it('可设置icon.', () => {
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
      propsData: {
        icon: 'i-setting'
      }
    }).$mount();
    const useElement = vm.$el.querySelector('use');
    const href = useElement.getAttribute('xlink:href');
    expect(href).to.be.eq('#i-setting')
  });
  it('可设置loading.', () => {
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
      propsData: {
        icon: 'i-setting',
        loading: true
      }
    }).$mount();
    const useElement = vm.$el.querySelector('use');
    const href = useElement.getAttribute('xlink:href');
    expect(href).to.be.eq('#i-loading');
    vm.$destroy()
  });
  it('icon默认的order是 0', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
      propsData: {
        icon: 'i-setting'
      }
    }).$mount(div);
    const svg = vm.$el.querySelector('svg');
    const {order} = window.getComputedStyle(svg);
    expect(order).to.be.eq('0');
    vm.$el.remove();
    vm.$destroy()
  });
  it('设置position可以改变order', ()=>{
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
      propsData: {
        icon: 'i-setting',
        iconPosition: 'right'
      }
    }).$mount(div);
    const svg = vm.$el.querySelector('svg');
    const {order} = window.getComputedStyle(svg);
    expect(order).to.be.eq('1');
    vm.$el.remove();
    vm.$destroy()
  })
});
