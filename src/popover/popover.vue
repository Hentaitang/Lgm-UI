<template>
  <div class="lgm-popover">
    <div class="contentWrapper" v-if="visible" ref="content" :class="{[position]: position}">
      <slot name="content"></slot>
    </div>
    <span ref="button" class="button" @click="clickButton">
      <slot></slot>
    </span>
  </div>
</template>
<script>
  export default {
    name: 'lgm-popover',
    props: {
      position: {
        type: String,
        default: 'top',
        validator(value){
          return ['top', 'left', 'right', 'bottom'].indexOf(value) >= 0
        }
      }
    },
    data() {
      return {
        visible: false
      }
    },
    methods: {
      popoverClose(){
        this.visible = false;
        document.removeEventListener('click', this.clickOutside)
      },
      popoverOpen(){
        this.visible = true;
        this.$nextTick(() => {
          this.contentPosition();
          document.addEventListener('click', this.clickOutside)
        })
      },
      contentPosition(){
        const {content} = this.$refs;
        document.body.appendChild(content);
        const {left, right, top, bottom, height} = this.$refs.button.getBoundingClientRect();
        switch(this.position){
          case 'top':
            content.style.left = left + window.scrollX + 'px';
            content.style.top = top + window.scrollY +'px';
            break;
          case 'left':
            content.style.left = left + window.scrollX + 'px';
            content.style.top = top + height / 2 + window.scrollY +'px';
            break;
          case 'right':
            content.style.left = right + window.scrollX + 'px';
            content.style.top = top + height / 2  + window.scrollY +'px';
            break;
          case 'bottom':
            content.style.left = left + window.scrollX + 'px';
            content.style.top = bottom + window.scrollY +'px';
            break;
        }
      },
      clickOutside($event){
        if(this.$refs.button && this.$refs.button.contains($event.target)) return;
        if(this.$refs.content && this.$refs.content.contains($event.target)) return;
        this.popoverClose()
      },
      clickButton() {
        if (this.visible === false) {
          this.popoverOpen()
        }else{
          this.popoverClose()
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .lgm-popover {
    display: inline-block;
    vertical-align: top;
    position: relative;

    .button {
      display: inline-block;
    }
  }
  .contentWrapper {
    border: 1px solid black;
    position: absolute;
    background-color: white;
    padding: .8em 1em;
    border-radius: 5px;
    word-break: break-all;
    max-width: 20em;
    &::before,
    &::after{
      content: '';
      display: block;
      border: 10px solid transparent;
      position: absolute;
    }
    &.top{
      margin-top: -10px;
      transform: translateY(-100%);
      filter: drop-shadow(0 1px 1px rgba(0, 0, 0, .5));
      &::before{
        top: 100%;
        border-top-color: black;
        border-bottom: none;
      }
      &::after{
        top: calc(100% - 1px);
        border-top-color: white;
        border-bottom: none;
      }
    }
    &.bottom{
      margin-top: 10px;
      filter: drop-shadow(0 -1px 1px rgba(0, 0, 0, .5));
      &::before{
        bottom: 100%;
        border-bottom-color: black;
        border-top: none;
      }
      &::after{
        bottom: calc(100% - 1px);
        border-bottom-color: white;
        border-top: none;
      }
    }
    &.left{
      transform: translate(-100%, -50%);
      margin-left: -10px;
      filter: drop-shadow(1px 0px 1px rgba(0, 0, 0, .5));
      &::before{
        top: 50%;
        left: 100%;
        border-left-color: black;
        border-right: none;
        transform: translateY(-50%);
      }
      &::after{
        top: 50%;
        left: calc(100% - 1px);
        border-left-color: white;
        border-right: none;
        transform: translateY(-50%);
      }
    }
    &.right{
      margin-left: 10px;
      transform: translateY(-50%);
      filter: drop-shadow(-1px 0px 1px rgba(0, 0, 0, .5));
      &::before{
        top: 50%;
        right: 100%;
        border-right-color: black;
        border-left: none;
        transform: translateY(-50%);
      }
      &::after{
        top: 50%;
        right: calc(100% - 1px);
        border-right-color: white;
        border-left: none;
        transform: translateY(-50%);
      }
    }
  }
</style>