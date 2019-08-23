<template>
  <div class="lgm-col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>
<script>
  const validator = function () {

  };
  const spanOrOrderProps = {
    type: [String, Number],
    validator: function (value) {
      return parseInt(value, 10) <= 24
    }
  };
  export default {
    name: 'lgm-col',
    data(){
      return {
        gutter: ''
      }
    },
    props: {
      span: spanOrOrderProps,
      offset: [Number, String],
      order: spanOrOrderProps,
      phone: {
        type: Object,
        validator
      },
      miniPad: {
        type: Object,
        validator
      },
      Pad: {
        type: Object,
        validator
      },
      narrowPc: {
        type: Object,
        validator
      },
      pc: {
        type: Object,
        validator
      },
      widePc: {
        type: Object,
        validator
      },
    },
    computed: {
      colClass() {
        let {span, offset} = this;
        return {
          [`col-${span}`]: span,
          [`offset-${offset}`]: offset,
        }
      },
      colStyle(){
        const {gutter, order} = this;
        if(order && gutter){
          return {
            paddingLeft: gutter / 2 + 'px',
            paddingRight: gutter / 2 + 'px',
            order: order
          }
        }else if(order){
          return {
            order: order
          }
        }else if(gutter){
          return {
            paddingLeft: gutter / 2 + 'px',
            paddingRight: gutter / 2 + 'px'
          }
        }

      }
    }
  }
</script>
<style lang="scss" scoped>
  .lgm-col {
    width: 50%;
  }
  $class: col-;
  @for $n from 1 through 24 {
    .#{$class}#{$n} {
      width: $n / 24 * 100%;
    }
  }

  $class: offset-;
  @for $n from 1 through 24 {
    .#{$class}#{$n}{
      margin-left: $n / 24 * 100%;
    }
  }

</style>