const expect = chai.expect;

import Vue from 'vue';
import Collapse from '../src/collapse/collapse';
import CollapseItem from '../src/collapse/collapseItem';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('collapse', () => {
  it('存在', () => {
    expect(Collapse).to.be.exist
  });

  describe('props', () => {
    it('接收 selected 属性', (done) => {
      Vue.component(Collapse.name, Collapse);
      Vue.component(CollapseItem.name, CollapseItem);
      const div = document.createElement('div');
      div.innerHTML = `
        <lgm-collapse :selected="selectItems">
          <lgm-collapse-item title="反馈" name="1">
            <div id="content1">控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          </lgm-collapse-item>
          <lgm-collapse-item title="效率" name="2">
            <div id="content2">简化流程：设计简洁直观的操作流程；</div>
          </lgm-collapse-item>
          <lgm-collapse-item title="可控" name="3">
            <div id="content3">用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          </lgm-collapse-item>
        </lgm-collapse>
      `;
      const vm = new Vue({
        el: div,
        data() {
          return {
            selectItems: ['1', '2']
          }
        }
      });
      vm.$nextTick(()=>{
        expect(vm.$el.querySelector('#content1')).to.be.exist;
        expect(vm.$el.querySelector('#content2')).to.be.exist;
        expect(vm.$el.querySelector('#content3')).to.be.not.exist;
        vm.$el.remove();
        vm.$destroy();
        done()
      })
    });
    it('接收 single 属性', (done)=>{
      Vue.component(Collapse.name, Collapse);
      Vue.component(CollapseItem.name, CollapseItem);
      const div = document.createElement('div');
      div.innerHTML = `
        <lgm-collapse :selected="selectItems" single>
          <lgm-collapse-item title="反馈" name="1">
            <div id="content1">控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          </lgm-collapse-item>
          <lgm-collapse-item title="效率" name="2">
            <div id="content2">简化流程：设计简洁直观的操作流程；</div>
          </lgm-collapse-item>
          <lgm-collapse-item title="可控" name="3">
            <div id="content3">用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          </lgm-collapse-item>
        </lgm-collapse>
      `;
      const vm = new Vue({
        el: div,
        data() {
          return {
            selectItems: ['1', '2']
          }
        }
      });
      vm.$nextTick(()=>{
        expect(vm.$el.querySelector('#content1')).to.be.exist;
        expect(vm.$el.querySelector('#content2')).to.be.not.exist;
        expect(vm.$el.querySelector('#content3')).to.be.not.exist;
        vm.$el.remove();
        vm.$destroy();
        done()
      })
    })
  })
});