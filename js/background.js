shortcut.add("Ctrl+Shift+1",function() {
	chrome.storage.sync.get({
    secretPassword: 'sPassword',
    passwordLength: 'passwordLength',
    hashMethod: 'hashMethod'
  }, function(items) {
	var content = $(':focus');
	content.val(supergenpass(content.val(), 
		supergenpass.hostname(document.location.hostname), 
		{secret: items.secretPassword, 
		 length: parseInt(items.passwordLength), 
		 method: items.hashMethod}
	));
	content.css('background-color','lightgreen');
	content.css('box-shadow','0 0 10px 0 green inset');
  });
});

shortcut.add("Ctrl+Shift+2",function() {
	chrome.storage.sync.get({
    secretPassword: 'sPassword',
    passwordLength: 'passwordLength',
    hashMethod: 'hashMethod'
  }, function(items) {
	var content = $(':focus');
	var domain = prompt("Url:", "ex. google.com");
	content.val(supergenpass(content.val(), 
		domain, 
		{secret: items.secretPassword, 
		 length: parseInt(items.passwordLength), 
		 method: items.hashMethod}
	));
	content.css('background-color','lightgreen');
	content.css('box-shadow','0 0 10px 0 green inset');
  });
});