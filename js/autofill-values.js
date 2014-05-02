chrome.tabs.executeScript( {
  code: "document.location.hostname;"
}, function(results) {
  document.getElementById("Domain").value = gp2_process_uri(results[0], false);
});

chrome.tabs.executeScript( {
  code: "$(':focus').val();"
}, function(results) {
	console.log(results[0])
  document.getElementById("Passwd").value = results[0];
});

// var clippy = ['<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="110" height="14" id="clippy">',
// 			   '<param name="movie" value="/swf/clippy.swf"/>',
// 			   '<param name="allowScriptAccess" value="always" />',
// 			   '<param name="quality" value="high" />',
// 			   '<param name="scale" value="noscale" />',
// 			   '<param NAME="FlashVars" value="text=' + $('#Output').val() +'">',
// 			   '<param name="bgcolor" value="#FFFFFF">',
// 			   '<embed src="/swf/clippy.swf"',
// 			   '       width="110"',
// 			   '       height="14"',
// 			   '       name="clippy"',
// 			   '       quality="high"',
// 			   '       allowScriptAccess="always"',
// 			   '       type="application/x-shockwave-flash"',
// 			   '       pluginspage="http://www.macromedia.com/go/getflashplayer"',
// 			   '       FlashVars="text=' + $('#Output').val() +'"',
// 			   '       bgcolor="#FFFFFF"',
// 			   '/>',
// 			   '</object>'].join('\n');
			   
// $('#clippy').append(clippy);