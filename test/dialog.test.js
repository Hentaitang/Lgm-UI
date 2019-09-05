const expect = chai.expect;
import Vue from 'vue';
import Dialog from '../src/dialog/dialog';
import Icon from '../src/icon/icon'

Vue.config.devtools = false;
Vue.config.productionTip = false;
Vue.component(Icon.name, Icon);

describe('dialog', () => {
  it('存在', () => {
    expect(Dialog).to.be.exist
  });

  describe('props', () => {
    const Constructor = Vue.extend(Dialog);
    let vm;
    it('接收 visible', (done) => {
      vm = new Constructor({
        propsData: {
          visible: true
        }
      }).$mount();
      vm.$nextTick(() => {
        const dialog = vm.$el.querySelector('.lgm-dialog');
        expect(dialog).to.be.exist;
        vm.$el.remove();
        vm.$destroy();
        done()
      })
    });
    it('接收 title', (done) => {
      vm = new Constructor({
        propsData: {
          visible: true,
          title: '提示'
        }
      }).$mount();
      vm.$nextTick(() => {
        const title = vm.$el.querySelector('.dialog-title');
        expect(title).to.be.exist;
        vm.$el.remove();
        vm.$destroy();
        done()
      })
    });
    it('接收 width', (done) => {
      const div = document.createElement('div');
      document.body.appendChild(div);
      vm = new Constructor({
        propsData: {
          visible: true,
          title: '提示',
          width: '100px'
        }
      }).$mount(div);
      vm.$nextTick(() => {
        const dialog = document.body.querySelector('.lgm-dialog');
        const {width} = window.getComputedStyle(dialog);
        expect(width).to.be.eq('100px');
        vm.$el.remove();
        vm.$destroy();
        done()
      })
    });
    it('接收 top', (done) => {
      const div = document.createElement('div');
      document.body.appendChild(div);
      vm = new Constructor({
        propsData: {
          visible: true,
          top: '500px'
        }
      }).$mount(div);
      vm.$nextTick(() => {
        const dialog = document.body.querySelector('.lgm-dialog');
        const {marginTop} = window.getComputedStyle(dialog);
        expect(marginTop).to.be.eq('500px');
        vm.$el.remove();
        vm.$destroy();
        done()
      })
    });
    it('接收 modal', (done) => {
      const div = document.createElement('div');
      document.body.appendChild(div);
      vm = new Constructor({
        propsData: {
          visible: true,
          modal: false
        }
      }).$mount(div);
      vm.$nextTick(() => {
        const wrapper = document.body.querySelector('.lgm-dialog-wrapper');
        const {backgroundColor} = window.getComputedStyle(wrapper);
        expect(backgroundColor).to.be.eq('rgba(0, 0, 0, 0)');
        vm.$el.remove();
        vm.$destroy();
        done()
      })
    });
    it('接收 showClose', (done) => {
      vm = new Constructor({
        propsData: {
          visible: true,
          title: '提示',
          showClose: false
        }
      }).$mount();
      vm.$nextTick(() => {
        const header = vm.$el.querySelector('.lgm-dialog-header');
        const svg = header.querySelector('svg');
        expect(svg).to.be.not.exist;
        vm.$el.remove();
        vm.$destroy();
        done()
      })
    });
    it('接收 customClass', (done) => {
      vm = new Constructor({
        propsData: {
          visible: true,
          customClass: 'testClass'
        }
      }).$mount();
      vm.$nextTick(() => {
        const dialog = vm.$el.querySelector('.lgm-dialog');
        expect(dialog.classList.contains('testClass')).to.be.eq(true);
        vm.$el.remove();
        vm.$destroy();
        done()
      })
    });
    it('接收 center', (done) => {
      const div = document.createElement('div');
      document.body.appendChild(div);
      vm = new Constructor({
        propsData: {
          visible: true,
          center: true,
          title: '提示'
        }
      }).$mount(div);
      vm.$nextTick(() => {
        const header = document.body.querySelector('.lgm-dialog-header');
        const {textAlign} = window.getComputedStyle(header);
        expect(textAlign).to.be.eq('center');
        vm.$el.remove();
        vm.$destroy();
        done()
      })
    });
  });
});