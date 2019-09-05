<template>
  <div class="lgm-dialog-wrapper" v-show="dialogShow" @click="closeDialog" :style="wrapperStyle">
    <transition name="lgm-slide-fade">
      <div class="lgm-dialog" v-if="visible" :style="dialogStyle" :class="dialogClass" @click.stop>
        <div class="lgm-dialog-header" :class="{center: center}" v-if="title || hasTitleSlot">
          <span class="dialog-title" v-if="title">{{title}}</span>
          <span class="dialog-title" v-else><slot name="title"></slot></span>
          <lgm-icon icon="i-close" class="closeButton" @click="closeDialog" v-if="showClose"></lgm-icon>
        </div>
        <div class="lgm-dialog-content" v-if="hasContentSlot">
          <slot></slot>
        </div>
        <div class="lgm-dialog-footer" :class="{center: center}" v-if="hasFooterSlot">
          <slot name="footer"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import Icon from '../icon/icon';
  export default {
    name: 'lgm-dialog',
    props: {
      title: {
        type: String,
        default: ''
      },
      visible: {
        type: Boolean,
        default: false
      },
      width: {
        type: String,
        default: '50%'
      },
      top: {
        type: String,
        default: '10vh'
      },
      modal: {
        type: Boolean,
        default: true
      },
      lockScroll: {
        type: Boolean,
        default: true
      },
      showClose:{
        type: Boolean,
        default: true
      },
      customClass:{
        type: String,
        default: ''
      },
      open: {
        type: Function
      },
      close: {
        type: Function
      },
      center: {
        type: Boolean,
        default: false
      }
    },
    component:{
      [Icon.name]: Icon
    },
    data(){
      return {
        dialogShow: false
      }
    },
    computed: {
      hasTitleSlot(){
        return this.$slots.title
      },
      hasContentSlot(){
        return this.$slots.default
      },
      hasFooterSlot(){
        return this.$slots.footer
      },
      dialogClass(){
        return {
          [this.customClass]: this.customClass
        }
      },
      dialogStyle() {
        return {
          width: this.width,
          marginTop: this.top
        }
      },
      wrapperStyle(){
        return {
          backgroundColor: this.modal ? null : 'transparent'
        }
      }
    },
    methods: {
      closeDialog() {
        this.$emit('update:visible', false)
      }
    },
    watch: {
      visible(n){
        if(n){
          this.open();
          this.dialogShow = n;
          this.lockScroll ? document.body.style = 'overflow: hidden' : ''
        }else{
          setTimeout(()=>{
            this.close();
            this.dialogShow = n;
            this.lockScroll ? document.body.style = 'overflow: auto' : ''
          },250)
        }
      }
    }
  }
</script>

<style lang="scss">
  .lgm-slide-fade-enter-active,
  .lgm-slide-fade-leave-active {
    transition: all .3s ease;
  }

  .lgm-slide-fade-enter, .lgm-slide-fade-leave-to {
    transform: translateY(-30px);
    opacity: 0;
  }

  .lgm-dialog-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 1005;

    .lgm-dialog {
      margin: 0 auto 50px;
      background: #fff;
      border-radius: 4px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, .3);

      .lgm-dialog-header {
        padding: 16px 24px;
        color: rgba(0, 0, 0, 0.85);
        border-bottom: 1px solid #e8e8e8;
        font-size: 16px;
        font-weight: 500;
        word-wrap: break-word;
        position: relative;
        &.center{
          text-align: center;
        }
        .closeButton{
          position: absolute;
          top: 50%;
          right: 20px;
          transform: translateY(-50%);
          cursor: pointer;
          fill: #909399;
          &:hover{
            fill: rgba(0, 0, 0, 0.85);
          }
        }
      }

      .lgm-dialog-content {
        padding: 24px;
        font-size: 14px;
        overflow: auto;
      }

      .lgm-dialog-footer{
        padding: 10px 16px;
        text-align: right;
        border-top: 1px solid #e8e8e8;
        button:not(:first-child){
          margin-left: 8px;
        }
        &.center{
          text-align: center;
        }
      }
    }
  }
</style>