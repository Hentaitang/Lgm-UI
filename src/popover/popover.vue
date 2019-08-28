<template>
  <div class="lgm-popover" @click="xxx">
    <div class="contentWrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <!--    <span ref="button" class="button" >-->
    <slot></slot>
    <!--    </span>-->
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
      xxx() {
        this.visible = !this.visible;
        if (this.visible === true) {
          this.$nextTick(() => {
            console.log(123);
            // document.addEventListener('click', () => {
            //   this.visible = false;
            //   console.log('点击执行');
            // })
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

    .contentWrapper {
      border: 1px solid red;
      position: absolute;
      bottom: 100%;
      left: 0;
      box-shadow: 0 0 3px rgba(0, 0, 0, .5)
    }

    .button {
      display: inline-block;
    }
  }
</style>