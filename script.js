// Exemplo: mensagem de confirmação ao enviar o formulário
document.querySelector('.contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Mensagem enviada com sucesso!');
});


function abrirModal() {
  document.getElementById("modalPix").style.display = "block";
}

function fecharModal() {
  document.getElementById("modalPix").style.display = "none";
}
