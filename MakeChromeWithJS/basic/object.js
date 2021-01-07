//``에 대한 내용 습득 이득이득

function sayHello(name, age){
  console.log(`Hello ${name} you are ${age} years oldㅠㅠ`);
}

const calculator = {
  plus: function(a, b){
    return a+b;
  },
  power: function(a, b){
    return a**b;
  }
}

sayHello("jihwan", 24);

const plus = calculator.plus(5, 5);
console.log(plus);
console.log(calculator.power(2, 2));