<template>
  <div class="lgm-col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>
<script>
  const validator = function (value) {
    let valid = true;
    Object.keys(value).forEach(key => {
      ['span', 'offset'].indexOf(key) >= 0 ? '' : (valid = false)
    });
    return valid
  };
  const spanOrOrderProps = {
    type: [String, Number],
    validator: function (value) {
      return parseInt(value, 10) <= 24
    }
  };
  export default {
    name: 'lgm-col',
    data() {
      return {
        gutter: ''
      }
    },
    props: {
      span: spanOrOrderProps,
      offset: Number,
      order: spanOrOrderProps,
      phone: {
        type: Object,
        validator
      },
      miniPad: {
        type: Object,
        validator
      },
      pad: {
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
        let {span, offset, phone, miniPad, pad, narrowPc, pc, widePc, createClasses} = this;
        return {
          ...createClasses({span, offset}, ''),
          ...createClasses(phone, 'phone-'),
          ...createClasses(miniPad, 'miniPad-'),
          ...createClasses(pad, 'pad-'),
          ...createClasses(narrowPc, 'narrowPc-'),
          ...createClasses(pc, 'pc-'),
          ...createClasses(widePc, 'widePc-')
        }
      },
      colStyle() {
        const {gutter, order} = this;
        if (order && gutter) {
          return {
            paddingLeft: gutter / 2 + 'px',
            paddingRight: gutter / 2 + 'px',
            order: order
          }
        } else if (order) {
          return {
            order: order
          }
        } else if (gutter) {
          return {
            paddingLeft: gutter / 2 + 'px',
            paddingRight: gutter / 2 + 'px'
          }
        }

      }
    },
    methods: {
      createClasses(obj, str) {
        if (obj) {
          return {
            [`col-${str}${obj.span}`]: obj.span,
            [`offset-${str}${obj.offset}`]: obj.offset
          }
        }

      }
    }
  }
</script>
<style lang="scss" scoped>
  .lgm-col {
    $class: col-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: $n / 24 * 100%;
      }
    }

    $class: offset-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        margin-left: $n / 24 * 100%;
      }
    }

    @media (min-width: 0px){
      $class: col-phone-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          width: $n / 24 * 100%;
        }
      }

      $class: offset-phone-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          margin-left: $n / 24 * 100%;
        }
      }
    }
    @media (min-width: 576px){
      $class: col-miniPad-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          width: $n / 24 * 100%;
        }
      }

      $class: offset-miniPad-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          margin-left: $n / 24 * 100%;
        }
      }
    }
    @media (min-width: 768px){
      $class: col-pad-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          width: $n / 24 * 100%;
        }
      }

      $class: offset-pad-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          margin-left: $n / 24 * 100%;
        }
      }
    }
    @media (min-width: 992px){
      $class: col-narrowPc-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          width: $n / 24 * 100%;
        }
      }

      $class: offset-narrowPc-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          margin-left: $n / 24 * 100%;
        }
      }
    }
    @media (min-width: 1200px){
      $class: col-pc-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          width: $n / 24 * 100%;
        }
      }

      $class: offset-pc-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          margin-left: $n / 24 * 100%;
        }
      }
    }
    @media (min-width: 1600px){
      $class: col-widePc-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          width: $n / 24 * 100%;
        }
      }

      $class: offset-widePc-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          margin-left: $n / 24 * 100%;
        }
      }
    }
  }

</style>