// Практика

//TODO  14. Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце.

/*
var hour = 60*60;
var day = 60*60*24;
var month = 60*60*24*30;

alert(hour+" sec");
alert(day +" sec");
alert(month +" sec");
*/

// Работа со строками

/*TODO 7. Создайте переменные str1='Привет, ' и str2='Мир!'.
TODO С помощью этих переменных и операции сложения строк выведите на экран фразу 'Привет, Мир!'.*/

/*var str1 = 'Привет';
var str2 = 'Мир';

alert(str1+', '+str2+'!');*/

//Работа с присваиванием и декрементами


// TODO 17. Переделайте этот код так, чтобы в нем использовались операции +=, -=, *=, /=. Количество строк кода при этом не должно измениться.

/*
var num = 47;
num = num + 7;
num = num - 18;
num = num * 10;
num = num / 15;
alert(num);
*/

/*var num = 47;
num = num+=7;
num = num-=18;
num = num*=10;
num = num/=15;
alert(num);*/


//TODO 18. Переделайте этот код так, чтобы в нем использовались операции ++ и --. Количество строк кода при этом не должно измениться.

/*var num = 10;
num = num + 1;
num = num + 1;
num = num - 1;
alert(num);*/

/*var num = 10;
num = ++num;
num = num--;
alert(num);*/


// Работа с переменными

// TODO 4. Создайте переменные a=10, b=2 и c=5. Выведите на экран их сумму.

/*var a=10;
var b=2;
var c=5;

alert(a+b+c);*/


// Обращение к символам строки

// TODO 12. Создайте переменную str и присвойте ей значение 'abcde'.
//  Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c', символ 'e'.

/*
var str = 'abcde';
alert(str[0]+',' + str[2]+','+ str[4]);
*/


// TODO 13. Создайте переменную num и присвойте ей значение '12345'. Найдите произведение (умножение) цифр этого числа.

/*var num = '12345';
alert(+num[0]*num[1]*num[2]*num[3]*num[4]);*/


// 29.08.2019 Тестировние, выполнено на 100%
//TODO 3. Создайте переменные c=15 и d=2. Просуммируйте их, а результат присвойте переменной result.
// Выведите на экран значение переменной result.

/*var c = 15;
var d = 2;

var result = c+d;

alert(result);*/


// TODO 1. Создайте переменную num и присвойте ей значение 3.
//  Выведите значение этой переменной на экран с помощью метода alert.

/*var num = 3;

alert(3);*/


//TODO 12. Создайте переменную str и присвойте ей значение 'abcde'.
// Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c', символ 'e'.

/*var str = 'abcde';
for(var i = 0; i < str.length; i++){javascript work with numbers
    if(str[i] == 'a' || str[i] == 'c' || str[i] == 'e'){
        alert(str[i]);
    }
}*/

//TODO 8. Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3.
// Выведите день недели, соответствующий значению переменной day.

/*
var obj = {1:'Monday', 2:'Thuesday', 3:'Wednesday', 4:'Thursday', 5:'Friday', 6:'Saturday', 7:'Sunday'};
var day = obj[3];
alert(day);
*/

//TODO 7.Создайте объект с днями недели.
// Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.).
// Выведите на экран текущий день недели.

/*var obj = {'Monday':'Первый', 'Thuesday':'Второй',
    'Wednesday':'Третий', 'Thursday':"Четвертый", 'Friday':"Пятый", 'Saturday':"Шестой", 'Sunday':"Седьмой"};
var day = obj['Thursday'];
alert(day);*/

//TODO 11. Создайте двухмерный массив. Первые два ключа - это 'ru' и 'en'.
// Пусть первый ключ содержит элемент, являющийся массивом названий дней недели по-русски, а второй - по-английски.
// Выведите с помощью этого массива понедельник по-русски и среду по английски (пусть понедельник - это нулевой день).

/*var obj = new Array({'ru':['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'],
    'en':['Monday','Thuesday','Wednesday','Thursday','Friday', 'Saturday', 'Sunday']});

//TODO 13. Если переменная a равна или меньше 1, а переменная b больше или равна 3,
//то выведите сумму этих переменных, иначе выведите их разность (результат вычитания).
//Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

var a = 1;
var b = 3;
var a = 0;
var b = 6;
var a = 3;
var b = 5;
if(a <= 1 && b >= 3){
    alert(a + b);
}else{
    alert(a-b);
}
 */

/*
1. Создайте переменную str и присвойте ей значение 'abcde'.
Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'b', символ 'e'.
*/

/*var str = 'abcde';
alert(str[0]);
alert(str[1]);
alert(str[4]);*/

// Задача. Напишите скрипт, который считает количество секунд в часе.

