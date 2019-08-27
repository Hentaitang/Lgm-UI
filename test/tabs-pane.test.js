import Vue from 'vue';
import TabsPane from '../src/tabs/tabsPane';
import Tabs from '../src/tabs/tabs';
import TabsHead from '../src/tabs/tabsHead';
import TabsItem from '../src/tabs/tabsItem';
import TabsBody from '../src/tabs/tabsBody';

Vue.component(Tabs.name, Tabs);
Vue.component(TabsHead.name, TabsHead);
Vue.component(TabsItem.name, TabsItem);
Vue.component(TabsBody.name, TabsBody);
Vue.component(TabsPane.name, TabsPane);

const expect = chai.expect;

Vue.config.devtools = false;
Vue.config.productionTip = false;

describe('tabs-head', () => {
  it('存在', () => {
    expect(TabsPane).to.be.exist
  });
  describe('props', () => {
    it('接收 name', (done)=>{
      const div = document.createElement('div');
      div.innerHTML = `
      <lgm-tabs selected="abc">
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
      const vm = new Vue({
        el: div
      });
      vm.$nextTick(()=>{
        expect(vm.$el.querySelector('.lgm-tabs-pane').getAttribute('data-name')).to.eq('abc');
        vm.$el.remove();
        vm.$destroy();
        done()
      });
    })
  })
});