function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        //var genero = 'Mulher'
        if (fsex[0].checked) {
            genero = 'Masculino'
            if (idade >=0 && idade <10) {
                //Criança
                img.setAttribute('src', 'criancaM.png')
            }else if (idade <21) {
                //Jovem
                img.setAttribute('src', 'AdolecenteM.png')
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'Homen.png')
            }else {
                //Idoso
                img.setAttribute('src', 'CoroaM.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Feminino'
            if (idade >=0 && idade <10) {
                //Criança
                img.setAttribute('src', 'criancaF.png')
            }else if (idade <21) {
                //Jovem
                img.setAttribute('src', 'AdolecenteF.png')
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'Mulher.png')
            }else {
                //Idoso
                img.setAttribute('src', 'CoroaF.png')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos sexo ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}