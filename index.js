import Button from './src/button';
import Icon from './src/icon';
import ButtonGroup from './src/button-group';
import Input from './src/input';
import Row from './src/row';
import Col from './src/col';
import Layout from './src/layout';
import Header from './src/header';
import Content from './src/content';
import Footer from './src/footer';
import Sider from './src/sider';

const components = [
  Button,
  Icon,
  ButtonGroup,
  Input,
  Row,
  Col,
  Layout,
  Header,
  Content,
  Footer,
  Sider
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

export default {Button, Icon, ButtonGroup, Input, Row, Col,Layout, Header, Content, Footer, Sider, install}