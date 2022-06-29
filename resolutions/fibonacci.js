function fibonacci(number) {
  let fibonacciSequence = [];
  fibonacciSequence[0] = 0;
  fibonacciSequence[1] = 1;

  for (let i = 2; i <= number; i++) {
    fibonacciSequence[i] = fibonacciSequence[i - 2] + fibonacciSequence[i - 1];
  }
  if (fibonacciSequence.find((num) => num === number)) {
    console.log(`O número ${number} pertence ao fibonacci`);
  } else {
    console.log(`O número ${number} não pertence ao fibonacci`);
  }
  console.log(fibonacciSequence);
}

/* Chame a função colocando um numero como parametro para fazer a sequencia de quantos numeros deseja da fibonacci */
fibonacci(21);