// alert(60*60);

/*
3.Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --.
Количество строк кода при этом не должно измениться. Код для переделки:

var num = 1;
num = num + 12;
num = num - 14;
num = num * 5;
num = num / 7;
num = num + 1;
num = num - 1;
alert(num);
*/

/*var num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num++;
num--;
alert(num);*/

// Работа с переменными

/*
1. Создайте переменную num и присвойте ей значение 3.
Выведите значение этой переменной на экран с помощью метода alert.
*/

/*
var num = 3;
alert(num);
*/

/*
2. Создайте переменные a=10 и b=2.
Выведите на экран их сумму, разность, произведение и частное (результат деления).
*/

/*
    var a = 10;
    var b = 2;

    alert(a + b);
    alert(a - b);
    alert(a * b);
    alert(a / b);
*/

/*
3.Создайте переменные c=15 и d=2.
Просуммируйте их, а результат присвойте переменной result.
Выведите на экран значение переменной result.
*/

/*var c = 15;
var d = 2;
var result = c + d;
alert(result);*/

// 4. Создайте переменные a=10, b=2 и c=5. Выведите на экран их сумму.

/*
var a = 10;
var b = 2;
var c = 5;

alert(a+b+c);
*/

/*
5. Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c.
Затем создайте переменную d, присвойте ей значение 7.
Сложите переменные c и d, а результат запишите в переменную result. Выведите на экран значение переменной result.
*/

/*var a = 17;
var b = 10;
var c = a-b;
var d = 7;
var result = c + d;
alert(result);*/

// Работа со строками

/*6. Создайте переменную str и присвойте ей значение 'Привет, Мир!'.
    Выведите значение этой переменной на экран.*/

/*var str = 'Привет, Мир!';
alert(str);*/

/*7.Создайте переменные str1='Привет, ' и str2='Мир!'.
    С помощью этих переменных и операции сложения строк выведите на экран фразу 'Привет, Мир!'*/

/*
var str1 = 'Привет, ';
var str2 = 'Мир!';

alert(str1 + str2);*/

// 8. Создайте переменную name и присвойте ей ваше имя. Выведите на экран фразу 'Привет, %Имя%!'.

/*
var name = 'Виталий';
alert('Привет, ' + name);*/

// 9. Создайте переменную age и присвойте ей ваш возраст. Выведите на экран 'Мне %Возраст% лет!'.

/*
var age = 23;
alert('Мне ' + age + ' лет!');*/

// Функция prompt

// 10. Спросите имя пользователя с помощью методы prompt. Выведите с помощью alert сообщение 'Ваше имя %имя%'.

/*
var name = prompt('Введите ваше имя:');
alert('Ваше имя ' + name);*/

// 11. Спросите у пользователя число. Выведите с помощью alert квадрат этого числа.

/*
var number = prompt("Введите число:");
alert('Квадрат вашего числа: ' + number * number);*/

// Обращение к символам строки

/*
12. Создайте переменную str и присвойте ей значение 'abcde'.
    Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c', символ 'e'.*/
/*
var str = 'abcde';
alert(str[0]);
alert(str[2]);
alert(str[4]);
*/

// 13. Создайте переменную num и присвойте ей значение '12345'. Найдите произведение (умножение) цифр этого числа.

/*var num = '12345';
alert(num[0] * num[1] * num[2] * num[3] * num[4]);*/

// Практика

// 14. Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце.

/*var hour = 60*60;
var day = 60*60*24;
var mounth = 60*60*24*30;*/

// 15. Создайте три переменные - час, минута, секунда. С их помощью выведите текущее время в формате 'час:минута:секунда'.

/*    var hour = 21;
    var minute = 10;
    var second = 58;

    alert(hour+":"+minute+":"+second);*/

// 16. Создайте переменную, присвойте ей число. Возведите это число в квадрат. Выведите его на экран.

/*var int = 200*200;
alert(int);*/

// Работа с присваиванием и декрементами

/*17. Переделайте этот код так, чтобы в нем использовались операции +=, -=, *=, /=.
Количество строк кода при этом не должно измениться.*/

/*var num = 47;
num = num + 7;
num = num - 18;
num = num * 10;
num = num / 15;
alert(num);*/

/*
var num = 47;
num += 7;
num -= 18;
num *= 10;
num /= 15;
alert(num);
*/

/*18. Переделайте этот код так, чтобы в нем использовались операции ++ и --.
Количество строк кода при этом не должно измениться.*/

/*var num = 10;
num = num + 1;
num = num + 1;
num = num - 1;
alert(num);*/

/*var num = 10;
num++;
num++;
num--;
alert(num);*/