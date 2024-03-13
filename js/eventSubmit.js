    const form = document.querySelector("#form-main");
    let link = "https://api.whatsapp.com/send?phone=+573145494395&text=";

    const btn = document.querySelector("#btn-submit");

    btn.addEventListener("click", (e) => {
        e.preventDefault();
        if (!form.children.namedItem("message").value) {
            handlerModal();
            return;
        }

        let sms = link + form.children.namedItem("message").value;

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
    
    function handlerModal() {
        const textareaNoText = document.querySelector('#textareaNoText');
        handlerClick("#textareaNoText");

        textareaNoText.addEventListener("click", () => {
            handlerClick("#close");
        })
    }
