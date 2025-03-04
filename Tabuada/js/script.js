//Selecão de elementos

const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicador");

//funções

//Eventos
multiplicationForm.addEventListener("sumbit", (e)=>{
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;
    const multiplicadorNumber = +multiplicationInput.ariaValueNow;

    if(!multiplicadorNumber || multiplicadorNumber ) return;

    console.log(multiplicadorNumber, multiplicationNumber);
    
});