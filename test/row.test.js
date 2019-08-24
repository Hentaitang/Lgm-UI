import Vue from 'vue';
import Row from '../src/row';
import Col from '../src/col';

const expect = chai.expect;

Vue.config.devtools = false;
Vue.config.productionTip = false;

describe('Row', () => {
  it('存在.', () => {
    expect(Row).to.be.exist
  });
  describe('props', () => {
    const RowConstructor = Vue.extend(Row);
    let vm;
    afterEach(() => {
      vm.$el.remove();
      vm.$destroy()
    });
    it('接收justify属性', () => {
      const div = document.createElement('div');
      document.body.appendChild(div);
      vm = new RowConstructor({
        propsData: {
          justify: 'start'
        }
      }).$mount(div);
      const rowClass = vm.$el.classList.contains('row-flex-start');
      const rowStyle = getComputedStyle(vm.$el).justifyContent;
      expect(rowClass).to.be.eq(true);
      expect(rowStyle).to.be.eq('flex-start');
    });
    it('接收align属性', () => {
      const div = document.createElement('div');
      document.body.appendChild(div);
      vm = new RowConstructor({
        propsData: {
          align: 'top'
        }
      }).$mount(div);
      const rowClass = vm.$el.classList.contains('row-flex-top');
      const rowStyle = getComputedStyle(vm.$el).alignItems;
      expect(rowClass).to.be.eq(true);
      expect(rowStyle).to.be.eq('flex-start');
    });
    it('接收gutter属性', (done) => {
      Vue.component(Row.name, Row);
      Vue.component(Col.name, Col);
      const div = document.createElement('div');
      document.body.appendChild(div);
      div.innerHTML = `
        <lgm-row gutter="20">
          <lgm-col span="12"></lgm-col>
          <lgm-col span="12"></lgm-col>
         </lgm-row>
      `;
      vm = new Vue({
        el: div
      });
      setTimeout(() => {
        const row = vm.$el.querySelector('.lgm-row');
        expect(getComputedStyle(row).marginLeft).to.eq('-10px');
        expect(getComputedStyle(row).marginRight).to.eq('-10px');
        const cols = vm.$el.querySelectorAll('.lgm-col');
        expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px');
        expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px');
        done()
      })
    })
  })
});