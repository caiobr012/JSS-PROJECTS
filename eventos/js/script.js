// ADICIONANDO EVENTOS

/*const mybutton = document.querySelector("#my-button");
mybutton.addEventListener("click", function (){
    console.log(`Clicou x!`);
}); */

// REMOVENDO EVENTO

const mybutton = document.querySelector("#my-button")

const mybutton2 = document.querySelector("#btn");
function imprimirMsg(){
    console.log("com evento");
};

const mybutton3 = document.querySelector("#btn-remove");
mybutton3.addEventListener("click", ()=>{ //ADICIONAR EVENTO
    console.log("evento removido");
    mybutton.removeEventListener("click", imprimirMsg); //REMOVER EVENTO
});
mybutton2.addEventListener("click", (e)=>{
    e.stopPropagation(); //PARAR EVENTO DENTRO DE UM ELEMENTO PAI
    console.log("evento adciondo");
    mybutton.addEventListener("click", imprimirMsg);
});

const var1 = document.querySelector("#quasetitulo");
var1.addEventListener("click", (event)=>{
    console.log(event);
    console.log(event.pointerType);
    console.log(event.target);

})

const eventcontainer = document.querySelector(".container-eventos");
eventcontainer.addEventListener("click", ()=>{
    console.log("clicou na div");
});

//EVENTOS TECLADO
/*document.addEventListener("keyup", (e)=>{
    console.log(`soltou a tecla ${e.key}`);
});
document.addEventListener("keydown", (e)=>{
    console.log(`pressionou a tecla ${e.key}`);
});

document.addEventListener("keypress", (e)=>{
    console.log(`segurou a tecla ${e.key}`);
});*/

//EVENTOS MOUSE
/*const mousee = document.querySelector("#mouse");
mousee.addEventListener("mousedown", ()=>{
    console.log("pressinou o mouse");
});
mousee.addEventListener("mouseup", ()=>{
    console.log("soltou o mouse");
});
mousee.addEventListener("mousemove", (e)=>{
    console.log("moveu o mouse");
    console.log(`no eixo x ${e.x}`);
    console.log(`no eixo Y ${e.y}`);
});

window.addEventListener("scroll", ()=>{
    if (window.scrollY > 200){
        console.log("passamos de 200px");
    };
});*/

//EVENTO INPUT
/*const texto = document.querySelector("#input");
texto.addEventListener("focus", (e)=>{
    console.log("Entrou no input");
});
texto.addEventListener("blur", (e)=>{
    console.log("saiu do input");
});*/

//EVENTO DEBOUNCE
/*const debounce = (f, delay) =>{
    let timeout;

    return(...arguments)=>{
        if(timeout){
            clearTimeout(timeout);
        }
        timeout = setTimeout(()=>{
            f.apply(arguments);
        }, delay);
    };
};
window.addEventListener("mousemove", debounce(()=>{
    console.log("Executando a cada 400ms");

}, 400)
)*/