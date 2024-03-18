    const form = document.querySelector("#form-main");
    const linkWhatsapp = "https://api.whatsapp.com/send?phone=+573145494395&text=";

    const btn = document.querySelector("#btn-submit");

    btn.addEventListener("click", (e) => {
        e.preventDefault();
        if (!form.children.namedItem("message").value) {
            handlerModal();
            return;
        }

        let sms = linkWhatsapp + form.children.namedItem("message").value;

        sms = sms.replace(/ /g, "%20");

        linkClick(sms);
        sms = "";
    });

    function linkClick(Url) {
        const a = document.createElement("a");
        a.href = Url;
        document.body.appendChild(a);
        window.open(Url, "_blank");
        document.body.removeChild(a);
    }

    function handlerClick(action) {
        const a = document.createElement("a");
        a.href = action;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    
    function handlerModal(...t) {
        const textareaNoText = document.querySelector('#modalEffect');
        handlerClick("#modalEffect");

        textareaNoText.addEventListener("click", () => {
            handlerClick("#close");
            textareaNoText.removeEventListener("click",()=>{

            })
        })

    }
