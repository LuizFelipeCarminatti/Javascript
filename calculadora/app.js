function multiplicar() {
    let valor = document.getElementById('valor').value
    let res = document.getElementById('res')

    for (let i = 0; i <= 10; i++) {
        res.innerHTML += `${valor} * ${i} = ${valor * i}<br>`
    }
}