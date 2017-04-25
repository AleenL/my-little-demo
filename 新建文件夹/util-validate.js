//规定输入的值

function isLegalUsername(str){
	return /^[A-Za-z_0-9]{3,10}$/.test(str);
}
//合法的用户名，3-10个字符

function isLegalPassword(str){
	if(str.length<6||str.length>16){
		return false;
	}
	if(/[^A-Za-z_0-9]/.test(str)){
		return false;
	}
	if(/(^[a-z]+$)|(^[A-Z]+$)|(^_+$)|(^\d+$)/g.test(str)){
		return false;
	}
	return true
}

function isLegalphone(str){
	return /^1[3-9]\d{9}$/.test(str)
}