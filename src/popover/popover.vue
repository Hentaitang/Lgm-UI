<template>
  <div class="lgm-popover">
    <div class="contentWrapper" v-if="visible" ref="content" :class="{[position]: position}">
      <slot name="content" :close="popoverClose"></slot>
    </div>
    <span ref="button" class="button">
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
        validator(value) {
          return ['top', 'left', 'right', 'bottom'].indexOf(value) >= 0
        }
      },
      trigger: {
        type: String,
        default: 'click',
        validator(value) {
          return ['click', 'hover'].indexOf(value) >= 0
        }
      }
    },
    data() {
      return {
        visible: false,
        leaveTimer: null
      }
    },
    mounted() {
      const {button} = this.$refs;
      if (this.trigger === 'click') {
        button.addEventListener('click', this.clickButton)
      } else {
        button.addEventListener('mouseenter', this.popoverOpen);
        button.addEventListener('mouseleave', this.mouseLeave)
      }
    },
    beforeDestroy(){
      const {button} = this.$refs;
      if (this.trigger === 'click') {
        button.removeEventListener('click', this.clickButton)
      } else {
        button.removeEventListener('mouseenter', this.popoverOpen);
        button.removeEventListener('mouseleave', this.mouseLeave)
      }
    },
    methods: {
      mouseLeave(){
        this.leaveTimer = setTimeout(this.popoverClose, 100)
      },
      popoverClose() {
        const {content} = this.$refs;
        this.visible = false;
        if (this.trigger === 'click') {
          document.removeEventListener('click', this.clickOutside);
        } else {
          content.removeEventListener('mouseenter', this.popoverOpen);
          content.removeEventListener('mouseleave', this.mouseLeave)
        }
      },
      popoverOpen() {
        if (this.visible) return clearTimeout(this.leaveTimer);
        this.visible = true;
        this.$nextTick(() => {
          const {content} = this.$refs;
          this.contentPosition();
          if (this.trigger === 'click') {
            document.addEventListener('click', this.clickOutside);
          } else {
            content.addEventListener('mouseenter', this.popoverOpen);
            content.addEventListener('mouseleave', this.mouseLeave)
          }
        })
      },
      contentPosition() {
        const {content} = this.$refs;
        document.body.appendChild(content);
        const {left, right, top, bottom, height} = this.$refs.button.getBoundingClientRect();
        switch (this.position) {
          case 'top':
            content.style.left = left + window.scrollX + 'px';
            content.style.top = top + window.scrollY + 'px';
            break;
          case 'left':
            content.style.left = left + window.scrollX + 'px';
            content.style.top = top + height / 2 + window.scrollY + 'px';
            break;
          case 'right':
            content.style.left = right + window.scrollX + 'px';
            content.style.top = top + height / 2 + window.scrollY + 'px';
            break;
          case 'bottom':
            content.style.left = left + window.scrollX + 'px';
            content.style.top = bottom + window.scrollY + 'px';
            break;
        }
      },
      clickOutside($event) {
        if (this.$refs.button && this.$refs.button.contains($event.target)) return;
        if (this.$refs.content && this.$refs.content.contains($event.target)) return;
        this.popoverClose()
      },
      clickButton() {
        if (this.visible === false) {
          this.popoverOpen()
        } else {
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
      cursor: pointer;
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
    font-size: 14px;

    &::before,
    &::after {
      content: '';
      display: block;
      border: 10px solid transparent;
      position: absolute;
    }

    &.top {
      margin-top: -10px;
      transform: translateY(-100%);
      filter: drop-shadow(0 1px 1px rgba(0, 0, 0, .5));

      &::before {
        top: 100%;
        border-top-color: black;
        border-bottom: none;
      }

      &::after {
        top: calc(100% - 1px);
        border-top-color: white;
        border-bottom: none;
      }
    }

    &.bottom {
      margin-top: 10px;
      filter: drop-shadow(0 -1px 1px rgba(0, 0, 0, .5));

      &::before {
        bottom: 100%;
        border-bottom-color: black;
        border-top: none;
      }

      &::after {
        bottom: calc(100% - 1px);
        border-bottom-color: white;
        border-top: none;
      }
    }

    &.left {
      transform: translate(-100%, -50%);
      margin-left: -10px;
      filter: drop-shadow(1px 0px 1px rgba(0, 0, 0, .5));

      &::before {
        top: 50%;
        left: 100%;
        border-left-color: black;
        border-right: none;
        transform: translateY(-50%);
      }

      &::after {
        top: 50%;
        left: calc(100% - 1px);
        border-left-color: white;
        border-right: none;
        transform: translateY(-50%);
      }
    }

    &.right {
      margin-left: 10px;
      transform: translateY(-50%);
      filter: drop-shadow(-1px 0px 1px rgba(0, 0, 0, .5));

      &::before {
        top: 50%;
        right: 100%;
        border-right-color: black;
        border-left: none;
        transform: translateY(-50%);
      }

      &::after {
        top: 50%;
        right: calc(100% - 1px);
        border-right-color: white;
        border-left: none;
        transform: translateY(-50%);
      }
    }
  }
</style>