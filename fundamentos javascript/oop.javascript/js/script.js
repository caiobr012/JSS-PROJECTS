/*const carro = {
    nome: "fiat" -> Propriedade,
    latir: function(){ -> Método
        console.log("auau")
    },
};
console.log(carro.nome  )
carro.latir(); */

/*DUPLICAR CLASSES

-MÉTODO ANTIGO
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

-MÉTODO ATUAL
function criarmateria(nome, horasaula) {

    const materias = Object.create({})

    materias.nome = nome
    materias.horasaula = horasaula

    return materias
};
console.log(criarmateria("portugues", 15));
*/