import Button from './src/button';
import Icon from './src/icon';
import ButtonGroup from './src/button-group';
import Input from './src/input';
import Row from './src/row';
import Col from './src/col'

const components = [
  Button,
  Icon,
  ButtonGroup,
  Input,
  Row,
  Col
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

export default {Button, Icon, ButtonGroup, Input, Row, Col, install}