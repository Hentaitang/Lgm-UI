const expect = chai.expect;
import Vue from 'vue';
import Toast from '../src/toast';

Vue.config.devtools = false;
Vue.config.productionTip = false;

describe('toast', () => {
  it('存在', () => {
    expect(Toast).to.be.exist
  });

  describe('props', () => {
    const Constructor = Vue.extend(Toast);
    let vm;
    afterEach(() => {
      vm.$destroy()
    });
    it('接收 type', () => {
      vm = new Constructor({
        propsData: {
          type: 'success'
        }
      }).$mount();
      const svg = vm.$el.querySelector('svg');
      expect(svg.classList.contains('success')).to.be.eq(true)
    });
    it('接收 showClose', () => {
      vm = new Constructor({
        propsData: {
          showClose: true
        }
      }).$mount();
      const svgs = vm.$el.querySelectorAll('svg');
      expect(svgs.length).to.be.eq(2)
    });
    it('接收 noPrefix', () => {
      vm = new Constructor({
        propsData: {
          noPrefix: true
        }
      }).$mount();
      const svgs = vm.$el.querySelectorAll('svg');
      expect(svgs.length).to.be.eq(0)
    });
    it('接收 icon', () => {
      vm = new Constructor({
        propsData: {
          icon: 'i-setting'
        }
      }).$mount();
      const svg = vm.$el.querySelector('svg');
      const href = svg.querySelector('use');
      const use = href.getAttribute('xlink:href');
      expect(use).to.be.eq('#i-setting')
    });
    it('接收 message', (done) => {
      vm = new Constructor();
      vm.$slots.default = ['测试用例，看下能不能收到'];
      vm.$mount();
      setTimeout(() => {
        const message = vm.$el.querySelector('.message');
        expect(message.innerText).to.be.eq('测试用例，看下能不能收到');
        done()
      })
    });
    it('接收 dangerouslyUseHTMLString', (done) => {
      vm = new Constructor({
        propsData: {
          dangerouslyUseHTMLString: true
        }
      });
      vm.$slots.default = ['<strong id="test">测试用例，看下能不能收到</strong>'];
      vm.$mount();
      setTimeout(() => {
        const test = vm.$el.querySelector('#test');
        expect(test).to.be.exist;
        done()
      })
    });
    it('接收 duration', (done) => {
      vm = new Constructor({
        propsData: {
          duration: 1000
        }
      }).$mount();
      document.body.appendChild(vm.$el);
      setTimeout(() => {
        const toast = document.body.contains(vm.$el);
        expect(toast).to.be.eq(false);
        vm.$el.remove();
        vm.$destroy();
        done()
      }, 1500)
    });
    it('接收 offset', (done) => {
      vm = new Constructor({
        propsData: {
          offset: 100
        }
      }).$mount();
      document.body.appendChild(vm.$el);
      setTimeout(() => {
        let top = getComputedStyle(vm.$el).top;
        expect(top).to.be.eq('100px');
        vm.$el.remove();
        vm.$destroy();
        done()
      })
    });
    it('接收 position', () => {
      vm = new Constructor({
        propsData: {
          position: 'left'
        }
      }).$mount();
      const position = vm.$el.classList.contains('left');
      expect(position).to.be.eq(true)
    });
    describe('event', () => {
      it('接收 onClose 事件', (done)=>{
        const Constructor = Vue.extend(Toast);
        const callback = sinon.fake();
        const vm = new Constructor({
          propsData: {
            onClose: callback,
            duration: 1000
          }
        }).$mount();
        document.body.appendChild(vm.$el);
        setTimeout(() => {
          expect(callback).to.been.called;
          vm.$el.remove();
          vm.$destroy();
          done()
        }, 1500)
      })
    })
  })
});