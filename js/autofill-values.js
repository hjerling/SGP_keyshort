chrome.tabs.executeScript( {
  code: "document.location.hostname;"
}, function(results) {
  document.getElementById("Domain").value = gp2_process_uri(results[0], false);
});

chrome.tabs.executeScript( {
  code: "$(':focus').val();"
}, function(results) {
  document.getElementById("Passwd").value = results[0];
});

chrome.tabs.executeScript( {
  code: ""
}, function(results) {
	var potentialPassword = gp2_generate_passwd($("#Passwd").val() + ':' + $("#Domain").val(), 10);
	var clippy = ['<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="110" height="14" id="clippy">',
				   '<param name="movie" value="/swf/clippy.swf"/>',
				   '<param name="allowScriptAccess" value="always" />',
				   '<param name="quality" value="high" />',
				   '<param name="scale" value="noscale" />',
				   '<param NAME="FlashVars" value="text=' + potentialPassword +'">',
				   '<param name="bgcolor" value="#FFFFFF">',
				   '<embed src="/swf/clippy.swf"',
				   '       width="110"',
				   '       height="14"',
				   '       name="clippy"',
				   '       quality="high"',
				   '       allowScriptAccess="always"',
				   '       type="application/x-shockwave-flash"',
				   '       pluginspage="http://www.macromedia.com/go/getflashplayer"',
				   '       FlashVars="text=' + potentialPassword +'"',
				   '       bgcolor="#FFFFFF"',
				   '/>',
				   '</object>'].join('\n');

	$('#clippy').append(clippy);  
});
