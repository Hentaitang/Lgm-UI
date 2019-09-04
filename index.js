import Button from './src/button/button';
import Icon from './src/icon/icon';
import ButtonGroup from './src/button/button-group';
import Input from './src/input/input';
import Row from './src/grid/row';
import Col from './src/grid/col';
import Layout from './src/layout/layout';
import Header from './src/layout/header';
import Content from './src/layout/content';
import Footer from './src/layout/footer';
import Sider from './src/layout/sider';
import Toast from './src/toast/toast';
import Tabs from './src/tabs/tabs';
import TabsHead from './src/tabs/tabsHead';
import TabsItem from './src/tabs/tabsItem';
import TabsBody from './src/tabs/tabsBody';
import TabsPane from './src/tabs/tabsPane';
import Popover from './src/popover/popover';
import Collapse from './src/collapse/collapse';
import CollapseItem from './src/collapse/collapseItem';

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
  Sider,
  Toast,
  Tabs,
  TabsHead,
  TabsItem,
  TabsBody,
  TabsPane,
  Popover,
  Collapse,
  CollapseItem
];

components.forEach(component=>{
  if(component.name === 'lgm-toast') return;
  component.install = function (Vue) {
    Vue.component(component.name, component)
  }
});

const install = function(Vue){
  components.forEach(component => {
    if(component.name === 'lgm-toast') return Vue.use(component);
    Vue.component(component.name, component)
  })
};

export default {
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
  Sider,
  Toast,
  Tabs,
  TabsHead,
  TabsItem,
  TabsBody,
  TabsPane,
  Popover,
  Collapse,
  CollapseItem,
  install
}