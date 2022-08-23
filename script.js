function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero ='Homem'
            if (idade >=0 && idade <10){
                //criança
                img.setAttribute('src', 'fotocriancam.jpg')
            } else if (idade >= 10 && idade < 21){
                //jovem
                img.setAttribute('src', 'fotojovemm.jpg')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'fotoadultom.jpg')
            }else  {
                //idoso
                img.setAttribute('src', 'fotoidosom.jpg')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade <10){
                //criança
                img.setAttribute('src', 'fotocriancaf.jpg')
            } else if (idade >= 10 && idade < 21){
                //jovem
                img.setAttribute('src', 'fotojovemf.jpg')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'fotoadultof.jpg')
            }else  {
                //idoso
                img.setAttribute('src', 'fotoidosof.jpg')
            }
        }


        if (idade < 11){
            tipo = "criança"
        }  else {
            tipo = genero
        }

        res.style.textAlign='center'
        res.innerHTML = `Detectamos ${tipo} com ${idade} anos <br>`
        res.appendChild(img)
    }
}