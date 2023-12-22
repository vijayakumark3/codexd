// document.addEventListener('DOMContentLoaded', function() {
// 	var elePara = document.querySelectorAll('.previewPara');
// 	var maxLength = 190;

// 	elePara.forEach(function(paragraph) {
// 		var text = paragraph.textContent;
// 		var res = text.length > maxLength ? text.slice(0, maxLength) + '...SOORA...' : text;
// 		paragraph.textContent = res;
// 	});
// });





// ---------------------------




var elePara = document.querySelectorAll(".previewPara");
var txtOfPara = elePara.textContent;

var maxTxts = 190;

var res = txtOfPara.length > maxTxts ? txtOfPara.slice(0, maxTxts)+"...VEERA..." : txtOfPara;

// if (txtOfPara.length > maxTxts) {
// 	var res = txtOfPara.slice(0, maxTxts)+"...";
// }
// else {
// 	var res = txtOfPara;
// }

elePara.textContent = res;


