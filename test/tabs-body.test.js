import Vue from 'vue';
import TabsBody from '../src/tabs/tabsBody';

const expect = chai.expect;

Vue.config.devtools = false;
Vue.config.productionTip = false;

describe('tabs-head', ()=>{
  it('存在', ()=>{
    expect(TabsBody).to.be.exist
  });
});