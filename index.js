function calcular() {
    var botao = window.document.getElementById('botao')
    var inputvalor = window.document.getElementById('valor')
    var res = window.document.getElementById('res')
    if (inputvalor.value <= 3) {
        res.innerHTML = "Resultado: tem certeza que deseja dar esta nota ? o lusca pode ficar triste T-T"
    } else if (inputvalor.value < 7 ) {
        res.innerHTML = "Resultado: Até que você gosta um pouquinho de mim, mas podemos melhorar esta nota, vamos tentar dnv"
    } else if (inputvalor.value <= 10) {
        res.innerHTML = "Resultado: Você certamente me ama um bucado, tbm te amo meu xuxu s2"
    } else if (inputvalor.value <= 50) {
        res.innerHTML = "Resultado: Você até que me ama bastante,  mas eu ainda te amo mais s2"
    } else if (inputvalor.value >= 51) {
        res.innerHTML = "Resultado: Bela tentativa, mas o seu namorado te ama a um tanto que beira o infinito s2"
    }
}