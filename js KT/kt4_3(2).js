// Задание 2 вар25
// Создать одномерный массив на семь элементов. Найти сумму кубов 
// элементов массива. Результат вывести в консоль

var arr = [1, 2, 3, 4, 5, 6, 7];
var sum = 0;

for (var i = 0; i < arr.length; i++) {
   sum += Math.pow(arr[i], 3);
}

console.log('Сумма кубов элементов массива: ' + sum);