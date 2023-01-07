// Quando o usuário rolar 20 pixels para baixo a partir do topo da página, mostre o botão
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// Quando o usuário clicar no botão, role de volta ao topo da página
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// Fim do código do botão VOLTAR AO TOPO
function openPopup() {
  let popup = document.querySelector('.popUp');
  popup.classList.add('popUp-Open');
}

function closePopup() {
  let popup = document.querySelector('.popUp');
  popup.classList.remove('popUp-Open');
}