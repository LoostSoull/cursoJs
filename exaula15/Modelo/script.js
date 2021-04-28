/*function calcular()
{
    let num = document.getElementById('txtn');
    let tab = document.getElementById('seltab');
     if(num.value.length == 0)
     {
         alert('erro')
     }
     else{
         let n = Number(num.value)
         let c = 1
         tab.innerHTML = ''
         while(c<=10)
         {
             let item = document.createElement('option')//aqui criamos um option para a select
             item.text = `${n} x ${c} = ${n*c}`
             tab.value = `tab${c}`//serve para outras linguagens como php
             tab.appendChild(item)//aqui adicionamos como filho a var item, ela sendo uma select ela foi adicionada dentro da var tab. que por sua vez ela é o select
             c++
         }
     }
}*/


//tabuada incluida dentro do select usando FORe e query selector

function calcular()
{
    var num =  document.querySelector('input#txtn');
    var tab =  document.querySelector('select#seltab')

    if(num.value.length == 0)
    {
        alert('[erro] Digite um numero')
    }
    else{
        var n = Number(num.value);
        tab.innerHTML = ''/*criamos esse inner com a string vazia representada por '' , pois toda vez antes de executar o FOR, ele vai receber esse valor vazio, uma forma de limpar o select dos resultados anteriores.*/
        
        for(var c = 1 ;c < 11 ; c++ ) /* to laço se inicia com a variavel valendo 1, e para quando ela for menor que 11, sempre incrementando de 1 em 1 , representado por c++ que é a mesma coisa que c = c + 1*/ 
        {
            var item = document.createElement('option')// option criado de forma dinamica, ao invez de ir no html: <select> <option> </option> </select>
            item.text = `${n} x ${c} = ${n*c}`/* aqui vai a parte que seria escrita dentro do option, como transformamos ele em uma variavel chamada de item, fica mais facil a inclusao */
            tab.appendChild(item)//append child = anexar filho, o option é filho do select, com esse comando, anexamos a variavel item dentro do select, pois a variavel item é o option, criado de forma dinamica
        }
    }
}