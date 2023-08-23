

function loading() {
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('div#img')
    
    var now = new Date()
    var hour = now.getHours()
    var min = now.getMinutes()
    var trho = 0
    var trm = 0

        // formula que transforma 24 horas em 12 AM/PM
        // além de colocar no formato 00:00
        if (hour < 10) {
            trho = "0" + hour
        } else {
            trho = hour
        }
        if (min < 10) {
            trm = "0" + min
        } else {
            trm = min
        }
        var houra = 0
        if (hour < 13) {
            houra = `${trho}:${trm} AM`
        } else {
            houra = `${trho-12}:${trm} PM`
        }
        
    // mensagem na div que mostra as horas
    msg.innerHTML = `Now it's ${houra} ` 
    
        // código que muda a imagem e o fundo dependendo do valor hour
        if (hour < 12) { 
            img.innerHTML = '<img src="manhafoto.png" alt=""></img>'
            document.body.style.background =  '#a1986e'
            
        } else if(hour < 19) {
            img.innerHTML = '<img src="tardefoto.png" alt=""></img>'
            document.body.style.background =  '#bb7d64'

        } else {
            img.innerHTML = '<img src="noitefoto.png" alt=""></img>'
            document.body.style.background =  '#474166'

        }
}