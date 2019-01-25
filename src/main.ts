import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import * as filters from '@/filters';
import VueProgressBar from 'vue-progressbar';
import Config from '@/config';
// import globalComponents from '@/components/global';
import * as elementComponents from 'element-ui';

import '@/styles/element.scss';
import '@/styles/style.scss';

Vue.config.productionTip = false;

const componentsName = [
  'Pagination',
  'Dialog',
  'Autocomplete',
  'Dropdown',
  'DropdownMenu',
  'DropdownItem',
  'Menu',
  'Submenu',
  'MenuItem',
  'MenuItemGroup',
  'Input',
  'InputNumber',
  'Radio',
  'RadioGroup',
  'RadioButton',
  'Checkbox',
  'CheckboxButton',
  'CheckboxGroup',
  'Switch',
  'Select',
  'Option',
  'OptionGroup',
  'Button',
  'ButtonGroup',
  'Table',
  'TableColumn',
  'DatePicker',
  'TimeSelect',
  'TimePicker',
  'Popover',
  'Tooltip',
  'Breadcrumb',
  'BreadcrumbItem',
  'Form',
  'FormItem',
  'Tabs',
  'TabPane',
  'Tag',
  'Tree',
  'Alert',
  'Slider',
  'Icon',
  'Row',
  'Col',
  'Upload',
  'Progress',
  'Spinner',
  'Badge',
  'Card',
  'Rate',
  'Steps',
  'Step',
  'Carousel',
  'Scrollbar',
  'CarouselItem',
  'Collapse',
  'CollapseItem',
  'Cascader',
  'ColorPicker',
  'Transfer',
  'Container',
  'Header',
  'Aside',
  'Main',
  'Footer',
  'CollapseTransition',
];

componentsName.forEach(name => {
  const component = elementComponents[name];
  if (component.name) {
    if (name === 'Switch') {
      name = component.name;
    }
    Vue.component(name, component );
  }
});

Vue.prototype.$loading = elementComponents.Loading.service;
Vue.prototype.$msgbox = elementComponents.MessageBox;
Vue.prototype.$alert = elementComponents.MessageBox.alert;
Vue.prototype.$confirm = elementComponents.MessageBox.confirm;
Vue.prototype.$prompt = elementComponents.MessageBox.prompt;
Vue.prototype.$notify = elementComponents.Notification;
Vue.prototype.$message = elementComponents.Message;


Vue.prototype.$ELEMENT = {
  size: 'small',
  zIndex:  2000,
};


Vue.prototype.$Config = Config;

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

// Object.keys(globalComponents).forEach(key => {
//   Vue.component(key, globalComponents[key]);
// });


Vue.use(VueProgressBar, {
  color: '#FF0000',
  failedColor: 'red',
  height: '10px',
});


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
