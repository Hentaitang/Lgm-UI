const expect = chai.expect;
import Vue from 'vue';
import Input from '../src/input';

Vue.config.devtools = false;
Vue.config.productionTip = false;

describe('Input', () => {
  it('input 存在', () => {
    expect(Input).to.be.exist
  });

  describe('props', () => {
    const Constructor = Vue.extend(Input);
    let vm;
    afterEach(() => {
      vm.$destroy()
    });
    it('接收type', () => {
      vm = new Constructor({
        propsData: {
          type: 'textarea'
        }
      }).$mount();
      const tagName = vm.$el.querySelector('textarea').tagName.toLowerCase();
      expect(tagName).to.be.eq('textarea')
    });
    it('input 接收 value', () => {
      vm = new Constructor({
        propsData: {
          value: '123'
        }
      }).$mount();
      const value = vm.$el.querySelector('input').value;
      expect(value).to.be.eq('123')
    });
    it('input 接收 disabled', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount();
      const disabled = vm.$el.querySelector('input').getAttribute('disabled');
      expect(disabled).to.be.eq('disabled')
    });
    it('input 接收 readonly', () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount();
      const readonly = vm.$el.querySelector('input').getAttribute('readonly');
      expect(readonly).to.be.eq('readonly')
    });
    it('input 接收 placeholder', () => {
      vm = new Constructor({
        propsData: {
          placeholder: '请输入内容'
        }
      }).$mount();
      const placeholder = vm.$el.querySelector('input').getAttribute('placeholder');
      expect(placeholder).to.be.eq('请输入内容')
    });
    it('input 接收 clearable', () => {
      vm = new Constructor({
        propsData: {
          clearable: true
        }
      }).$mount();
      const wrapperClass = vm.$el.getAttribute('class');
      expect(wrapperClass).to.be.include('clearable')
    });
    it('input 接收 prefix-icon', () => {
      vm = new Constructor({
        propsData: {
          prefixIcon: 'i-setting'
        }
      }).$mount();
      const wrapperClass = vm.$el.getAttribute('class');
      const svg = vm.$el.querySelector('svg');
      const href = svg.querySelector('use').getAttribute('xlink:href');
      expect(href).to.be.eq('#i-setting');
      expect(wrapperClass).to.be.include('prefix-icon-input')
    });
    it('input 接收 suffix-icon', () => {
      vm = new Constructor({
        propsData: {
          suffixIcon: 'i-loading'
        }
      }).$mount();
      const wrapperClass = vm.$el.getAttribute('class');
      const svg = vm.$el.querySelector('svg');
      const href = svg.querySelector('use').getAttribute('xlink:href');
      expect(href).to.be.eq('#i-loading');
      expect(wrapperClass).to.be.include('suffix-icon-input')
    });
    it('textarea 接收 value', () => {
      vm = new Constructor({
        propsData: {
          type: 'textarea',
          value: '123'
        }
      }).$mount();
      const value = vm.$el.querySelector('textarea').value;
      expect(value).to.be.eq('123')
    });
    it('textarea 接收 disabled', () => {
      vm = new Constructor({
        propsData: {
          type: 'textarea',
          disabled: true
        }
      }).$mount();
      const disabled = vm.$el.querySelector('textarea').getAttribute('disabled');
      expect(disabled).to.be.eq('disabled')
    });
    it('textarea 接收 readonly', () => {
      vm = new Constructor({
        propsData: {
          type: 'textarea',
          readonly: true
        }
      }).$mount();
      const readonly = vm.$el.querySelector('textarea').getAttribute('readonly');
      expect(readonly).to.be.eq('readonly')
    });
    it('textarea 接收 placeholder', () => {
      vm = new Constructor({
        propsData: {
          type: 'textarea',
          placeholder: '请输入内容'
        }
      }).$mount();
      const placeholder = vm.$el.querySelector('textarea').getAttribute('placeholder');
      expect(placeholder).to.be.eq('请输入内容')
    });
    it('textarea 接收 rows', () => {
      vm = new Constructor({
        propsData: {
          type: 'textarea',
          rows: 4
        }
      }).$mount();
      const rows = vm.$el.querySelector('textarea').getAttribute('rows');
      expect(rows).to.be.eq('4')
    })
  });
  describe('event', () => {
    const Constructor = Vue.extend(Input);
    let vm;
    afterEach(() => {
      vm.$destroy()
    });
    it('input 支持 change/input 事件', () => {
      ['change', 'input'].forEach(eventName => {
        vm = new Constructor({}).$mount();
        const callback = sinon.fake();
        vm.$on(eventName, callback);
        // 触发input的change/input事件
        let event = new Event(eventName);
        Object.defineProperty(event, 'target', {
          value: {value: '123'},
          enumerable: true
        });
        const inputElement = vm.$el.querySelector('input');
        inputElement.dispatchEvent(event);
        expect(callback).to.have.been.calledWith('123')
      })
    });
    it('input 支持 focus/blur 事件', () => {
      ['focus', 'blur'].forEach(eventName => {
        vm = new Constructor({}).$mount();
        const callback = sinon.fake();
        vm.$on(eventName, callback);
        let event = new Event(eventName);
        const inputElement = vm.$el.querySelector('input');
        inputElement.dispatchEvent(event);
        expect(callback).to.have.been.calledWith(event)
      })
    });
    it('textarea 支持 change/input 事件', () => {
      ['change', 'input'].forEach(eventName => {
        vm = new Constructor({
          propsData: {
            type: 'textarea'
          }
        }).$mount();
        const callback = sinon.fake();
        vm.$on(eventName, callback);
        const event = new Event(eventName);
        Object.defineProperty(event, 'target', {
          value: {value: 'qqq'},
          enumerable: true,
          configurable: true
        });
        const textarea = vm.$el.querySelector('textarea');
        textarea.dispatchEvent(event);
        expect(callback).to.have.been.calledWith('qqq')
      })
    });
    it('textarea 支持 focus/blur 事件', () => {
      ['focus', 'blur'].forEach(eventName => {
        vm = new Constructor({
          propsData: {
            type: 'textarea'
          }
        }).$mount();
        const callback = sinon.fake();
        vm.$on(eventName, callback);
        let event = new Event(eventName);
        const inputElement = vm.$el.querySelector('textarea');
        inputElement.dispatchEvent(event);
        expect(callback).to.have.been.calledWith(event)
      })
    })
  })
});