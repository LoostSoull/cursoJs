function carregar(){
    var msg = document.getElementById('msg')
    var foto = document.getElementById('foto')
    var agora = new Date()
    var hora = agora.getHours() 
    //pega a hora e os minutos ja concatenado com os ":" para dividir, simplismente genial ,\\+ ':' + agora.getMinutes()
    
    msg.innerHTML = `Agora São ${hora} horas  ` 

    if(hora > 0){
        //bom dia
     foto.src = 'manha.png'
     document.body.style.background = '#e2cd9f'
    }

    else if(hora <18){
        //boa tarde
        foto.src = 'tarde.png'
        document.body.style.background = '#b9846f'
        //usando dom e modificando a cor do fundo
    }

    else if(hora >19 && hora < 0 ) {
        //boa noite
        foto.src = 'noite.png'
        document.body.style.background = '#515154'
    }
   
}
//para alterar a foto precisamos chamar pela variavel "foto" que tem o id de mesmo nome.
