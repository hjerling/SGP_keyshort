var originalPasswd;

chrome.tabs.executeScript( {
  code: "document.location.hostname;"
}, function(results) {
  $('#Domain').val(supergenpass.hostname(results[0]));
});

chrome.tabs.executeScript( {
  code: "$(':focus').val();"
}, function(results) {
	if(results.length > 0) {
		originalPasswd = results[0];
  		  $('#Passwd').val(results[0]);
  	}
});

$('#Generate').click(function () {
	var givenPassWd = $('#Passwd').val();
    var givenDomain = $('#Domain').val();

	if(!givenPassWd) {
          $('#PasswdField').addClass('Missing');
    }
	if(!givenDomain) {
          $('#DomainField').addClass('Missing');
    }

    if (givenPassWd && givenDomain) {
		var pwd = supergenpass(givenPassWd, givenDomain, {})
	    
		if (typeof originalPasswd !== 'undefined') {
			chrome.tabs.executeScript( { 
				code: "var passwdElement = $('input').filter(function() { return this.value == '" + originalPasswd + "' });" + 
				      "passwdElement.val('" + pwd + "');" +
				      "passwdElement.css('background-color','lightgreen');" +
				      "passwdElement.css('box-shadow','0 0 10px 0 green inset');"});
		}
		$('#Generate').hide();
		$('#Output').text(pwd);
		$('#Mask').show();
	}
});

$('#Mask').click(function () {
	$('#Mask').hide();
	$('#Output').show();
});
