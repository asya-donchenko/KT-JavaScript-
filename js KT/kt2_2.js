function calculateY(x) {
    if (x < -3) {
      return Math.pow(x, 2) - 1;
    } else if (x >= -3 && x <= 0) {
      return 3 - x;
    } else {
      return 4 * x;
    }
  }
  
  let x1 = -4;
  let x2 = -2;
  let x3 = 2;
  
  let y1 = calculateY(x1);
  let y2 = calculateY(x2);
  let y3 = calculateY(x3);
  
  console.log('Значение y при x = ' + x1 + ':', y1);
  console.log('Значение y при x = ' + x2 + ':', y2);
  console.log('Значение y при x = ' + x3 + ':', y3);
