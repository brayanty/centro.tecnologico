import {} from "./copy.js";
import {} from "./scrollView.js";

const form = document.querySelector('#form-main')
let mensaje = 'https://api.whatsapp.com/send?phone=+573145494395&text=';

form.children.namedItem('btn-submit') .addEventListener('click',(e) => {

    e.preventDefault();

    mensaje = mensaje + form.children.namedItem('message').value;

    mensaje =  mensaje.replace(/ /g, "%20");

    linkClick(mensaje);
})

function linkClick(Url) {
    const a = document.createElement("a");
    a.href = Url;
    document.body.appendChild(a);
    window.open(Url, "_blank");
    document.body.removeChild(a);

  }