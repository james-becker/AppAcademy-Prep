function listPrime(num) {
  var array = [];
  for (i = 1; i <= num; i++) {
    var isPrime;
    for (j = 2; j < i; j++) {
       if (i % j === 0) {
         isPrime = false;
         break;
       } else {
         isPrime = true;
       }
    }
    if (isPrime === true)
      array.push(i);
  }
  console.log(array);
}

listPrime(100);
