import Vue from 'vue';
import TabsHead from '../src/tabs/tabsHead';

const expect = chai.expect;

Vue.config.devtools = false;
Vue.config.productionTip = false;

describe('tabs-head', ()=>{
  it('存在', ()=>{
    expect(TabsHead).to.be.exist
  });
});