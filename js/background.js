shortcut.add("Ctrl+Shift+1",function() {
	var content = $(':focus');
	content.val(supergenpass(content.val(), supergenpass.hostname(document.location.hostname), {}));
	content.css('background-color','lightgreen');
	content.css('box-shadow','0 0 10px 0 green inset');
});

shortcut.add("Ctrl+Shift+2",function() {
	var content = $(':focus');
	var domain = prompt("Url:", "ex. google.com");
	content.val(supergenpass(content.val(), domain, {}));
    content.css('background-color','lightgreen');
    content.css('box-shadow','0 0 10px 0 green inset');
});