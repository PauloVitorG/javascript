var butt = window.document.querySelector('input#butt')
butt.addEventListener('click', adicionar)
var butt2 = window.document.querySelector('input#butt2')
butt2.addEventListener('click', tabela)
var tab = document.querySelector ("select#tab")
var num = window.document.querySelector('input#num')
var elementos = [ ]
var res = document.querySelector ('div#res')


function checar(n, e) {
    let indo = e.indexOf(Number(n))
    if (indo == -1) {
        return true
    } else {
        return false
    }

}

function adicionar() {
    if (num.value.length == 0 || num.value > 100 || num.value < 0) {
        window.alert('Valor inválido')
    } else { 
        res.innerHTML = 'Lá vem o resultado...'
        if (checar(num.value, elementos )) {
            elementos.push(Number(num.value))
            var item = document.createElement('option')
            item.text = `Número ${num.value}`
            tab.appendChild (item)

            
    } else {
        window.alert('Número já na tabela')
    }
        num.value = ' '
        num.focus()
    }
}

function tabela(){
    
    var maior = elementos[0]
    menor = elementos[0]
    var soma = 0

    for ( var i = 0; i < elementos.length; i++) {
        if (maior < elementos[i]) {
            maior = elementos[i]
        }
        if (menor > elementos[i]) {
            menor = elementos[i]
        }
        soma += elementos[i]
    }

    res.innerHTML += `A tabela tem ${elementos.length} elementos`
    res.innerHTML += `<br>O maior número é ${maior}`
    res.innerHTML += `<br>O menor número é ${menor}`
    res.innerHTML += `<br>A soma dos elementos é ${soma}`
    res.innerHTML += `<br>A média dos elementos é ${soma/elementos.length}`
    
}