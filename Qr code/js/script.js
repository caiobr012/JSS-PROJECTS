const container = document.querySelector(".container");
const qrbtn = document.querySelector("#qr-form button")
const qrcodeInput = document.querySelector("#qr-form input");

const qrcodeImg= document.querySelector("#qr-code img");

function generatorQrCoede(){
    const qrcodeinputvalue = qrcodeInput.value;
    
    if(!qrcodeinputvalue) return;

    qrbtn.innerText= "gerando codigo..";

    console.log(qrcodeinputvalue);
    container.classList.add("active");
    qrcodeImg.scr =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrcodeinputvalue}`;
    qrbtn.innerText= "QR CODE criado";

    

}

qrbtn.addEventListener("click", (e)=>{
    generatorQrCoede();
});