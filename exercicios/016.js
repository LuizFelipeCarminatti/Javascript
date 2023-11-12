function parImpar(valor) {
    if (valor % 2 == 0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}
console.log(parImpar(8))

function soma(n1 = 0, n2 = 0) {
    return n1 + n2
}

console.log(soma(2, 5))

let x = function (x) {
    return x * 2
}

console.log(x(2))

function fatorial(valor) {
    let total = 1
    for (let i = valor; i > 1; i--) {
        total *= i
    }
    return total
}
console.log(fatorial(5))