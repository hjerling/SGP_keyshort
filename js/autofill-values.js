var originalPasswd;

chrome.tabs.executeScript( {
  code: "document.location.hostname;"
}, function(results) {
  document.getElementById("Domain").value = gp2_process_uri(results[0], false);
});

chrome.tabs.executeScript( {
  code: "$(':focus').val();"
}, function(results) {
	if(results.length > 0) {
		originalPasswd = results[0];
  		document.getElementById("Passwd").value = results[0];
  	}
});

function copyToClipboard(text) {
	clipboardholder = document.getElementById("clipboardholder"); 
	clipboardholder.style.display = "block"; 
	clipboardholder.value = text; 
	clipboardholder.select(); 
	document.execCommand("Copy"); 
	clipboardholder.style.display = "none"; 
}

document.getElementById("Generate").addEventListener('click',function () {
	var pwd = document.getElementById("Output").value;
	// copyToClipboard(pwd);
	if (typeof originalPasswd !== 'undefined') {
		chrome.tabs.executeScript( { 
			code: "var passwdElement = $('input').filter(function() { return this.value == '" + originalPasswd + "' });" + 
			      "passwdElement.val('" + pwd + "');" +
			      "passwdElement.css('background-color','lightgreen');" });
	}
},false);