import Button from './src/button'
import Icon from './src/icon'
import ButtonGroup from './src/button-group'

const components = [
  Button,
  Icon,
  ButtonGroup
];

const install = function(Vue){
  components.forEach(component => {
    Vue.component(component.name, component)
  })
};

export default {Button, Icon, ButtonGroup, install}