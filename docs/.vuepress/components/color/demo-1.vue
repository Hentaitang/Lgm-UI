<template>
  <div class="colorWrapper">
    <h1>默认色</h1>
    <section>
      <div class="normalColor" v-for="val in normalColor" :key="val" :style="{backgroundColor: val}" @click="() => toastShow(val)">
        <span>{{val}}</span>
      </div>
    </section>
    <h1>基础色</h1>
    <div class="basicWrapper" v-for="name in basicNames" :key="name">
      <span>{{name}}</span>
      <section>
        <div class="basicColor" v-for="basic in basicColor[name]" :key="basic" :style="{backgroundColor: basic}" @click="() => toastShow(basic)">
          <span>{{basic}}</span>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import Toast from '../../../../src/toast/toast';
  export default {
    data() {
      return {
        copyValue: '',
        normalColor: ['#ffffff', '#eeeeee', '#dddddd', '#606266'],
        basicNames: ['Primary', 'Success', 'Danger', 'Warning', 'Info'],
        basicColor: {
          Primary: ['#a0cfff', '#66aeff', '#409eff', '#109eff'],
          Success: ['#a9e999', '#75e291', '#44e291', '#10d291'],
          Danger: ['#fab6b6', '#fd8989', '#eb7070', '#db7070'],
          Warning: ['#f3d19e', '#ffd771', '#fec771', '#dec771'],
          Info: ['#bbbbbb', '#999999', '#888888', '#777777'],
        }
      }
    },
    methods: {
      toastShow(text){
        const input = document.createElement('input');
        input.value = text;
        document.body.appendChild(input);
        input.select();
        document.execCommand("Copy");
        document.body.removeChild(input);
        Toast.use({type: 'success', message: `已复制 ${text} 到剪切板`, duration: 1500})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .colorWrapper {
    section {
      display: flex;
      flex-wrap: wrap;

      .normalColor, .basicColor {
        cursor: pointer;
        overflow: hidden;
        width: calc(25% - 52px);
        padding: 25px 20px;
        border-radius: 5px;
        margin: 0 10px 10px 0;
        border: 1px solid rgb(238, 238, 238);
        font-size: 14px;
        &:hover{
          border: 1px solid #10d291;
        }
      }
    }

    .basicWrapper {
      section {
        margin-top: .5em;
      }
    }
  }
</style>