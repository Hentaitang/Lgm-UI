<template>
  <svg class="lgm-icon" :class="iconClass" @click="$emit('click', $event)">
    <use :xlink:href="`#${icon}`"></use>
  </svg>
</template>
<script>
  import './svg'

  export default {
    name: "lgm-icon",
    props: {
      icon: {
        type: String
      },
      spin: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      iconClass() {
        return {
          loadingIcon: this.icon === 'i-loading' || this.spin
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .lgm-icon {
    width: 1em;
    height: 1em;

    &.loadingIcon {
      animation: loading 1.5s infinite linear;
    }
  }
</style>