function contar(){
    var ini = document.getElementById('txtini')
    var fim = document.querySelector('input#txtfim')
    var passo = document.getElementById('txtpass')
    var res = document.getElementById('res')

    res.innerHTML = 'Contando:</br>'

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO]Verifique os dados e tente novamente')
    }else{
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(i < f){
            do{
                res.innerHTML += `${i} \u{1f449}`
                i += p
            }while(i <= f)
        }else{
            do{
                res.innerHTML += `${i} \u{1f449}`
                i = i - p
            }while(i >= p)
        }
        res.innerHTML += ` \u{1F38F}`
    }
}