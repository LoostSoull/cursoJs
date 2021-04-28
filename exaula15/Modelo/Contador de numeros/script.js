function contar()

{
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
     
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO] Verifique se todos os campos foram preenchidos ')
        
    } 
    else{ 
               res.innerHTML = 'contando <br>'
               var ini = Number(inicio.value)
               var f = Number(fim.value)
               var pass = Number(passo.value)
       
            if(ini < f)
             //contagem crescente
             {
               for(var c = ini ;c <= f ;c +=pass )
                { res.innerHTML += `${c} &#x1F449` /*&#x1F449` esse é um codigo para aplicar o emoji da mao no codigo.*/ }
             }

            if(ini > f)
             //contagem decrescente
             {
                for( var c = ini; c >= f;c-= pass )
                { res.innerHTML += `${c} &#x1F449` }

             }

        }
    
    
}
/*function contar() {
    var inicio = window.document.getElementById('inicio');
    var fim = window.document.getElementById('fim');
    var passo = window.document.getElementById('passo');
    var res = window.document.getElementById('res');
    
    if (inicio.value.length == 0 || fim.value.length == 0) {
        res.innerHTML = "Impossivel contar"
        window.alert ("[ERRO] Dados Inválidos, verifique novamente!")
    } else {
        res.innerHTML = "Contando: <br>"
        var txtinicio = Number(inicio.value);
        var txtfim = Number(fim.value);
        var txtpasso = Number(passo.value);
        
        if (txtpasso <= 0) {
            window.alert ("Passo Inválido! Considerando Passo = 1")
            txtpasso = 1
        }
        if (txtinicio < txtfim) {
            //Contagem Crescente
            for (var c = txtinicio ; c <= txtfim ; c+=txtpasso){
                res.innerHTML += ` ${c} &#x1F449 `;
            }
    
        } else {
            //Contagem Decrescente
            for (var c = txtinicio; c >= txtfim; c-=txtpasso){
                res.innerHTML += ` ${c} &#x1F449 `;
            }
        }
        res.innerHTML += `&#x1F3C1`;
    }
}*/