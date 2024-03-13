let texto = '2003brayan2@gmail.com';

const btn_copy = document.querySelector('#nav__btn-copy');
const BODY = document.querySelector('.body');



const copiarContenido = async () => {
  try {
    await navigator.clipboard.writeText(texto);

    //creando elementos para el modal
    const copy_succes = document.createElement('div');
    const textModal = document.createElement('h4');

    //añadiendo texto
    textModal.innerText = 'El Correo se copio correctamente';

    //añadiendo clases
    copy_succes.classList.add('copy__modal');
    //insertando elementos
    copy_succes.insertAdjacentElement("afterbegin", textModal);

    BODY.insertAdjacentElement('afterbegin', copy_succes);

  } catch (err) {
    console.error('Error al copiar: ', err);
  }
}

const btncopy = btn_copy.addEventListener('click', () => {
  document.querySelector('#modalcopysucces').addEventListener('click',()=>{
    handlerClick('#close')
  })
  copiarContenido();

})
