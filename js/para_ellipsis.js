document.addEventListener('DOMContentLoaded', function() {
	var paragraphs = document.querySelectorAll('.boxPara p');
	var maxLength = 238;

	paragraphs.forEach(function(paragraph) {
		var text = paragraph.textContent;
		var res = text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
		paragraph.textContent = res;
	});
});















// -------------try 1

// document.addEventListener('DOMContentLoaded', function () {

// 	var elePara = document.querySelectorAll(".previewPara");
// 	var txtOfPara = elePara.textContent;

// 	var maxTxts = 190;

// 	var res = txtOfPara.length > maxTxts ? txtOfPara.slice(0, maxTxts)+"...THEERA..." : txtOfPara;

// 	// if (txtOfPara.length > maxTxts) {
// 	// 	var res = txtOfPara.slice(0, maxTxts)+"...";
// 	// }
// 	// else {
// 	// 	var res = txtOfPara;
// 	// }

// 	elePara.textContent = res;
// });

