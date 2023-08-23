let butt = document.querySelector('input#butt')
butt.addEventListener('click', clicking)

function clicking() {
    let res = document.querySelector('div#res')
    let start = document.querySelector("input#startn")
    let end = document.querySelector("input#endn")
    let step = document.querySelector("input#stepn")
    let s = Number(start.value)
    let e = Number(end.value)
    let st = Number(step.value)

    res.innerHTML = 'Preparing to count... <br>'

    if (st <= 0 || start.value.length == 0 ||end.value.length == 0) {
        window.alert(`[ERROR] impossible to count`)
    } else {
        if (s < e) {
            for (let i = s; i <= e; i += st) {
                res.innerHTML += i + ' \u{1f449} '
            }
        } else {
            for (let i = s; i >= e; i -= st) {
                res.innerHTML += i + ' \u{1f449} '
            }
    }
        res.innerHTML += '\u{1F3C1}'
    }
}
