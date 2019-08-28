<template>
  <div class="lgm-popover">
    <div class="contentWrapper" v-if="visible" ref="content">
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
    data() {
      return {
        visible: false
      }
    },
    methods: {
      close(){
        this.visible = false;
        document.removeEventListener('click', this.onClickDocument)
      },
      contentPosition(){
        document.body.appendChild(this.$refs.content);
        const {left, right, top, bottom} = this.$refs.button.getBoundingClientRect();
        this.$refs.content.style.left = left + window.scrollX + 'px';
        this.$refs.content.style.top = top + window.scrollY +'px';
        console.log(left, right, top, bottom)
      },
      clickOutside($event){
        if(this.$refs.button && this.$refs.button.contains($event.target)) return;
        if(this.$refs.content && this.$refs.content.contains($event.target)) return;
        this.close()
      },
      clickButton() {
        this.visible = !this.visible;
        if (this.visible === true) {
          setTimeout(() => {
            this.contentPosition();
            document.addEventListener('click', this.clickOutside)
          })
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
    border: 1px solid red;
    position: absolute;
    box-shadow: 0 0 3px rgba(0, 0, 0, .5);
    transform: translateY(-100%);
    background-color: white;
    margin-top: -10px;
  }
</style>