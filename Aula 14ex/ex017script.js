
let butt = document.querySelector('input#butt')
butt.addEventListener ('click', clicking)

function clicking () {
    let num = document.querySelector('input#num')
    let tab = document.querySelector('select#seltab')

    if (num.value.length == 0) {
        Window.alert('Please, type a number')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ' '
        for (let i = 1; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}`
            item.value = `tab${i}`
            tab.appendChild (item)
        }
    }

}
//thats the code, its kinda simple