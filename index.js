import Button from './src/button'
import Icon from './src/icon'
import ButtonGroup from './src/button-group'
import Input from './src/input'

const components = [
  Button,
  Icon,
  ButtonGroup,
  Input
];

components.forEach(component=>{
  component.install = function (Vue) {
    Vue.component(component.name, component)
  }
});

const install = function(Vue){
  components.forEach(component => {
    Vue.component(component.name, component)
  })
};

export default {Button, Icon, ButtonGroup, Input, install}