<template>
  <div class="lgm-row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'lgm-row',
    props: {
      gutter: Number,
      justify: {
        type: String,
        validator: function (value) {
          return ['start', 'center', 'end', 'space-between', 'space-around'].indexOf(value) >= 0
        }
      },
      align: {
        type: String,
        validator: function (value) {
          return ['top', 'middle', 'bottom'].indexOf(value) >=0
        }
      }
    },
    computed: {
      rowClass(){
        let {justify, align} = this;
        return {
          [`row-flex-${justify}`]: justify,
          [`row-flex-${align}`]: align
        }
      },
      rowStyle() {
        const {gutter} = this;
        return {
          marginLeft: - parseInt(gutter) / 2 + 'px',
          marginRight: - parseInt(gutter) / 2 + 'px'
        }
      }
    },
    mounted() {
      this.$children.forEach(c => {
        c.gutter = this.gutter
      })
    }
  }
</script>
<style lang="scss" scoped>
  .lgm-row {
    display: flex;
    flex-wrap: wrap;
    &.row-flex-start{
      justify-content: flex-start;
    };
    &.row-flex-center{
      justify-content: center;
    };
    &.row-flex-end{
      justify-content: flex-end;
    };
    &.row-flex-space-between{
      justify-content: space-between;
    };
    &.row-flex-space-around{
      justify-content: space-around;
    }
    &.row-flex-top{
      align-items: flex-start;
    }
    &.row-flex-middle{
      align-items: center;
    }
    &.row-flex-bottom{
      align-items: flex-end;
    }
  }
</style>