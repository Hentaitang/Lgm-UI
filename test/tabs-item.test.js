import Vue from 'vue';
import TabsItem from '../src/tabs/tabsItem';

const expect = chai.expect;

Vue.config.devtools = false;
Vue.config.productionTip = false;

describe('tabs-head', () => {
  it('存在', () => {
    expect(TabsItem).to.be.exist
  });
  describe('props', () => {
    const Constructor = Vue.extend(TabsItem);
    let vm;
    afterEach(() => {
      vm.$destroy()
    });
    it('接收 label', () => {
      vm = new Constructor({
        propsData: {
          label: 'abc'
        }
      }).$mount();
      expect(vm.$el.getAttribute('data-label')).to.eq('abc');
    });
    it('接收 icon', () => {
      vm = new Constructor({
        propsData: {
          icon: 'i-setting'
        }
      }).$mount();
      const svg = vm.$el.querySelector('svg');
      const use = svg.querySelector('use');
      const href = use.getAttribute('xlink:href');
      expect(href).to.eq('#i-setting')
    });
    it('接收 disabled', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount();
      const callback = sinon.fake();
      vm.$on('click', callback);
      vm.$el.click();
      expect(vm.$el.classList.contains('disabled')).to.eq(true);
      expect(callback).to.not.been.called;
    })
  })
});