function contar() {
    let inicio = Number(document.getElementById('inicio').value)
    let fim = Number(document.getElementById('fim').value)
    let passo = Number(document.getElementById('passo').value)
    let res = document.getElementById('res')

    if (passo <= 0) {
        alert('Passo inválido')
        passo = 1
    }else{
        if (inicio > fim) {
            for (let i = inicio; i >= fim; i -= passo) {
                res.innerHTML += `${i} ->`
            }
        } else {
            for (let i = inicio; i <= fim; i += passo) {
                res.innerHTML += `${i} ->`
            }
        }
    }
}