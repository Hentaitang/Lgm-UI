<template>
  <div class="lgm-toast" :style="toastStyle">
    <div class="lgm-toast-content">
      <slot></slot>
      <lgm-icon icon="i-setting" @click="closeToast"></lgm-icon>
    </div>
  </div>
</template>
<script>
  import Icon from './icon';
  export default {
    name: 'lgm-toast',
    props: {
      type: {
        type: String
      },
      showClose: {
        type: Boolean
      },
      message: {
        type: String
      }
    },
    computed: {
      toastStyle() {
        const toasts = document.querySelectorAll('.lgm-toast');
        if(!toasts.length) return;
        const {bottom} = toasts[toasts.length - 1].getBoundingClientRect();
        return {
          top: `${16 + bottom}px`
        }
      }
    },
    components: {
      [Icon.name]: Icon
    },
    methods: {
      closeToast(){
        const toasts = document.querySelectorAll('.lgm-toast');
        const top = this.$el.style.top;
        let toastIndex;
        const toastHeight = this.$el.getBoundingClientRect().height;
        toasts.forEach((toast, index) => {
          toast.style.top === top ? toastIndex = index : '';
          if((toastIndex || toastIndex === 0) && index > toastIndex){
            toast.style.top = parseInt(toast.style.top) - toastHeight - 16 + 'px';
          }
        });
        this.$el.remove();
        this.$destroy()
      }
    },
    install: function (Vue) {
      let createCount;
      Vue.prototype.$toast = ({message, type, showClose, callback}) => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(this);
        createCount = this;
        const toast = new Constructor({
          propsData: {
            type,
            showClose
          }
        });
        toast.$slots.default = [message];
        toast.$mount(div)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .lgm-toast {
    position: fixed;
    top: 16px;
    left: 50%;
    transform: translateX(-50%);

    .lgm-toast-content {
      padding: 10px 16px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      border-radius: 4px;
    }
  }
</style>