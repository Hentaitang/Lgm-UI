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
  describe('Button 样式', () => {
    let Constructor = Vue.extend(Button);
    let vm;
    afterEach(() => {
      vm.$destroy()
    });
    it('可设置icon.', () => {
      vm = new Constructor({
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
      vm = new Constructor({
        propsData: {
          icon: 'i-setting',
          loading: true
        }
      }).$mount();
      const useElement = vm.$el.querySelector('use');
      const href = useElement.getAttribute('xlink:href');
      expect(href).to.be.eq('#i-loading');
    });
    it('icon默认的order是 0', () => {
      const div = document.createElement('div');
      document.body.appendChild(div);
      vm = new Constructor({
        propsData: {
          icon: 'i-setting'
        }
      }).$mount(div);
      const svg = vm.$el.querySelector('svg');
      const {order} = window.getComputedStyle(svg);
      expect(order).to.be.eq('0');
      vm.$el.remove();
    });
    it('设置position可以改变order', () => {
      const div = document.createElement('div');
      document.body.appendChild(div);
      vm = new Constructor({
        propsData: {
          icon: 'i-setting',
          iconPosition: 'right'
        }
      }).$mount(div);
      const svg = vm.$el.querySelector('svg');
      const {order} = window.getComputedStyle(svg);
      expect(order).to.be.eq('1');
      vm.$el.remove();
    });
    it('可设置 disabled 属性', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount();
      expect(vm.$el.getAttribute('disabled')).to.be.eq('disabled')
    });
    it('可设置circle属性', () => {
      vm = new Constructor({
        propsData: {
          circle: true,
          icon: 'i-setting'
        }
      }).$mount();
      expect(vm.$el.getAttribute('class')).to.be.include('circle')
    });
    it('可设置round属性', () => {
      vm = new Constructor({
        propsData: {
          round: true
        }
      }).$mount();
      expect(vm.$el.getAttribute('class')).to.be.include('round')
    });
    it('可设置type属性', () => {
      vm = new Constructor({
        propsData: {
          type: 'danger'
        }
      }).$mount();
      expect(vm.$el.getAttribute('class')).to.include('lgm-button-danger')
    })
  });
  describe('Button 事件', () => {
    it('点击button触发click事件', () => {
      const Constructor = Vue.extend(Button);
      const vm = new Constructor({
        propsData: {
          icon: 'i-setting'
        }
      }).$mount();
      const callback = sinon.fake();
      vm.$on('click', callback);
      vm.$el.click();
      vm.$destroy()
    })
  })
});
