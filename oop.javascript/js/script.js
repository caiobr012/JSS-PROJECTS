/*const carro = {
    nome: "fiat" -> Propriedade,
    latir: function(){ -> Método
        console.log("auau")
    },
};
console.log(carro.nome  )
carro.latir(); */

/*DUPLICAR CLASSES

-MÉTODO OBSOLETO
const materia ={
    nome:null,
    horasaula: null,
}
console.log(materia);

const matematica = (Object.create(materia));
matematica.nome ="matematica";
matematica.horasaula = 15;
console.log(materia);
console.log(matematica);

-MÉTODO ANTIGO
function criarmateria(nome, horasaula) {

    const materias = Object.create({})

    materias.nome = nome
    materias.horasaula = horasaula

    return materias
};
console.log(criarmateria("portugues", 15));

-MÉTODO ATUAL
const lanche ={
    nome: null,
    valor: null,
};

function comida(nome, valor){
    this.nome = nome
    this.valor = valor
}
const cachorroquente = new comida("dogão", 15);
console.log(cachorroquente);

-MÉTODO IDEAL:
class aluno {
    constructor(nome, id){
        this.nome = nome;
        this.id = id;
    }
}
const joao = new aluno("joão", 23);
console.log(joao);
*/

