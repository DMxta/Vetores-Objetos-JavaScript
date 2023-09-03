// O que são vetores ou arrays

// Como declarar um array
let array = ['string', 1, true, 3, false, 5, 7 ];
console.log(array);

// Pode guardar vários tipos de dados
let array2 = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array2);

// Como acessar o índice de um array
let array3 = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array3[4]);

// forEach() - Executa uma funcção para cada índice de um Array
array.forEach(function(item, index){console.log(item, index)});

// pus() - Adiciona item no final do Array
array.push('novo item');
console.log(array);

// pop() - Remove item no final do Array
array.pop();
console.log(array);

// shift() - Remove item no início do Array
array.shift();
console.log(array);

// unshift() - Adiciona item no início do Array
array.unshift('novo início');
console.log(array);

// indexOf() - Retorna o índice de um valor;
console.log(array.indexOf(true));

// splice() - Remove ou substitui um item pelo índice
array.splice(0, 3);
console.log(array);

// slice() - retorna uma parte de um Array existente
let novoArray = array.slice(0, 3);
console.log(novoArray);

// Manipulando Objetos
let object = {
    string: 'string',
    numer: 1,
    Boolean: true,
    array: ['array'],
    objectInterno: {
        objectInterno: 'objeto interno'
    }
}
console.log(object);

// Como acessar só uma propriedade
let object2 = {
    string: 'string',
    numer: 1,
    Boolean: true,
    array: ['array'],
    objectInterno: {
        objectInterno: 'objeto interno'
    }
}
console.log(object2.Boolean);

// Desestruturação do Objeto
var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var { string, Boolean} = object;
console.log(string, Boolean);