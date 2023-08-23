var buttadd = document.querySelector('input#buttadd')
var buttend = document.querySelector('input#buttend')
buttadd.addEventListener ('click', add)
buttend.addEventListener ('click', end)
var txt = document.querySelector('div#txt')
let num = document.querySelector('input#num')
let tab = document.querySelector('select#seltab')
let values = [ ]

function isNumber(n) {
 if (Number(n) >= 1 && Number(n) <= 100) {
    return true
 } else {
    return false
 }
}

function isList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function add() {
    if(isNumber(num.value) && isList(num.value, values) == false) {
        values.push(Number(num.value))
        item = document.createElement('option')
        item.text = `Number ${num.value}`
        tab.appendChild(item)
    } else {
        window.alert('Value invalid')
    }
    num.value = ' '
    num.focus()
    

}

function end() {
    if(values.length == 0) {
        window.alert('You need to add values before continue')
    } else {
        let tot = values.length
        let big = values[0]
        let low = values[0]
        let sum = 0
        
        
        for (const pos in values) {
            sum += values[pos]
              if (values[pos] > big) {
                big = values [pos]
              }
              if (values[pos] < low) {
                low = values[pos]
              }
            
        }
        let mid = sum/values.length

        txt.innerHTML = ''
        txt.innerHTML += `<p> We have ${tot} at all</p>`
        txt.innerHTML += `<p>The biggest value has ${big}</p>`
        txt.innerHTML += `<p>The lowest value has ${low}</p>`
        txt.innerHTML += `<p>Adding all values we have ${sum}</p>`
        txt.innerHTML += `<p>The avarage of all number is ${mid}</p>`

    }

}