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
        setTimeout(() => {
          this.contentPosition();
          document.addEventListener('click', this.clickOutside)
        })
      },
      contentPosition(){
        document.body.appendChild(this.$refs.content);
        const {content, button} = this.$refs;
        const {left, right, top, bottom} = this.$refs.button.getBoundingClientRect();
        switch(this.position){
          case 'top':
            content.style.left = left + window.scrollX + 'px';
            content.style.top = top + window.scrollY +'px';
            break;
          case 'left':
            content.style.left = left + window.scrollX + 'px';
            content.style.top = top + window.scrollY +'px';
            break;
          case 'right':
            content.style.left = left + window.scrollX + 'px';
            content.style.top = top + window.scrollY +'px';
            break;
          case 'bottom':
            content.style.left = left + window.scrollX + 'px';
            content.style.top = top + window.scrollY +'px';
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
    transform: translateY(-100%);
    background-color: white;
    margin-top: -10px;
    padding: .8em 1em;
    border-radius: 5px;
    word-break: break-all;
    max-width: 20em;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, .5));
    &::before{
      content: '';
      display: block;
      border: 10px solid transparent;
      position: absolute;
      top: 100%;
      border-top-color: black;
      border-bottom: none;
    }
    &::after{
      content: '';
      display: block;
      border: 10px solid transparent;
      position: absolute;
      top: calc(100% - 1px);
      border-top-color: white;
      border-bottom: none;
    }
  }
</style>