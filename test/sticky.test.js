import Vue from 'vue';
import Sticky from '../src/sticky/sticky';

const expect = chai.expect;

Vue.config.devtools = false;
Vue.config.productionTip = false;

Vue.component(Sticky.name, Sticky);

describe('sticky', () => {
  it('存在', () => {
    expect(Sticky).to.be.exist
  });
  // describe('props', () => {
  //   it('接收 offsetTop', (done)=>{
  //     const div = document.createElement('div');
  //     document.body.appendChild(div);
  //     div.innerHTML = `
  //       <div class="testWrapper">
  //         <lgm-sticky :offset-top="120">
  //           test
  //         </lgm-sticky>
  //       </div>
  //     `
  //     const vm = new Vue({
  //       el: div
  //     });
  //     // document.querySelector('.testWrapper').style.height = '3000px';
  //     // window.scroll(0, 1500);
  //     // console.log(document.querySelector('.testWrapper'));
  //     vm.$nextTick(()=>{
  //       console.log(document.querySelector('.testWrapper'));
  //       document.querySelector('.testWrapper').style.height = 3000;
  //       done()
  //     });
  //   })
  // })
});