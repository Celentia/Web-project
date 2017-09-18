var level = prompt('Выберите уровень сложности: лёгкий, средний или сложный').toLowerCase();
if (level == 'лёгкий' || level == 'легкий') { 	
	var count = 5;
	alert('Есть цвета радуги: красный, оранжевый, жёлтый, зелёный, голубой, синий, фиолетовый. Вам необходимо угадать цвет из вышеперечисленных за 5 попыток.')
	do {
		var tryColor = prompt('Введите цвет радуги: ');
		if (tryColor != 'голубой') {
			count--; 
			if (count == 0) {
			alert('Вы не угадали, осталось ' + count + ' попыток');
			}
			else if (count < 5 && count > 1) {
			alert('Вы не угадали, осталось ' + count + ' попытки');
			}
			else {
			alert('Вы не угадали, осталось ' + count + ' попытка');
			}
		}
	} while(tryColor != 'голубой' && count != 0)
	if (tryColor == 'голубой') {
		alert('Вы выиграли!');
	}
	else {
		alert('Вы проиграли');
	}
}
else if (level == 'средний') { 	
	var count = 3, arrColor = ['красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый'], randomIndex = Math.floor(Math.random()*7);
	alert('Есть цвета радуги: красный, оранжевый, жёлтый, зелёный, голубой, синий, фиолетовый. Вам необходимо угадать цвет из вышеперечисленных за 3 попытки.');
	do {
		var tryColor = prompt('Введите цвет радуги: ');
		if (randomIndex != arrColor.indexOf(tryColor)) {
			count--; 
			if (count == 0) {
			alert('Вы не угадали, осталось ' + count + ' попыток');
			}
			else if (count < 4 && count > 1) {
			alert('Вы не угадали, осталось ' + count + ' попытки');
			}
			else {
			alert('Вы не угадали, осталось ' + count + ' попытка');
			}
		}
	} while(randomIndex != arrColor.indexOf(tryColor) && count != 0)
	if (randomIndex == arrColor.indexOf(tryColor)) {
		alert('Вы выиграли!');
	}
	else {
		alert('Вы проиграли');
	}
}
else if (level == 'сложный') { 	
	var arrColor = [['красный', 'оранжевый', 'жёлтый'], ['зелёный', 'голубой', 'синий'], ['фиолетовый', 'чёрный', 'белый']], randomIndex = Math.floor(Math.random()*3), 
	randomIndexSecond = Math.floor(Math.random()*3), secondColorIndex;
	alert(randomIndex+ ' ' + randomIndexSecond);
	alert('Есть 9 цветов: красный, оранжевый, жёлтый, зелёный, голубой, синий, фиолетовый, чёрный, белый. Вам необходимо угадать цвет из вышеперечисленных за 1 попытку.');
	var tryColor = prompt('Введите цвет: ');
	for (var i = 0; i < arrColor.length; i++) {
		secondColorIndex = arrColor[i].indexOf(tryColor); 
		if (secondColorIndex >= 0 && randomIndex == i && randomIndexSecond == secondColorIndex){
			alert('Вы выиграли!'); 
			break;
		}
		if (secondColorIndex >= 0 && (randomIndex != i || randomIndexSecond != secondColorIndex)) {
			alert('Вы проиграли');
			break;
		}
		
	}
	if (secondColorIndex == -1) {
		alert('Вы проиграли');
	}
}
else {
	alert('Вы допустили ошибку, такого уровня нет.');
}