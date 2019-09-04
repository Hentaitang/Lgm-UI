<template>
  <div class="lgm-sticky-wrapper" ref="wrapper" :style="wrapperStyle">
    <div class="lgm-sticky-content" :class="{sticky: isSticky}" :style="contentStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "lgm-sticky",
    props: {
      offsetTop: {
        type: Number,
        default: 0
      },
      offsetBottom: {
        type: Number
      }
    },
    data() {
      return {
        isSticky: false,
        top: null,
        height: null,
        bottom: null
      }
    },
    computed: {
      wrapperStyle() {
        return {
          height: this.height + 'px'
        }
      },
      contentStyle() {
        return {
          top: typeof this.top === 'number' ?  this.top  + 'px' : null,
          bottom: typeof this.bottom === 'number' ? this.bottom + 'px' : null
        }
      }
    },
    methods: {
      onScroll() {
        const {height, top, bottom} = this.$refs.wrapper.getBoundingClientRect();
        if (top - this.offsetTop <= 0) {
          this.resetPotion({top: this.offsetTop, height, bottom: null});
          this.isSticky = true;
        }else if(typeof this.offsetBottom === 'number' && window.innerHeight - bottom - this.offsetBottom <= 0){
          this.resetPotion({top: null, bottom: this.offsetBottom, height});
          this.isSticky = true;
        }else{
          this.resetPotion({top: null, height: null, bottom: null});
          this.isSticky = false;
        }
      },
      resetPotion(position) {
        const {top, height, bottom} = position;
        this.top = top;
        this.height = height;
        this.bottom = bottom
      }
    },
    mounted() {
      window.addEventListener('scroll', this.onScroll);
      if(typeof this.offsetBottom === 'number'){
        window.dispatchEvent(new Event('scroll'))
      }
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.onScroll)
    }
  }
</script>

<style lang="scss" scoped>
  .lgm-sticky-wrapper {
    .lgm-sticky-content.sticky {
      position: fixed;
      z-index: 1000;
    }
  }
</style>