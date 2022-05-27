const buttonForm = document.getElementById ("submit");
buttonForm.onclick = enviarForm;

const emails = [];
const userEmail = document.getElementById("exampleFormControlInput1");
const userText =document.getElementById("exampleFormControlTextarea1");


function enviarForm (e){
    e.preventDefault();
    if(userEmail.value !== ""){
        emails.push(userEmail.value)
        Toastify({
            text: "Tu mensaje fue enviado exitosamente!",
            className: "info",
            style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
        console.log(emails)
        } else{
            alert("Verifique ingresar correctamente su email")
        }
    userEmail.value = "";
    userText.value = "";
}     