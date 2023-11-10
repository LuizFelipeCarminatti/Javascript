let num = [5, 8, 4, 2, 7, 9, 3, 6,]
num.push(1)
num.sort()
console.log(num)
console.log(num.length)
console.log(num[0])

for (let i = 0; i < num.length; i++) {
    console.log(` ${num[i]}`)
}

for (const i in num) {
    console.log(num[i])
}

console.log(num.indexOf(7)) // valor do array
let valor = num.indexOf(10)
if (valor = -1) {
    console.log('Valor não encontrado')
} else {
    console.log(valor)
}