// 35 Циклы

// 1. Имеется массив из 20 чисел. Вывести на экран только четные числа из массива

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for(let b = 0; b < arr.length; b++) {
	if(arr[b] % 2 === 0) {
		document.write(arr[b] + ' - ' + 'четные числа из массива' + '<br>');
}
}


// 2. Имеется массив строк с 10 элементами. Вывести на экран самое длинное слово из массива

let words = ['Саша', 'Вася', 'Петя', 'Маша', 'Максим', 'Аня', 'Анна', 'Антон', 'Андрей', 'Антонина'];
let maxLength = 0;
let maxWord = '';
let a = 0;

while (a < words.length) {
	if (words[a].length > maxLength) {
		maxLength = words[a].length;
		maxWord = words[a];
	}
	a++;
}

document.write(maxWord + ' - ' + 'самое длинное слово из массива' + '<br>');



// 3. Массовое удаление. Имеется массив, который содержит имена 15 пользователей. Необходимо удалить всех пользователей. При удалении каждого пользователя нужно выводить сообщения: «Удаляю пользователя Иван» «Удаляю пользователя Вася» …

let userName = ['Иван', 'Вася', 'Петя', 'Маша', 'Максим', 'Антон', 'Андрей'];

let h = 0;

while (h < userName.length) {
	document.write('Удаляю пользователя ' + userName[h] + '<br>');
	h++;
}

// 4. Строка называется палиндромом, если она пишется одинаково в обоих направлениях. Например, палиндромами в английском языке являются слова «anna», «civic», «level», «hannah». Напишите программу, запрашивающую у пользователя строку и при помощи цикла определяющую, является ли она палиндромом.

// WITH FOR

let str = prompt('Введите палиндром');
let str2 = str.toLowerCase();

let isPalindromee = true;

for (let l = 0; l < str2.length / 2 && isPalindromee; l++) {
	if (str2[l] !== str2[str2.length - l - 1]) {
		isPalindromee = false;
	}
}

isPalindromee ? alert('Это палиндром') : alert('Это не палиндром');


// ---------------------------------------------------------------

// WITH WHILE

let str3 = prompt('Введите палиндром');
let str4 = str.toLowerCase();

let isPalindrome = true;

let i = 0;
while ( i < str4.length / 2 && isPalindrome) {
	if (str4[i] !== str4[str4.length - i - 1]) {
		isPalindrome = false;
	}
	i++;
}

isPalindrome ? alert('Это палиндром') : alert('Это не палиндром');



// 5. Вывести таблицу умножения от 0 до 10

document.write = '<h1>Таблица умножения</h1>';

for (let s = 0; s <= 10; s++) {
	document.write("<div style='float: left; width: 130px;'>");	
		for (let j = 0; j <= 10; j++) {
			document.write(s + ' * ' + j + ' = ' + s * j + '<br>');
		}
	document.write = "<br>" + "</div>";
}
