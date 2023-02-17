alert('Ola, Digite os dois números para obter sua soma.')

// solicitar first name do usuário
// solicitar secund name do usuário
let firstNumber = prompt('Digite o primeiro número')
let secundNumber = prompt('Digite o segundo  número')

// Somar os dois números
firstNumber = Number(firstNumber)
secundNumber = Number(secundNumber)

const sum = firstNumber + secundNumber
const sub = firstNumber - secundNumber
const mult = firstNumber * secundNumber
const div = firstNumber / secundNumber
const rest = firstNumber % secundNumber

alert('A soma dos dois númeors é: ' + sum)
alert('A subtração dos dois númeors é: ' + sub)
alert('A multiplicação dos dois númeors é: ' + mult)
alert('A divisão dos dois númeors é: ' + div)
alert('O resto dos dois númeors é: ' + rest)

if (sum % 2 == 0) {
  alert('A soma dos dois números  é par! ' + sum)
} else {
  alert('A soma dos dois números é impar ' + sum)
}

if (firstNumber > secundNumber) {
  alert('Os números inseridos são diferentes:')
} else if (secundNumber > firstNumber) {
  alert('Os números inseridos são diferentes:')
} else {
  alert('Os números inseridos são iguais')
}
