import Vue from 'vue';
import TabsPane from '../src/tabs/tabsPane';
import Tabs from '../src/tabs/tabs';
import TabsHead from '../src/tabs/tabsHead';
import TabsItem from '../src/tabs/tabsItem';
import TabsBody from '../src/tabs/tabsBody';

const expect = chai.expect;

Vue.component(Tabs.name, Tabs);
Vue.component(TabsHead.name, TabsHead);
Vue.component(TabsItem.name, TabsItem);
Vue.component(TabsBody.name, TabsBody);
Vue.component(TabsPane.name, TabsPane);

Vue.config.devtools = false;
Vue.config.productionTip = false;

const html = `
  <lgm-tabs selected="abc" position="right">
    <lgm-tabs-head>
      <lgm-tabs-item label="abc">小学</lgm-tabs-item>
      <lgm-tabs-item label="high">高中</lgm-tabs-item>
    </lgm-tabs-head>
    <lgm-tabs-body>
      <lgm-tabs-pane name="abc">小学生</lgm-tabs-pane>
      <lgm-tabs-pane name="high">高中生</lgm-tabs-pane>
    </lgm-tabs-body>
  </lgm-tabs>
`;

describe('Tabs', () => {
  it('存在', () => {
    expect(Tabs).to.be.exist
  });

  describe('props', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.innerHTML = html;
    const vm = new Vue({
      el: div
    });
    it('接收 position', () => {
      const tabs = vm.$el.querySelector('.lgm-tabs');
      const head = vm.$el.querySelector('.lgm-tabs-head');
      const body = vm.$el.querySelector('.lgm-tabs-body');
      expect(tabs.classList.contains('right')).to.be.true;
      expect(head.classList.contains('right')).to.be.true;
      expect(body.classList.contains('right')).to.be.true;
      vm.$el.remove();
      vm.$destroy()
    });
    it('接收 selected', (done) => {
      const item = vm.$el.querySelector('.lgm-tabs-item[data-label="abc"]');
      expect(item.classList.contains('active')).to.be.true;
      vm.$nextTick(() => {
        const pane = vm.$el.querySelectorAll('.lgm-tabs-pane');
        expect(pane.length).to.be.eq(1);
        expect(pane[0].getAttribute('data-name')).to.eq('abc');
        vm.$el.remove();
        vm.$destroy();
        done()
      });
    })
  })
});