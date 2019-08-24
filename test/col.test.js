import Vue from 'vue';
import Col from '../src/col';

const expect = chai.expect;

Vue.config.devtools = false;
Vue.config.productionTip = false;

describe('Col', ()=>{
  it('存在.', ()=>{
    expect(Col).to.be.exist
  });

  describe('props', ()=>{
    const Constructor = Vue.extend(Col);
    let vm;
    afterEach(()=>{
      vm.$destroy()
    });
    it('接收span属性', ()=>{
      vm = new Constructor({
        propsData: {
          span: '4'
        }
      }).$mount();
      const colClass = vm.$el.classList.contains('col-4');
      expect(colClass).to.be.eq(true)
    });
    it('接收offset属性', ()=>{
      vm = new Constructor({
        propsData: {
          offset: '4'
        }
      }).$mount();
      const colClass = vm.$el.classList.contains('offset-4');
      expect(colClass).to.be.eq(true)
    });
    it('接收order属性', ()=>{
      const div = document.createElement('div');
      document.body.appendChild(div);
      vm = new Constructor({
        propsData: {
          order: '2'
        }
      }).$mount(div);
      const colStyle = getComputedStyle(vm.$el).order;
      expect(colStyle).to.be.eq('2')
    });
    it('接收phone属性', ()=>{
      vm = new Constructor({
        propsData: {
          phone: {span: '2', offset: '1'}
        }
      }).$mount();
      const spanClass = vm.$el.classList.contains('col-phone-2');
      const offsetClass = vm.$el.classList.contains('offset-phone-1');
      expect(spanClass).to.be.eq(true);
      expect(offsetClass).to.be.eq(true);
    });
    it('接收miniPad属性', ()=>{
      vm = new Constructor({
        propsData: {
          miniPad: {span: '2', offset: '1'}
        }
      }).$mount();
      const spanClass = vm.$el.classList.contains('col-miniPad-2');
      const offsetClass = vm.$el.classList.contains('offset-miniPad-1');
      expect(spanClass).to.be.eq(true);
      expect(offsetClass).to.be.eq(true);
    });
    it('接收pad属性', ()=>{
      vm = new Constructor({
        propsData: {
          pad: {span: '2', offset: '1'}
        }
      }).$mount();
      const spanClass = vm.$el.classList.contains('col-pad-2');
      const offsetClass = vm.$el.classList.contains('offset-pad-1');
      expect(spanClass).to.be.eq(true);
      expect(offsetClass).to.be.eq(true);
    });
    it('接收narrowPc属性', ()=>{
      vm = new Constructor({
        propsData: {
          narrowPc: {span: '2', offset: '1'}
        }
      }).$mount();
      const spanClass = vm.$el.classList.contains('col-narrowPc-2');
      const offsetClass = vm.$el.classList.contains('offset-narrowPc-1');
      expect(spanClass).to.be.eq(true);
      expect(offsetClass).to.be.eq(true);
    });
    it('接收pc属性', ()=>{
      vm = new Constructor({
        propsData: {
          pc: {span: '2', offset: '1'}
        }
      }).$mount();
      const spanClass = vm.$el.classList.contains('col-pc-2');
      const offsetClass = vm.$el.classList.contains('offset-pc-1');
      expect(spanClass).to.be.eq(true);
      expect(offsetClass).to.be.eq(true);
    });
    it('接收widePc属性', ()=>{
      vm = new Constructor({
        propsData: {
          widePc: {span: '2', offset: '1'}
        }
      }).$mount();
      const spanClass = vm.$el.classList.contains('col-widePc-2');
      const offsetClass = vm.$el.classList.contains('offset-widePc-1');
      expect(spanClass).to.be.eq(true);
      expect(offsetClass).to.be.eq(true);
    });
  })
});