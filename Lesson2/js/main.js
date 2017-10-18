window.onload = function(){


 	//часть 1
	var arr = [1,2,2,3,4,5,5,2,3,32];
	var array = document.getElementById('array');
	var arrayShow = document.getElementById('arrayShow');
	arrayShow.innerHTML = arr;
	//часть 2
	var twoDimensionArray = new Array(8);
	for (var i = 0; i < twoDimensionArray.length; i++) {
		twoDimensionArray[i] = Array(8);
	}
	for (var i = 0; i < twoDimensionArray.length; i++) {
		for (var j = 0; j < twoDimensionArray.length; j++) {
			twoDimensionArray[i][j] = Math.floor(Math.random()*10);
		}
	} 
	console.log(twoDimensionArray);

	document.write('<table style="border-collapse: collapse;">');
	for (var i = 0; i < twoDimensionArray.length; i++) {
		document.write('<tr>');
		for (var j = 0; j < twoDimensionArray.length; j++) {
			if ((i+j)%2 == 0) {
				document.write('<td style="border: 1px solid black; width: 50px; height: 50px; background-color: white"></td>');
			}
			else {
				document.write('<td style="border: 1px solid black; width: 50px; height: 50px; background-color: black"></td>');
			}
		}
		document.write('</tr>');
	} 


	for (var i = 0; i < twoDimensionArray.length; i++) {
	
		for (var j = 0; j < twoDimensionArray.length; j++) {
			if ((i+j)%2 == 0) {
				twoDimensionArray[i][j]='<div id="n' + i + j+'" style="display: inline-block; width: 50px; height: 50px; background-color: white"></div>';
			}
			else {
				twoDimensionArray[i][j]='<div id="n' + i + j+'" style="display: inline-block; width: 50px; height: 50px; background-color: black"></div>';
			}
		}
		
	} 
	for (var i = 0; i < twoDimensionArray.length; i++) {
		for (var j = 0; j < twoDimensionArray.length; j++){
			document.write(twoDimensionArray[i][j]);
		}
		document.write('<br>');
	}
	var whiteUnit_1 = document.getElementById('n60');
	var whiteUnit_2 = document.getElementById('n61');
	var whiteUnit_3 = document.getElementById('n62');
	var whiteUnit_4 = document.getElementById('n63');
	var whiteUnit_5 = document.getElementById('n64');
	var whiteUnit_6 = document.getElementById('n65');
	var whiteUnit_7 = document.getElementById('n66');
	var whiteUnit_8 = document.getElementById('n67');
	var whiteTower_1 = document.getElementById('n70');
	var whiteTower_2 = document.getElementById('n77');
	var whiteHorse_1 = document.getElementById('n71');
	var whiteHorse_2 = document.getElementById('n76');
	var whiteOfficer_1 = document.getElementById('n72');
	var whiteOfficer_2 = document.getElementById('n75');
	var whiteKing = document.getElementById('n74');
	var whiteQueen = document.getElementById('n73');

	whiteTower_1.innerHTML = '<img src="tw.png" width="50px" height="50px">';
	whiteTower_2.innerHTML = '<img src="tw.png" width="50px" height="50px">';
	whiteHorse_1.innerHTML = '<img src="kw.png" width="50px" height="50px">';
	whiteHorse_2.innerHTML = '<img src="kw.png" width="50px" height="50px">';
	whiteOfficer_1.innerHTML = '<img src="sw.png" width="50px" height="50px">';
	whiteOfficer_2.innerHTML = '<img src="sw.png" width="50px" height="50px">';
	whiteKing.innerHTML = '<img src="kingw.png" width="50px" height="50px">';
	whiteQueen.innerHTML = '<img src="qw.png" width="50px" height="50px">';
	whiteUnit_1.innerHTML = '<img src="pw.png" width="50px" height="50px">';
	whiteUnit_2.innerHTML = '<img src="pw.png" width="50px" height="50px">';
	whiteUnit_3.innerHTML = '<img src="pw.png" width="50px" height="50px">';
	whiteUnit_4.innerHTML = '<img src="pw.png" width="50px" height="50px">';
	whiteUnit_5.innerHTML = '<img src="pw.png" width="50px" height="50px">';
	whiteUnit_6.innerHTML = '<img src="pw.png" width="50px" height="50px">';
	whiteUnit_7.innerHTML = '<img src="pw.png" width="50px" height="50px">';
	whiteUnit_8.innerHTML = '<img src="pw.png" width="50px" height="50px">';

	var blackUnit_1 = document.getElementById('n10');
	var blackUnit_2 = document.getElementById('n11');
	var blackUnit_3 = document.getElementById('n12');
	var blackUnit_4 = document.getElementById('n13');
	var blackUnit_5 = document.getElementById('n14');
	var blackUnit_6 = document.getElementById('n15');
	var blackUnit_7 = document.getElementById('n16');
	var blackUnit_8 = document.getElementById('n17');
	// Towers
	var blackTower_1 = document.getElementById('n00');
	var blackTower_2 = document.getElementById('n07');
	// Horses
	var blackHorse_1 = document.getElementById('n01');
	var blackHorse_2 = document.getElementById('n06');
	//Officers
	var blackOfficer_1 = document.getElementById('n02');
	var blackOfficer_2 = document.getElementById('n05');
	//Elite
	var blackKing = document.getElementById('n04');
	var blackQueen = document.getElementById('n03');

	blackTower_1.innerHTML = '<img src="tb.png" width="50px" height="50px">';
	blackTower_2.innerHTML = '<img src="tb.png" width="50px" height="50px">';
	blackHorse_1.innerHTML = '<img src="kb.png" width="50px" height="50px">';
	blackHorse_2.innerHTML = '<img src="kb.png" width="50px" height="50px">';
	blackOfficer_1.innerHTML = '<img src="sb.png" width="50px" height="50px">';
	blackOfficer_2.innerHTML = '<img src="sb.png" width="50px" height="50px">';
	blackKing.innerHTML = '<img src="kingb.png" width="50px" height="50px">';
	blackQueen.innerHTML = '<img src="qb.png" width="50px" height="50px">';
	blackUnit_1.innerHTML = '<img src="pb.png" width="50px" height="50px">';
	blackUnit_2.innerHTML = '<img src="pb.png" width="50px" height="50px">';
	blackUnit_3.innerHTML = '<img src="pb.png" width="50px" height="50px">';
	blackUnit_4.innerHTML = '<img src="pb.png" width="50px" height="50px">';
	blackUnit_5.innerHTML = '<img src="pb.png" width="50px" height="50px">';
	blackUnit_6.innerHTML = '<img src="pb.png" width="50px" height="50px">';
	blackUnit_7.innerHTML = '<img src="pb.png" width="50px" height="50px">';
	blackUnit_8.innerHTML = '<img src="pb.png" width="50px" height="50px">';

	
}