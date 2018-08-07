<!--通过判断节点类型来获取不同的输出-->
window.onload = function(){
	var box = document.getElementById('box');
	for(var i = 0; i<box.childNodes.length; i++){
		if(box.childNodes[i].nodeType === 1){
			alert('元素节点：' + box.childNodes[i].nodeName);
		}else if(box.childNodes[i].nodeType === 3){
			alert('文本节点：' + box.childNodes[i].nodeValue);
		}
	}
};