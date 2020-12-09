import Vue from 'vue'
import { Tag, Container, Main, Header, Footer, Loading, Message, MessageBox, Button, Card, Table, TableColumn, Form, FormItem, Input, Row, Col, Popover, Breadcrumb, BreadcrumbItem, Dialog, Checkbox, CheckboxGroup, Pagination, Tooltip, Select, Option, Aside, TabPane, Tabs, Collapse, CollapseItem } from 'element-ui'

Vue.use(Button)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Row)
Vue.use(Col)
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(Footer)
Vue.use(Popover)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Dialog)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Pagination)
Vue.use(Loading)
Vue.use(Tooltip)
Vue.use(Select)
Vue.use(Option)
Vue.use(Aside)
Vue.use(TabPane)
Vue.use(Tabs)
Vue.use(Tag)
Vue.use(Collapse)
Vue.use(CollapseItem)


Vue.prototype.$message = Message;
Vue.prototype.$messageBox = MessageBox;
Vue.prototype.$loading = Loading;