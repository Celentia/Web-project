window.onload = function(){
var int = 1, str = "String", bool = true, und = undefined, nul = null, obj = {}, arr = [int, str, bool, und, nul, obj];
function detectVarType() {
	do {
		var ask = confirm('Хотите ли узнать тип любой из переменных?');
		if (ask != true) {
			break;
		}
		var varName = prompt('Введите название переменной из перечисленных: int, str, bool, und, nul, obj');
		switch (varName) {
			case 'int': alert(typeof(int)); break;
			case 'str': alert(typeof(str)); break;
			case 'bool': alert(typeof(bool)); break;
			case 'und': alert(typeof(und)); break;
			case 'nul': alert(typeof(nul) + '( ошибка языка JavaScript, на самом деле тип null)'); break;
			case 'obj': alert(typeof(obj)); break;
			default: alert('Вы ввели неверное название');
		}
	} while (ask == true)
}
function tableArray() {
	document.write('<table style = "border-collapse: collapse;">');
	document.write('<tr><th style = "border: 1px solid black">' + 'Значение свойства массива' + '</th><th style = "border: 1px solid black">' + 'Тип свойства' + '</th></tr>')
	for (var i = 0; i < arr.length; i++) {
		document.write('<tr><td style = "border: 1px solid black; text-align: center">' + arr[i] + '</td><td style = "border: 1px solid black; text-align: center"> ' + typeof(arr[i]) + '</td></tr>')
	}
	document.write('<table>');
}
var btnCheckType = document.getElementById('checkType');
var btnTableShow = document.getElementById('tableShow');
btnCheckType.onclick = detectVarType;
btnTableShow.onclick = tableArray;
}