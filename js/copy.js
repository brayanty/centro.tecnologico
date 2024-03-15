let texto = '2003brayan2@gmail.com';

const btn_copy = document.querySelector('#nav__btn-copy');
const BODY = document.querySelector('.body');



const copiarContenido = async () => {
  try {
    await navigator.clipboard.writeText(texto);
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
