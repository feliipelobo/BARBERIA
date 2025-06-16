window.addEventListener("load", (event) => {
  mostraTexto();
});

function mostraTexto() {
  // new TypeIt("#top-heroes-title", {
  //   speed: 70,
  //   waitUntilVisible: true,
  // }).go();

  // new TypeIt("#top-villains-title", {
  //   speed: 70,
  //   waitUntilVisible: true,
  // }).go();
}

function enviarFormulario(event) {
  event.preventDefault();
  // pegar o valor do e-mail e pegar o valor da senha e mostrar num console.log

  const nome = document.querySelector("#nome").value
  const senha = document.querySelector("#senha").value



  console.log({
    nome: nome,
    senha, senha
  })

  window.alert("Mensagem Recebida. Obrigado!");
}

function sendToWhatsApp(phone, message) {
  const url = `https://wa.me/send?phone=${phone}&text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}







