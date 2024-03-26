const productsServices = [
    ...document.querySelectorAll(".products-services__preview"),
];

productsServices.map((PS) => {
    PS.addEventListener("click", () => {
        let PStext = PS.firstElementChild.firstElementChild.textContent.trim();
        console.log(PStext);

        switch (PStext) {
            case "Cambios de pantallas":
                if(confirm('¿Quieres salir del sitio?',)){
                    linkClick(linkWhatsapp + 'Buenas, deseo obtener un cambio de pantalla a mi celular');
                }
                break;
            case "Cambio de altavoces":
                if(confirm('¿Quieres salir del sitio?',)){
                    linkClick(linkWhatsapp + 'Buenas, deseo cambiar el altavoz de mi celular');
                }
                break;
            case "Reparación de fallas electronícas":
                if(confirm('¿Quieres salir del sitio?',)){
                    linkClick(linkWhatsapp + 'Buenas, deseo obtener una reparación para mi dispositivo');
                }
                break;

            case "Venta de acesorios":
                if(confirm('¿Quieres salir del sitio?',)){
                    linkClick(linkWhatsapp + 'Buenas, deseo obtener una lista de los acesorios disponibles');
                }
                break;

            case "Protectores de pantalla y forros":
                if(confirm('¿Quieres salir del sitio?',)){
                    linkClick(linkWhatsapp + 'Buenas, deseo obtener información de protectores o forros');
                }
                break;

            case "Reparación de Equipos de sonidos":
                if(confirm('¿Quieres salir del sitio?',)){
                    linkClick(linkWhatsapp + 'Buenas, deseo obtener información de un dispositivo de sonido');
                }
                break;

            default:
                return;
                break;
        }
    });
});
4194304