let array = []
function adicionar() {
    let valor = Number(document.getElementById('valor').value)
    let res = document.getElementById('res')
    array.push(valor)
    if (!valor) {
        alert('Valor inexistente!')
    }else{
        if (valor >= 1 && valor <= 100) {

            res.innerHTML += `Valor ${valor} adicionado <br>`
        } else {
            alert('Valor não suportado')
        }
    }
}

function finalizar() {
    let maior = array[0]
    let menor = array[0]
    let total = 0
    let media = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]
        } else if (array[i] < menor) {
            menor = array[i]
        }
        total += array[i]
        media = total / array.length
    }
    res.innerHTML += `
    <br> Total, temos ${array.length} valores <br>
    O maior valor informado foi ${maior} <br>
    O menor valor informado foi ${menor} <br>
    Somando todos os valores, temos ${total} <br>
    A media dos valores digitados é ${media.toFixed(2)} <br>
    `
}