<template>
  <div class="allIcons">
    <div class="iconWrapper" v-for="icon in icons" :key="icon" @click="() => showToast(icon)">
      <lgm-icon :icon="icon"></lgm-icon>
      <div>{{icon}}</div>
    </div>
  </div>
</template>
<script>
  import Icon from '../../../../src/icon/icon';
  import Toast from '../../../../src/toast/toast';
  export default {
    data() {
      return {
        icons: [
          'i-infoFilled', 'i-checkFilled', 'i-warning', 'i-loading1', 'i-error', 'i-loading', 'i-reset', 'i-home', 'i-cleanup', 'i-password',
          'i-image', 'i-skinning', 'i-snapshot', 'i-search_list', 'i-label', 'i-left', 'i-search', 'i-zoomin', 'i-zoomout', 'i-close' , 'i-check',
          'i-down', 'i-up', 'i-arrawsalt', 'i-shrink', 'i-phone', 'i-team', 'i-user', 'i-setting', 'i-poweroff', 'i-reload', 'i-redo', 'i-undo',
          'i-sync', 'i-warning-circle', 'i-up-circle', 'i-timeout', 'i-trademark', 'i-smile', 'i-right-circle', 'i-play-circle', 'i-plus-circle',
          'i-minus-circle', 'i-down-circle', 'i-left-circle', 'i-info-circle', 'i-close-circle', 'i-check-circle', 'i-delete', 'i-right', 'i-jia',
          'i-jian'
        ]
      }
    },
    components: {
      [Icon.name]: Icon
    },
    methods: {
      showToast(icon){
        const input = document.createElement('input');
        input.value = icon;
        document.body.appendChild(input);
        input.select();
        document.execCommand('Copy');
        document.body.removeChild(input);
        Toast.use({type: 'success', message: `已复制 ${icon} 到剪切板`})
      }
    }
  }
</script>

<style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }
  .allIcons{
    padding: 1em 0;
    display: flex;
    flex-wrap: wrap;
    .iconWrapper{
      width: calc(20% - 2px);
      height: 100px;
      cursor: pointer;
      border: 1px solid transparent;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      div{
        margin-top: 1em;
        font-size: 12px;
      }
      .lgm-icon{
        font-size: 26px;
      }

      &:hover{
        border: 1px solid #10d291;
        color: #10d291;
        .lgm-icon{
          fill: #10d291;
        }
      }
    }
    @media (max-width: 768px){
      .iconWrapper{
        width: calc(25% - 2px);
      }
    }
  }
</style>