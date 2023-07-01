// 24. Дано целое число, лежащее в диапазоне 1-999. Вывести его строку- описание вида 
// «четное двузначное число», «нечетное трехзначное число» и т. д

function numberDescription(number) {
    let description = '';
 
    if (number % 2 === 0) {
       description += 'четное '; //Функция принимает целое число и возвращает строку описание
    } else {
       description += 'нечетное ';
    }
 
    if (number >= 1 && number <= 9) {
       description += 'однозначное число';
    } else if (number >= 10 && number <= 99) {
       description += 'двузначное число';
    } else if (number >= 100 && number <= 999) {
       description += 'трехзначное число';
    }
 
    return description;
 }
 
 let number = prompt('Введите целое число в диапазоне от 1 до 999:'); //запрос числа у пользователя
 let parsedNumber = parseInt(number);
 
 if (!isNaN(parsedNumber) && parsedNumber >= 1 && parsedNumber <= 999) {
    let result = numberDescription(parsedNumber);
    console.log(result);
 } else {
    console.log('Введите целое число в диапазоне от 1 до 999.');
 }

 //само задание запускается в браузере, число вводится в форму промт результат в консоль логе
