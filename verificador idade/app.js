function verificar() {
    let date = new Date()
    let anoNasc = date.getFullYear()
    let ano = document.getElementById('anoNasc').value
    let res = document.getElementById('res')
    let sexo = document.getElementsByName('sexo')
    let img = document.createElement('img')
    let idade = 0
    idade = anoNasc - ano
    let genero = ''
    if (sexo[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'menino.jpg')
        }else if (idade < 21) {
            img.setAttribute('src', 'jovemM.jpg')
        }else if(idade < 50){
            img.setAttribute('src', 'homem.jpg')
        }else{
            img.setAttribute('src', 'idoso.jpeg')
        }
    }else if(sexo[1].checked){
        genero = 'Mulher'
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'menina.jpg')
        }else if (idade < 21) {
            img.setAttribute('src', 'jovemF.jpg')
        }else if(idade < 50){
            img.setAttribute('src', 'mulher.jpg')
        }else{
            img.setAttribute('src', 'idosa.jpg')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
}