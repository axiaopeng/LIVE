const baseUrl = 'http://192.168.0.103:4000' 
const timeout =  10000 //超时时间
let  ajaxTimes = 0; // 用于处理同时发送异步代码，防止一次点击中有多次请求
export const $ = (pars) => {
	let url  = baseUrl + pars.url;
	let header = {...pars.header};
	if(pars.url != '/user/regi_u'&&pars.url!='/user/login_u'){
		header["Authorization"] = uni.getStorageSync('token')
	}
	ajaxTimes ++;
	uni.showLoading({
		title: "加载中",
		mask:true
	})
	return new Promise((resolve, reject) => {
		uni.request({
			url: url,
			method:pars.method,
			data: pars.data,
			header,
			timeout: timeout,
			success: (res) => {
				resolve(res.data)
			},
			fail: (err) => {
				reject(err)
			},
			complete: () => {
				// 每次完成请求后减1
				ajaxTimes--;
				if(ajaxTimes === 0){
					// 当所有请求都结束时关闭加载效果
					uni.hideLoading();
				}
			}
		})
	})
}





// const get = async  function (obj){
// 	var url = '?';
// 	if(obj.body){
// 		for( let i in obj.body){
// 			url += i+'='+obj.body[i]+'&'
// 		}
// 		url = url.substr(0,url.length-1)
// 	}
// 	const res = await (await fetch(baseUrl+obj.url+url,{
// 			method: "GET",
// 			headers:obj.headers?obj.headers:{ 'Content-Type': 'application/json' },
// 			mode:obj.mode?obj.mode:'cors'
// 	})).json()
	
// 	return res
// } 

// const post = async  function (obj){
// 	console.log('aaa')
// 	const res = await (await fetch(baseUrl+obj.url,{
// 			method: "POST",
// 			headers:obj.headers?obj.headers:{ 'Content-Type': 'application/json' },
// 			mode:obj.mode?obj.mode:'cors',
// 			body: JSON.stringify(obj.body)
// 	})).json()

// 	return res
// } 

// export default {
// 	post
// }