//relogio com variavel que recebe horas e apresenta na tela
/*var hora = 1
console.log(`Olá agora são ${hora} horas`)
if(hora > 5 && hora <= 12){
    console.log(`bom dia!`)
}
else if(hora > 12 && hora <= 18){
    console.log(`boa tarde!`)
}
else if(hora > 18 && hora <= 24 ){
    console.log(`boa noite!`)
}
else {
    console.log(`boa madrugada`)
} 
*/

//relogio com base na hora do sistema em qual o codigo esta rodando
var agora =  new Date()
var hora = agora.getHours()
console.log(`agora é ${hora} horas` )
if(hora < 12){
    console.log(`Bom dia!`)
}
else if(hora  < 18) {
    console.log(`Boa tarde!`)
}
else if(hora > 18 ){
    console.log(`boa noite!`)
}
else if(hora > 00 || hora <= 4){
    console.log(`boa madrugada!`)
} 
