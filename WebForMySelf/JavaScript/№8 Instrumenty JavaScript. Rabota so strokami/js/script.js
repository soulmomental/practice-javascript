//Написали результат работы функции, которая срабатывает при загрузке страницы
function stringWork() {
	var str = document.getElementById('head').innerHTML;
	/////////////////////////////////////////////////////
	///new String();
	///String();
	//TODO функция констуктор String, возвращается обьект
	//var result = typeof new String(str);
	//TODO функция String не являющикся конструктором, при передаче любых данных представляет в простом строковом виде, содержит функцию toString.
	//var result = typeof String(str);
	//TODO как мы можем обращаться к строке то?, интерпритатор сам преобращает строку в обьект.

	//TODO возвращает символ строки по индексу, так же можно обращаться как массив
	//var result = str.charAt(10);
	//var result = str[10];

	//TODO возвращает символ строки по индексу, так же можно обращаться как массив
	//var result = str. charCodeAt(15);
	//TODO обьеденяет строки в одну строку
	//var result = str. concat('hello ',' World ', '!!!');
	//var result = str + ' hello ' + ' World ' + '!!!';
	//TODO вызываем у обьекта строки новый метод fromCharCode, параметры юникод или медот вызывающий юникод, вернет нам обратно символ для этого юникода, можно указать несколько параметров
	//var result = String.fromCharCode(1054);
	//var result = String.fromCharCode(str.charCodeAt(15),str.charCodeAt(25));
	//TODO поиск подстроки в строке, если строка найдена вернет 1, если не найдена вернет -1, как только найдет первое сходное значение, вернет его и перестанет работать
	//var result = str.indexOf('с');
	//TODO начнет поиск строки с 32 символа
	//var result = str.indexOf('с',32);
	//TODO соврешит помск строки с конца и вернет его индекс
	//var result = str.lastIndexOf('с');
	//TODO Проверим результат функции
	//var result = str[48];
	//var result = str[str.indexOf('с')];
	//TODO Длина строки
	var result = str.length;

	//TODO Сравнение длины строк одной локализации возвращает 1 если одна строка больше другой или же -1 если меньше, если же равны, то вернется 0
	//var result = str.localeCompare('A');
	//TODO Сортировка массива одной локализации по длине строк
	var strings = ['Привет','Мир','Что то изучаем','Сравнение'];
	//var result = strings.sort(function(a,b) {return a.localeCompare(b)});
	//TODO Находит соответсвия регулярных выражений, ищет по шаблону все числа, если нет флага g, то возвращает первое вхождение, а если есть, то массив соответствий.
	//var result = str.match(/\d+/);
	//TODO Работает с регулярныхм выражением, все совпадения заменяются на значение второго аргумента с флагом g и без только первого.
	//var result = str.replace(/\d+/g,'Hello');
	//TODO Поиск позиции первой строки соответствуйющей рег выражению, игнорирует флаг g
	//var result = str.search(/\d+/);//RegExp
	//TODO Поиск и формирование строки из подстроки в параметрах укаызвается начальное значение поцизии элемента и конечное значение
	//var result = str.slice(1);//RegExp
	//TODO Метод split осуществляет разбиение строки в массив по указанному разделителю
	//var result = str.split(' ',3);//RegExp
	//TODO Метод substr возвращает подстроку из строки (исходная строка при этом не изменяется).
	// Первый параметр задает номер символа, с которого метод начинает отрезать (учтите, что нумерация с нуля), а второй параметр - сколько символов отрезать.
	//var result = str.substr(1);//RegExp

	//TODO Метод substring возвращает подстроку из строки (исходная строка при этом не изменяется).
	// Первый параметр задает номер символа, с которого метод начинает отрезать (учтите, что нумерация с нуля),
	// а второй параметр - номер символа, на котором следует закончить вырезание (символ с этим номером не включается в вырезанную часть).

	//var result = str.substring(3,1);//RegExp
	//var result = str.toLocaleLowerCase();//RegExp
	//var result = str.toLowerCase();//RegExp
	//var result = str.toUpperCase();//RegExp
	
	
	/////////////////////////////////////////////////////
	document.getElementById('result').innerHTML = result;
}

window.onload = function () {
	stringWork();
}

