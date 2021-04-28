function calcular(){
   var data = new Date() //serve para pegar data,hora e etc do sistema em que estiver rodando
   var ano = data.getFullYear() //serve para pegar o ano com 4 digitos ex: 2021

   var fano = document.getElementById('txtidade')// pega toda a informação digitada na caixa de texto com esse id e armazena na variavel.

   var res = document.getElementById('res') // essa variavel vai manipular a div que contem esse id, servindo para exibir o resultado.

   var img = document.createElement('img')// criamos o elemento imagem
   img.setAttribute('id' , 'foto')// aqui colocamos uma id pro img chamado foto serve como <img id='foto>

 if(fano.value.length == 0 || Number(fano.value) > ano){
    alert('erro')//serve apenas como uma micro validaçao, caso o usuario não digite nada.
 }
 else{
    var fsex =  document.getElementsByName('radsex') // a variavel sexo pega a escolha feita pelo usuario no input do tipo radio, os dois tem o mesmo name para que possa escolher um sem impactar o outro
   
    var idade = ano - fano.value // aqui estamos calculando a idade, sendo o ano atual do sistema onde o codigo esta sendo rodado menos o ano digitado.
    var genero = ''// a variavel genero foi criada como uma string vazia, recebendo o valor pela escolha do usuario.
    
    /* Vamos criar uma condição aninhada(condiçao dentro de condição, para verificar o sexo da pessoa, o javascrip identifica os botoes radio como o primeiro sendo 0 e o segundo sendo 1, entao:
      0 = homem
      1 = mulher
      assim que selecionado uma das opções, a variavel genero vai receber um valor diferente para cada opção selecionada*/ 

    if(fsex[0].checked){
       genero = 'Homem'

       if(idade >=0 && idade < 5){
         //bebe
         img.setAttribute('src' , 'imagens/bebe-m.png')//criamos a variavel com o elemento img, aqui manipulamos ele, incrementando um atributo.
      }
      else if(idade < 10){
         //criança
         img.setAttribute('src' , 'imagens/crianca-m.png')
      }
      else if(idade <21){
         //jovem
         img.setAttribute('src' , 'imagens/jovem-m.png')
      }
     
      else if (idade < 50){
         //idoso
         img.setAttribute('src' , 'imagens/adulto-m.png')
      }

      else{
         img.setAttribute('src' ,'imagens/idoso-m.png')
      }

       
    }
    else if(fsex[1].checked){
       genero = 'Mulher'

       if(idade >=0 && idade < 5){
         //bebe
         img.setAttribute('src' , 'imagens/bebe-f.png')
      }
      else if(idade < 10){
         //criança
         img.setAttribute('src' , 'imagens/criança-f.png')
      }
      else if(idade <21){
         //jovem
         img.setAttribute('src' , 'imagens/jovem-f.png')
      }
     
      else if (idade < 50){
         //idoso
         img.setAttribute('src' , 'imagens/adulta-f.png')
      }

      else{
         img.setAttribute('src' ,'imagens/idoso-f.png')
      }

    }
    /*res.style.textAlign = 'center' com esse comando centralizariamos o conteudo do resualto, sem precisar de css, porem ja estilizei isso no css, fica aqui apenas como aprendizado.*/
    res.innerHTML = `a sua idade é ${idade} e seu genero é ${genero}` 
    res.appendChild(img)
 }
}