var arr = new Array(8);
for (var i = 0; i < arr.length; i++) {
	arr[i] = new Array(8);
}
for (var i = 0; i < arr.length; i++) {
	for (var j = 0; j < arr.length; j++){
		if ((i+j)%2 == 0) {
			arr[i][j]='<div style="display: inline-block; width: 50px; height: 50px; background-color: white"></div>';
		}
		else{
   			arr[i][j] ='<div style = "display: inline-block; width:50px; height:50px; background-color: black"></div>';
   		}
   		//пешки
   		if (i == 6 && (j%2) == 0) {
			arr[i][j]='<img src="C:/Users/Рита/Desktop/Chess/whitePawn.jpg" width="50px" height="50px">';
		}
		if (i == 6 && (j%2) == 1) {
			arr[i][j]='<img src="C:/Users/Рита/Desktop/Chess/whitePawnBackBlack.jpg" width="50px" height="50px">';
		}
		if (i == 1 && (j%2) == 1) {
			arr[i][j]='<img src="C:/Users/Рита/Desktop/Chess/blackPawn.jpg" width="50px" height="50px">';
		}
		if (i == 1 && (j%2) == 0) {
			arr[i][j]='<img src="C:/Users/Рита/Desktop/Chess/blackPawnBackBlack.jpg" width="50px" height="50px">';
		}
		//белые фигуры
		arr[7][0]='<img src="C:/Users/Рита/Desktop/Chess/whiteRookBackBlack.jpg" width="50px" height="50px">';
		arr[7][7]='<img src="C:/Users/Рита/Desktop/Chess/whiteRook.jpg" width="50px" height="50px">';
		arr[7][1]='<img src="C:/Users/Рита/Desktop/Chess/whiteKnight.jpg" width="50px" height="50px">';
		arr[7][6]='<img src="C:/Users/Рита/Desktop/Chess/whiteKnightBackBlack.jpg" width="50px" height="50px">';
		arr[7][2]='<img src="C:/Users/Рита/Desktop/Chess/whiteBishopBackBlack.jpg" width="50px" height="50px">';
		arr[7][5]='<img src="C:/Users/Рита/Desktop/Chess/whiteBishop.jpg" width="50px" height="50px">';
		arr[7][3]='<img src="C:/Users/Рита/Desktop/Chess/whiteQueen.jpg" width="50px" height="50px">';
		arr[7][4]='<img src="C:/Users/Рита/Desktop/Chess/whiteKingBackBlack.jpg" width="50px" height="50px">';
		//чёрные фигуры
		arr[0][0]='<img src="C:/Users/Рита/Desktop/Chess/blackRook.jpg" width="50px" height="50px">';
		arr[0][7]='<img src="C:/Users/Рита/Desktop/Chess/blackRookBackBlack.jpg" width="50px" height="50px">';
		arr[0][1]='<img src="C:/Users/Рита/Desktop/Chess/blackKnightBackBlack.jpg" width="50px" height="50px">';
		arr[0][6]='<img src="C:/Users/Рита/Desktop/Chess/blackKnight.jpg" width="50px" height="50px">';
		arr[0][2]='<img src="C:/Users/Рита/Desktop/Chess/blackBishop.jpg" width="50px" height="50px">';
		arr[0][5]='<img src="C:/Users/Рита/Desktop/Chess/blackBishopBackBlack.jpg" width="50px" height="50px">';
		arr[0][3]='<img src="C:/Users/Рита/Desktop/Chess/blackQueenBackBlack.jpg" width="50px" height="50px">';
		arr[0][4]='<img src="C:/Users/Рита/Desktop/Chess/blackKing.jpg" width="50px" height="50px">';
   	}
}
for (var i = 0; i < arr.length; i++) {
	for (var j = 0; j < arr.length; j++){
		document.write(arr[i][j]);
	}
	document.write('<br>');
}
