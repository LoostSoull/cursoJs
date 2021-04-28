//modo simplificado
var idade = 22
console.log(`você tem ${idade} anos`)
if(idade <16){
    console.log('nao vota')
}
else if( idade < 18 || idade >65) {
      console.log(`voto opcional`)
  }
  else if(idade == 22) {
    console.log(`eu entendi o exercicio  e preciso praticar mais`)
}
  else if (idade >= 18) {
        console.log(`voto obrigatorio`)

    }

 /* no modo simplificado, nao criamos o            else { 
                                                         if(condicao){

                                                                         }
                                                        }
    unimos as duas palavras e fica: else if(condição){ bloco} , com isso economizamos um bloco



/* modo completo 
var idade = 65
console.log(`você tem ${idade} anos`)
if(idade <16){
    console.log('nao vota')
}
else{
  if( idade < 18 || idade >65) {
      console.log(`voto opcional`)
  }
  else {
    if (idade >= 18) {
        console.log(`voto obrigatorio`)
    }
 
}

}
*/
