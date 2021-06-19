/*
Crie um array com 5 items (tipos variados).
*/
// ?
let itemVariados=['ana',0,null,{a:23},[1,2,3]]
/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
// ?

let addItem=(item)=>{
  itemVariados.push(item)
  return itemVariados
}
console.log(addItem('caixa'))
/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
// ?
itemVariados.push(['cola','lapis','estojo'])
console.log(itemVariados)

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
// ?
console.log(itemVariados[6][2])
console.log(`O segundo elemento do segundo array é ${itemVariados[6][1]}.`)
/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
// ?
console.log(`O primeiro array tem ${itemVariados.length} itens.`)
/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
// ?
console.log(`O segundo array tem ${itemVariados[0].length} itens.`)
/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/

let i = 10
while (i <= 20) {
  if(i%2===0)
  console.log(`Números pares entre 10 e 20:${i}`);
  i++

}
    // ?

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
let j = 10
while (j <= 20) {
  if(j%2===1)
  console.log(`Números ímpares entre 10 e 20: ${j}`);
  j++

}

// ?

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
for(let i=100;i<=120;i++){
   if(i%2===0)
console.log(`Números pares entre 100 e 120:${i}`);
}
// ?

for(let i=111;i<=125;i++){
   if(i%2===1)
console.log(`Números ímpares entre 111 e 125:${i}`);
}
// ?
