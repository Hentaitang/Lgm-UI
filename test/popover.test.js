import Vue from 'vue';
import Popover from '../src/popover/popover';

const expect = chai.expect;

Vue.config.devtools = false;
Vue.config.productionTip = false;

describe('popover', () => {
  it('存在', () => {
    expect(Popover).to.be.exist
  });
  describe('props', () => {
    it('接收 position', (done) => {
      Vue.component(Popover.name, Popover);
      const div = document.createElement('div');
      div.innerHTML = `
        <lgm-popover position="bottom">
          <template v-slot:content>
            <h4>这是标题</h4>
            <div>这是一段内容，这是一段内容，这是一段内容，这是一段内容。</div>
          </template>
          <button>点我</button>
        </lgm-popover>
      `;
      const vm = new Vue({
        el: div
      });
      const button = vm.$el.querySelector('button');
      button.click();
      vm.$nextTick(() => {
        const contentWrapper = document.body.querySelector('.contentWrapper');
        expect(contentWrapper.classList.contains('bottom')).to.be.true;
        vm.$el.remove();
        vm.$destroy();
        done()
      })
    });
    it('接收 trigger', (done) => {
      Vue.component(Popover.name, Popover);
      const div = document.createElement('div');
      div.innerHTML = `
        <lgm-popover trigger="hover">
          <template v-slot:content>
            <h4>这是标题</h4>
            <div>这是一段内容，这是一段内容，这是一段内容，这是一段内容。</div>
          </template>
          <button>点我</button>
        </lgm-popover>
      `;
      const vm = new Vue({
        el: div
      });
      const newEvent = new Event('hover');
      const button = vm.$el.querySelector('button');
      button.dispatchEvent(newEvent);

      vm.$nextTick(() => {
        const contentWrapper = document.body.querySelector('.contentWrapper');
        expect(contentWrapper).to.be.exist;
        vm.$el.remove();
        vm.$destroy();
        done()
      })
    })
  })
});