var dia = new Date()
var diasem = dia.getDay()


switch(diasem){
    case 0:
        console.log(`Domingo!`)
        break
        case 1:
        console.log(`Segunda!`)
        break
        case 2:
        console.log(`Terça`)
        break
        case 3:
        console.log(`Quarta`)
        break
        case 4:
        console.log(`Quinta`)
        case 5:
        console.log(`Sexta`)
        break
        case 6:
        console.log(`Sabado`)
        break

        default:
            console.log(`ERRO DIA INVALIDO`)
            //caso de algum erro e nao execute nenhum dos dias vai retornar o meu default
}


/*o java script lê os dias da seguinte forma:
   0 - domingo
   1 - segunda
   2 - terça
   3 - quarta
   4 - quinta
   5 - sexta
   6 - sabado
 e executa nessa ordem!
*/