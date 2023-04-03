// formas de escrever funções

// declaração de função
function imprime(texto){
    console.log(texto)
}

imprime("programção")
console.log("---------------")
imprime("javascript")
console.log("---------------")


// declaração de função com passagem de parâmetro
function soma(a, b){
    return a+b
}
console.log(soma(3,4))
console.log(soma(7,4.5))
console.log("---------------")

function multiplica(num1=3, num2=5){
    return num1*num2
}
console.log(multiplica(5,5))
console.log("---------------")
console.log(multiplica())
console.log("---------------")

// função anônima e arrow function com passagem de parâmetros
const resultado = (nu1, nu2) =>{
    return nu1/nu2
}
console.log(resultado(8,4))
console.log("---------------")

// função anônima e arrow function com passagem de parâmetros
const texto1 = nome => `o meu nome é ${nome}` // o uso da crase é chamado de tamplete strings: comando - shift + windos

console.log(texto1("Maria"))