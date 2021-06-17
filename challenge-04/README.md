# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
?
let isTruthy=a=>{
if(a){
return true
}
return false
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
?
isTruthy(0)
isTruthy(false)
isTruthy(")
isTruthy(null)
isTruthy(undefined)
isTruthy(NAN)
/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
?
isTruthy(1)
isTruthy(' ')
isTruthy(true)
isTruthy('ana')
isTruthy([])
isTruthy({})
isTruthy(function(){})

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
?
let carro={
marca: 'honda',
modelo: 'civic',
placa: 'cwky',
ano: 1981,
cor: 'cinza',
quantasPortas:4,
assentos:5,
quantidadePessoas:0,
mudarCor(color){
this.cor=color
},
obterCor(){
return this.cor
},
obterModelo(){
return this.modelo
},
obterMarca(){
this.marca
},
obterMarcaModelo(){
return `Esse carro é um ${this.marca} ${this.modelo}`
},
addPessoas(qtdPessoas){
let totalPessoas=this.quantidadePessoas+=qtdPessoas
if(this.quantidadePessoas===this.assentos){
   return `O carro já está lotado!`
}
if(totalPessoas>this.assentos){
let qtdVagas=this.assentos - this.quantidadePessoas
let pluralSingular=qtdVagas===1?'pessoa':'pessoas'
return `Só cabem mais ${qtdVagas} ${pluralSingular}! `
}
this.quantidadePessoas+=qtdPessoas
return `Já temos ${this.quantidadePessoas} pessoas no carro!`
}
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
?
mudarCor('vermelho')

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
?
obterCor()
//vermelho
/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
?
obterModelo()
//civic
/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
?
obterMarca()
//honda
/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
?
//carro.obterMarcaModelo()
//"Esse carro é um honda civic"

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
?

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
?
carro.cor
"cinza"

// Mude a cor do carro para vermelho.
?
//carro.mudarCor('vermelho')

// E agora, qual a cor do carro?
?
vermelho
// Mude a cor do carro para verde musgo.
?
carro.mudarCor('verde musgo')
// E agora, qual a cor do carro?
?
verde musgo
// Qual a marca e modelo do carro?
?
carro.obterMarcaModelo()
"Esse carro é um honda civic"
// Adicione 2 pessoas no carro.
?
carro.addPessoas(2)
"Já temos 2 pessoas no carro!"
// Adicione mais 4 pessoas no carro.
?
carro.addPessoas(4)
"Só cabem mais 1 pessoas! "

// Faça o carro encher.
?
carro.addPessoas(1)
O carro ja esta lotado

// Tire 4 pessoas do carro.
?

// Adicione 10 pessoas no carro.
?

// Quantas pessoas temos no carro?
?
```
