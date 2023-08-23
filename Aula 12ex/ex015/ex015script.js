let but = document.querySelector("input#butt")
but.addEventListener ("click", clicking)



function clicking() {
    let date = new Date()
    let year = date.getFullYear()
    let fyear = window.document.querySelector("input#txtyea")
    let res = window.document.querySelector('div#res')
    let img = document.createElement ('img')
    if(fyear.value.length == 0 || fyear.value > year || Number(fyear.value) < 1900) {
        window.alert('[ERROR] Verify the details and try again')
    } else {
        var fsex = document.getElementsByName('radsex')
        var age = year - Number(fyear.value)
        var gen = ' '
        if (fsex[0].checked == true) {
            gen = 'male'
            if (age < 14) {
                // criança
                img.setAttribute('src', 'criançahomem.png')
            } else if(age < 30) {
                // jovem
                img.setAttribute('src', 'jovemhomem.png')
            } else if (age < 60) {
                // adulto
                img.setAttribute('src', 'adultohomem.png')
            } else { 
                // idoso
                img.setAttribute('src', 'veiohomem.png')
            }
        } else { 
            gen = 'female'
            if (age < 14) {
                // criança
                img.setAttribute('src', 'criançamulher.png')
            } else if(age < 30) {
                // jovem
                img.setAttribute('src', 'jovemmulher.png')
            } else if (age < 60) {
                // adulto
                img.setAttribute('src', 'adultomulher.png')
            } else { 
                // idoso
                img.setAttribute('src', 'veiomulher.png')
            }
            
        } 
        res.style.textAlign = 'center'
        res.innerHTML = `We detected ${gen} who are ${age} years old.`
        res.appendChild(img)
        
    }
}
    