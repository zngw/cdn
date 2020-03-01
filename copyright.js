jQuery(document).on('copy', function(t) {
    var selected = window.getSelection();
    var selectedText = selected.toString();
	
	// 复制长度大于140字符串才会触发版权信息
	// 由于冒泡调用问题，oncopy会被调用二次，暂时没找到好的解决办法，临时存在家地址判断是否已经添加了
	if(selectedText.length>140 && selectedText.search(document.location.href) == -1){
		
		// 这里取网页中 <meta property="article:author" content="过客"> 作者的属性，可以根据自己网页取需要的
		var copyFooter = '\r\n————————————————\r\n'+
		'版权声明：本文为「'+$("meta[property='article:author']").attr("content")+'」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。\r\n'+
		'原文链接：' + document.location.href;
		
		if (t.clipboardData) {
			t.clipboardData.setData("text/plain", selected + copyFooter);
		} else {
			if (window.clipboardData) {
				return window.clipboardData.setData("text", selected + copyFooter);
			}
			(a = document.createElement("textarea")).style.cssText = "position: fixed;z-index: -10;top: -50px;left: -50px;",
			a.innerHTML = selected + copyFooter,
			document.getElementsByTagName('body')[0].appendChild(a),
			a.select(),
			setTimeout(function() {
				document.execCommand('copy');
			}, 0);
		}
	}
});
