import Vue from 'vue'
import { Container, Main, Header, Footer, Loading, Message, MessageBox, Button, Card, Table, TableColumn, Form, FormItem, Input, Row, Col } from 'element-ui'

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


Vue.prototype.$message = Message;
Vue.prototype.$messageBox = MessageBox;
Vue.prototype.$loading = Loading;