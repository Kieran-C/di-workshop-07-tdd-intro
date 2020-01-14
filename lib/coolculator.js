class Coolculator {
  add(a, b) {
    return a + b
  }
  multiply(a, b){
    return a*b
  }
  subtract(a, b){
    return a - b
  }
  divide(a, b){
    return a/b
  }
  highest(a, b){
    return a > b ? a:b
  }
  lowest(a,b){
    return a < b ? a:b
  }
  double(a){
    return a * 2
  }
  square(a){
    return a*a
  }
  raise(a,b){
    return a**b
  }
  isNegative(a){
    return a < 0 ? true:false
  }
  isPositive(a){
    return a >= 0 ? true:false
  }
  isCool(a){
    var first;
    var last;
    var n = a
    while (n >= 10){
      n /= 10;
    }
    first = Math.floor(n)
    last = a % 10
    return first == last ? true : false
  }
  sum(numbers){
    var total = 0;
    for(var i = 0; i < numbers.length; i++){
      total += numbers[i]
    }
    return total
  }
  mulitplyArray(numbers){
    var total = numbers[numbers.length-1];
    for (var i = 0; i < numbers.length-1; i++){
      total *= numbers[i]
    }
    return total
  }
  mean(numbers){
    return this.sum(numbers)/numbers.length
  }
  factorial(a){
    var total = 1
    for (var i = 1; i <= a; i++){
      total *= i
    }
    return total
  }
  random(a){
    return (Math.floor(Math.random() * a)) + 1
  }
}

module.exports = Coolculator
