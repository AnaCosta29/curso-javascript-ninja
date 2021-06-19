/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?
let valueRandom=['ana',32,'estressada',null,{}]
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?
let getValueRandom=(value)=>{
  return value
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?
getValueRandom(valueRandom[1])
32
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?
let setValue=(arr,number)=>{
  return arr[number]
}
setValue(valueRandom,4)
{}
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?
let valuedifferent=[0,null,pessoa={},'salario',[1,2,3,4]]
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?
console.log(setValue(valuedifferent,0))
console.log(setValue(valuedifferent,1))
console.log(setValue(valuedifferent,2))
console.log(setValue(valuedifferent,3))
console.log(setValue(valuedifferent,4))
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ?
let book =(nameBook)=>{
  let library={
    'Nao fale com estranho':{
     quantidadePaginas:456,
     autor:'Harlan Coben',
     editora:'Arqueiro',
     },
      'O menino de ouro':{
      quantidadePaginas:416,
      autor:'Abigail Tarttelin',
      editora:'Todavia',
      },
      'Harry Potter':{
      quantidadePaginas:299,
      autor:'J. K. Rowling',
      editora:'Bloomsbury Publishing Plc',
      },
    console.log(`O livro ${[nameBook]} tem ${[nameBook].quantidadePaginas} páginas!`)
  }
    if(!nameBook){
    return library
  }
   return book[nameBook]
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?
book()
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?
console.log(`O livro ${book('Nao fale com estranho'} tem ${[nameBook].quantidadePaginas} páginas!`)
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
