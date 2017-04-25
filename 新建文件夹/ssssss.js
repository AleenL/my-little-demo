//控制点击按钮之间的间隔时间
var wait=60;//设置等待时间
function change(){
	var click=document.getElementById("btn");//选取按钮
	if(wait=0){
		click.removerAttr("disabled");//移除禁用按钮
		wait=60;
	}
	else {
	click.attr("disable","disable");//否则禁用按钮
	click.attr("font-color","#ccc");//设置禁用按钮样式
	wait--;//设置自减
	}
	setTimeout(function(){change()},1000);//
}
