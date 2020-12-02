
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/tabbar/order","pages/tabbar/store","pages/tabbar/statistics","pages/tabbar/goods","pages/index/register","pages/index/codeLogin","pages/index/forgetPs","pages/index/modifyPs","pages/examine/result","pages/examine/index","pages/orders/order-detail","pages/orders/orders-find","pages/goods/add","pages/stores/store_account","pages/stores/store_manage","pages/stores/store_cash","pages/stores/choose_account","pages/stores/store_cash_record","pages/stores/store_cash_account","pages/stores/manage","pages/stores/account_manage","pages/stores/Live","pages/stores/liveregi","pages/stores/mation"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#BFBFBF","selectedColor":"#4688FA","backgroundColor":"#ffffff","list":[{"pagePath":"pages/tabbar/order","iconPath":"static/tab-bar/order.png","selectedIconPath":"static/tab-bar/order-active.png","text":"订单"},{"pagePath":"pages/tabbar/goods","iconPath":"static/tab-bar/goods.png","selectedIconPath":"static/tab-bar/goods-active.png","text":"商品"},{"pagePath":"pages/tabbar/statistics","iconPath":"static/tab-bar/statistics.png","selectedIconPath":"static/tab-bar/statistics-active.png","text":"统计"},{"pagePath":"pages/tabbar/store","iconPath":"static/tab-bar/store.png","selectedIconPath":"static/tab-bar/store-active.png","text":"店铺"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"apshop","compilerVersion":"2.9.8","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/tabbar/order","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/tabbar/store","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/tabbar/statistics","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/tabbar/goods","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/index/register","meta":{},"window":{"navigationBarTitleText":"注册","navigationBarBackgroundColor":"#ffffff"}},{"path":"/pages/index/codeLogin","meta":{},"window":{"navigationBarBackgroundColor":"#ffffff","navigationBarTitleText":""}},{"path":"/pages/index/forgetPs","meta":{},"window":{"navigationBarTitleText":"忘记密码","navigationBarBackgroundColor":"#ffffff"}},{"path":"/pages/index/modifyPs","meta":{},"window":{"navigationBarTitleText":"修改密码","navigationBarBackgroundColor":"#ffffff"}},{"path":"/pages/examine/result","meta":{},"window":{"navigationBarTitleText":"店铺资料审核","navigationBarBackgroundColor":"#ffffff"}},{"path":"/pages/examine/index","meta":{},"window":{"navigationBarTitleText":"店铺审核资料","navigationBarBackgroundColor":"#ffffff"}},{"path":"/pages/orders/order-detail","meta":{},"window":{"navigationBarTitleText":"订单详情","navigationBarBackgroundColor":"#ffffff"}},{"path":"/pages/orders/orders-find","meta":{},"window":{"navigationBarBackgroundColor":"#ffffff","navigationStyle":"custom"}},{"path":"/pages/goods/add","meta":{},"window":{"navigationBarBackgroundColor":"#ffffff","navigationBarTitleText":"添加商品"}},{"path":"/pages/stores/store_account","meta":{},"window":{"navigationBarBackgroundColor":"#ffffff","navigationBarTitleText":"账户流水"}},{"path":"/pages/stores/store_manage","meta":{},"window":{"navigationBarBackgroundColor":"#ffffff","navigationBarTitleText":"资金管理"}},{"path":"/pages/stores/store_cash","meta":{},"window":{"navigationBarBackgroundColor":"#ffffff","navigationBarTitleText":"提现"}},{"path":"/pages/stores/choose_account","meta":{},"window":{"navigationBarBackgroundColor":"#ffffff","navigationBarTitleText":"选择账户","titleNView":{"buttons":[{"text":"添加","fontSize":"14","float":"right"}]}}},{"path":"/pages/stores/store_cash_record","meta":{},"window":{"navigationBarBackgroundColor":"#ffffff","navigationBarTitleText":"提现记录"}},{"path":"/pages/stores/store_cash_account","meta":{},"window":{"navigationBarBackgroundColor":"#ffffff","navigationBarTitleText":"提现账号","titleNView":{"buttons":[{"text":"添加","fontSize":"14","float":"right"}]}}},{"path":"/pages/stores/manage","meta":{},"window":{"navigationBarBackgroundColor":"#ffffff","navigationBarTitleText":"设置"}},{"path":"/pages/stores/account_manage","meta":{},"window":{"navigationBarBackgroundColor":"#ffffff","navigationBarTitleText":"账号管理"}},{"path":"/pages/stores/Live","meta":{"isNVue":true},"window":{"navigationBarBackgroundColor":"#ffffff","navigationStyle":"custom"}},{"path":"/pages/stores/liveregi","meta":{},"window":{"navigationBarBackgroundColor":"#ffffff","navigationStyle":"custom"}},{"path":"/pages/stores/mation","meta":{},"window":{"navigationBarBackgroundColor":"#ffffff","navigationBarTitleText":"消息","titleNView":{"buttons":[{"text":"全部已读","fontSize":"14","float":"right"}]}}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});