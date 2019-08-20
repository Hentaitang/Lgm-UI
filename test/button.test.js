const expect = chai.expect;
import Vue from 'vue';
import Button from '../src/button';

// 关闭Vue生产提示
Vue.config.productionTip = false;
// 关闭Vue自检工具
Vue.config.devtools = false;

describe('Button', () => {
  it('存在.', () => {
    expect(Button).to.be.ok
  });

  // it('可设置icon.', ()=>{
  //   const Constructor = Vue.extend(Button)
  // })
});