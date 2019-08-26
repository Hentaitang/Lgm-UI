<template>
  <div class="lgm-toast"
       :class="toastClass"
       :style="toastStyle"
       :top="toastTop"
       @mouseenter="clearTimer"
       @mouseleave="startTimer">
    <div class="lgm-toast-content">
      <lgm-icon :icon="showIcon" class="prefix-icon" :class="{[type]: type}" v-if="!noPrefix"></lgm-icon>
      <p class="message" v-if="!dangerouslyUseHTMLString">
        <slot></slot>
      </p>
      <p v-else v-html="$slots.default[0]" class="message"></p>
      <lgm-icon icon="i-close" @click="close" class="closeIcon" v-if="showClose"></lgm-icon>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import Icon from './icon';

  function createToast(vue, toast, options){
    const {message, type, showClose, duration, position, offset, noPrefix, icon, onClose, dangerouslyUseHTMLString} = options;
    const Constructor = vue.extend(toast);
    const newToast = new Constructor({
      propsData: {
        type,
        showClose,
        duration,
        position,
        message,
        offset,
        noPrefix,
        icon,
        onClose,
        dangerouslyUseHTMLString
      }
    });
    newToast.$slots.default = [message];
    newToast.$mount();
    document.body.appendChild(newToast.$el);
  }

  export default {
    name: 'lgm-toast',
    data() {
      return {
        timer: null
      }
    },
    props: {
      type: {
        type: String,
        default: 'info',
        validator: function (value) {
          return ['success', 'error', 'info', 'warning'].indexOf(value) >= 0
        }
      },
      showClose: {
        type: Boolean,
        default: false
      },
      message: {
        type: String
      },
      duration: {
        type: Number,
        default: 3000
      },
      offset: {
        type: Number,
        default: 20
      },
      noPrefix: {
        type: Boolean,
        default: false
      },
      icon: {
        type: String
      },
      onClose: {
        type: Function
      },
      dangerouslyUseHTMLString: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'middle',
        validator: function(value){
          return ['left', 'middle', 'right'].indexOf(value) >= 0
        }
      }
    },
    computed: {
      toastTop() {
        return this.resetTop('attr')
      },
      toastStyle() {
        return this.resetTop('style')
      },
      toastClass() {
        return {
          'showClose': this.showClose,
          [this.position]: this.position
        }
      },
      showIcon() {
        let icon;
        switch (this.type) {
          case 'info':
            return icon = this.icon ? this.icon : 'i-infoFilled';
          case 'success':
            return icon = this.icon ? this.icon : 'i-checkFilled';
          case 'warning':
            return icon = this.icon ? this.icon : 'i-warning';
          case 'error':
            return icon = this.icon ? this.icon : 'i-error';
        }
        return icon
      }
    },
    components: {
      [Icon.name]: Icon
    },
    mounted() {
      this.startTimer()
    },
    methods: {
      resetTop(type) {
        const toasts = document.querySelectorAll(`.lgm-toast.${this.position}`);
        let result;
        if (toasts.length) {
          const {height} = toasts[toasts.length - 1].getBoundingClientRect();
          const top = toasts[toasts.length - 1].getAttribute('top');
          result = {
            top: `${this.offset + parseInt(top) + height}px`
          };
          return type === 'attr' ? result.top : result
        } else {
          result = {top: `${this.offset}px`};
          return type === 'attr' ? result.top : result
        }
      },
      startTimer() {
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            this.close()
          }, this.duration)
        }
      },
      clearTimer() {
        clearTimeout(this.timer)
      },
      beforeClose() {
        const toasts = document.querySelectorAll(`.lgm-toast.${this.position}`);
        const top = this.$el.style.top;
        let toastIndex;
        const toastHeight = this.$el.getBoundingClientRect().height;
        toasts.forEach((toast, index) => {
          toast.style.top === top ? toastIndex = index : '';
          if ((toastIndex || toastIndex === 0) && index > toastIndex) {
            const resetTop = parseInt(toast.style.top) - toastHeight - this.offset;
            toast.style.top = resetTop + 'px';
            toast.setAttribute('top', `${resetTop}px`)
          }
        });
      },
      close() {
        this.beforeClose();
        this.$el.classList.add('close');
        this.onClose && this.onClose(this.$el);
        setTimeout(() => {
          this.$el.remove();
          this.$destroy()
        }, 200)
      }
    },

    use: function (options) {
      createToast(Vue, this, options);
    },
    install: function ($Vue) {
      $Vue.prototype.$toast = (options) => {
        createToast($Vue, this, options);
      }
    }
  }
</script>
<style lang="scss" scoped>
  @keyframes middle-fade-in {
    0% {
      opacity: 0;
      transform: translate(-50%, -75%);
    }
    100% {
      opacity: 1;
      transform: translate(-50%, 0%);
    }
  }

  @keyframes middle-fade-out {
    0% {
      opacity: 1;
      transform: translate(-50%, 0%);
    }
    100% {
      opacity: 0;
      transform: translate(-50%, -75%);
    }
  }

  @keyframes side-fade-in {
    0% {
      opacity: 0;
      transform: translate(0%, -75%);
    }
    100% {
      opacity: 1;
      transform: translate(0%, 0%);
    }
  }

  @keyframes side-fade-out {
    0% {
      opacity: 1;
      transform: translate(0%, 0%);
    }
    100% {
      opacity: 0;
      transform: translate(0%, -75%);
    }
  }

  .lgm-toast {
    font-size: 14px;
    position: fixed;
    z-index: 1010;
    transition: all .4s;
    background-color: #fff;

    .lgm-toast-content {
      padding: 10px 16px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      border-radius: 4px;
      position: relative;
      word-break: break-all;
      display: flex;
      align-items: center;

      .message {
        flex: 1;
        max-width: 500px;
      }

      .prefix-icon {
        font-size: 16px;
        margin-right: 8px;

        &.success {
          fill: #44e291;
        }

        &.error {
          fill: #eb7070;
        }

        &.info {
          fill: #409eff;
        }

        &.warning {
          fill: #fec771;
        }
      }
    }

    &.showClose {
      .lgm-toast-content {
        padding: 10px 30px 10px 16px;

        .closeIcon {
          position: absolute;
          top: 50%;
          right: 6px;
          transform: translateY(-50%);
          cursor: pointer;
          fill: #999;
          font-size: 16px;
          &:hover {
            fill: #666
          }
        }
      }
    }

    &.left {
      left: 30px;
      animation: side-fade-in .3s;
      &.close {
        animation: side-fade-out .2s;
      }
    }

    &.middle{
      left: 50%;
      transform: translateX(-50%);
      animation: middle-fade-in .3s;
      &.close {
        animation: middle-fade-out .2s;
      }
    }

    &.right{
      right: 30px;
      animation: side-fade-in .3s;
      &.close {
        animation: side-fade-out .2s;
      }
    }
  }
</style>