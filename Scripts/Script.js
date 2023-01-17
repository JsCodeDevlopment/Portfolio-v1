// Quando o usuário rolar 20 pixels para baixo a partir do topo da página, mostre o botão.
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
} // Quando o usuário clicar no botão, role de volta ao topo da página.
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
} // Fim do código do botão VOLTAR AO TOPO.

// Quando clicar na imagem de um projeto, abrirá uma pop-up.
function openPopup() {
  let popup = document.querySelector('.popUp');
  popup.classList.add('popUp-Open');
} function closePopup() { // Quando clicar no "x" a pop-up será fechada.
  let popup = document.querySelector('.popUp');
  popup.classList.remove('popUp-Open');
}
let page = document.querySelector('.contentPort');
page.addEventListener("click", (ev) => {
  let popupOpen = document.querySelector(".popUp.popUp-Open");
  if (popupOpen && ev.target.classList.value === "contentPort") {
    popupOpen.classList.remove("popUp-Open");
  }
});


// function sendMail(){
//    const nomeCompleto = document.querySelector("#nome").value;
//    const email = document.querySelector("#email").value;
//    const mensagem = document.querySelector("#mensagem").value;
   
//    const mensagemFinal = JSON.stringify({nomeCompleto, email, mensagem});
//    console.log(mensagemFinal);
// };

class FormSubmit {
  constructor(settings) {
    this.settings = settings;
    this.form = document.querySelector(settings.form);
    this.formButton = document.querySelector(settings.button);
    if (this.form) {
      this.url = this.form.getAttribute("action");
    }
    this.sendForm = this.sendForm.bind(this);
  }

  displaySuccess() {
    this.form = alert (this.settings.success);
  }

  displayError() {
    this.form = alert (this.settings.error);
  }

  getFormObject() {
    const formObject = {};
    const fields = this.form.querySelectorAll("[nome]");
    fields.forEach((field) => {
      formObject[field.getAttribute("nome")] = field.value;
    });
    return formObject;
  }

  onSubmission(event) {
    event.preventDefault();
    event.target.disabled = true;
    event.target.innerText = "Enviando...";
  }

  async sendForm(event) {
    try {
      this.onSubmission(event);
      await fetch(this.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(this.getFormObject()),
      });
      this.displaySuccess();
    } catch (error) {
      this.displayError();
      throw new Error(error);
    }
  }

  init() {
    if (this.form) this.formButton.addEventListener("click", this.sendForm);
    return this;
  }
}

const formSubmit = new FormSubmit({
  form: "[data-form]",
  button: "[data-button]",
  success: "Mensagem enviada\n" + "Com sucesso! ☺",
  error: "Não foi possível enviar sua mensagem. ☻",
});
formSubmit.init();