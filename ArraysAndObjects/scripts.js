//РАБОТА С МАССИВАМИ

//TODO 2.С помощью массива arr из предыдущего номера выведите на экран содержимое первого, второго и третьего элементов.

/*var arr = ['a', 'b', 'c'];
alert(arr[0] +',' +arr[1]+',' + arr[2]);*/

//TODO 4. Создайте массив arr с элементами 2, 5, 3, 9.
// Умножьте первый элемент массива на второй, а третий элемент на четвертый.
// Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.

/*var arr = [2,5,3,9];
var result = 0;
result += arr[0]*arr[1]*arr[2]*arr[3];

alert(result);*/

// ОБЪЕКТЫ (АССОЦИАТИВНЫЕ МАССИВЫ)

//TODO 5. Создайте объект obj. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта:

/*
var obj = {a: 1, b: 2, c: 3};

alert(obj['c']);
alert(obj.c);*/


// TODO 8. Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3.
//  Выведите день недели, соответствующий значению переменной day.

/*var weeks = {1:'monday',2:'tuesday', 3:'wednesday', 4:'thursday', 5:'friday', 6:'saturday' ,7:'sunday'};
var day = weeks[3];

alert(day);*/

// МНОГОМЕРНЫЕ МАССИВЫ !===4/10===!

//TODO 9. Дан массив [[1, 2, 3], [4, 5, 6], [7, 8, 9]]. Выведите на экран цифру 4 из этого массива.   !=== 4/10 ===!
/*var arr = [[1,2,3], [4,5,6], [7,8,9]];
alert(arr[1][0]);*/

/*TODO 12. Пусть теперь в переменной lang хранится язык (она принимает одно из значений или 'ru', или 'en' - либо то, !=== 4/10 ===!
    либо то), а в переменной day - номер дня. Выведите словом день недели,
    соответствующий переменным lang и day. То есть: если, к примеру, lang = 'ru' и day = 3 - то выведем 'среда'.*/

 let lang_value = {'ru':['Понедельник','Вторник', 'Среда','Четверг','Пятница', 'Суббота', 'Воскрещения'],
     'eng':['Monday','Tuesday','Wednesday','Thursday', 'Friday','Saturday','Sunday']};






























;

