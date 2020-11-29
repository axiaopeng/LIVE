//手机号校验
const re_phone = '/^1[3|4|5|7|8][0-9]{9}$/'
//密码校验     8-18位长度,数字,字母,字符 任意两种,不含中文
const re_pwd = '/^(?!^(\\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\\w~!@#$%^&*?]{8,18}$/'
//邮箱
const re_email = '/[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/'





module.exports = {
	re_email,
	re_phone,
	re_pwd
}