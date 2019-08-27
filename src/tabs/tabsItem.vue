<template>
  <div class="lgm-tabs-item" :class="classes" @click="clickItem" :data-label="label">
    <lgm-icon :icon="icon" class="icon" v-if="icon"></lgm-icon>
    <slot></slot>
  </div>
</template>
<script>
  import Icon from '../icon/icon';
  export default{
    name: 'lgm-tabs-item',
    inject: ['eventBus'],
    data() {
      return {
        active: false,
        position: '',
      }
    },
    props: {
      label: {
        type: [String, Number],
        require: true
      },
      icon: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    components: {
      [Icon.name]: Icon
    },
    computed: {
      classes(){
        return {
          'active': this.active,
          'disabled': this.disabled,
          [this.position]: this.position
        }
      }
    },
    created() {
      if(this.eventBus){
        this.eventBus.$on('selected', (label)=>{
          this.active = this.label === label
        });
        this.eventBus.$on('position', (position) => {
          this.position = position
        })
      }
    },
    methods: {
      clickItem($event){
        if(this.disabled) return;
        this.eventBus && this.eventBus.$emit('selected', this.label, this.$el);
        this.$emit('click', $event)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .lgm-tabs-item{
    cursor: pointer;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    .icon{
      margin-right: .3em;
    }
    &.active,
    &:hover{
      color: #409ee1;
      .icon{
        fill: #409ee1;
      }
    }
    &.left{
      &.active{
        border-right: 2px solid #409ee1;
        margin-right: -2px;
      }
    }
    &.top{
      &.active{
        border-bottom: 2px solid #409ee1;
        margin-bottom: -2px;
      }
    }
    &.right{
      &.active{
        border-left: 2px solid #409ee1;
        margin-left: -2px;
      }
    }
    &.bottom{
      &.active{
        border-top: 2px solid #409ee1;
        margin-top: -2px;

      }
    }
    &.disabled{
      color: rgba(0,0,0,0.25);;
      cursor: not-allowed;
      border: none !important;
      .icon{
        fill: rgba(0,0,0,0.25);;
      }
    }
  }
</style>