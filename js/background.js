shortcut.add("Ctrl+Shift+1",function() {
	var content = $(':focus');
	content.val(gp2_generate_passwd(content.val() + ':' + gp2_process_uri(document.location.hostname, false), 10));
	content.css('background-color','lightgreen');
});

shortcut.add("Ctrl+Shift+2",function() {
	var content = $(':focus');
	var domain = prompt("Url:", "ex. google.com");
	content.val(gp2_generate_passwd(content.val() + ':' + domain, 10));
    content.css('background-color','lightgreen');
});