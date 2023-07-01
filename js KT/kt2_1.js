//Вариант 25 задание 1 
//Составить программу вычисления функции 
//y = 2x-2^2 если х>=-1 ; 2x x<= -1 

function calculateY(x) {
    if (x >= -1) {
      return 2 * x - Math.pow(2, 2);
    } else {
      return 2 * x;
    }
  }
  
  var x1 = 0;
  var x2 = -2;
  
  var y1 = calculateY(x1);
  var y2 = calculateY(x2);
  
  console.log('Значение y при x = ' + x1 + ':', y1);
  console.log('Значение y при x = ' + x2 + ':', y2);


  