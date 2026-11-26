// Elementos principais da interface
const botaoMenu = document.getElementById("menu-toggle");
const navegacao = document.getElementById("navegacao");
const botaoTema = document.getElementById("tema-toggle");
const formulario = document.getElementById("form-contato");
const retorno = document.getElementById("retorno-formulario");

// Abre e fecha o menu em telas menores
botaoMenu.addEventListener("click", () => {
  const estaAberto = navegacao.classList.toggle("aberto");
  botaoMenu.setAttribute("aria-expanded", String(estaAberto));
  botaoMenu.textContent = estaAberto ? "×" : "☰";
});

// Fecha o menu após selecionar uma seção
navegacao.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navegacao.classList.remove("aberto");
    botaoMenu.setAttribute("aria-expanded", "false");
    botaoMenu.textContent = "☰";
  });
});

// Alterna entre os temas claro e escuro
botaoTema.addEventListener("click", () => {
  document.body.classList.toggle("tema-escuro");
  const escuroAtivo = document.body.classList.contains("tema-escuro");
  botaoTema.textContent = escuroAtivo ? "☀" : "☾";
  botaoTema.setAttribute("aria-label", escuroAtivo ? "Ativar tema claro" : "Ativar tema escuro");
});

// Valida os campos e simula o envio, sem transmitir dados a um servidor
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();
  const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!nome || !email || !mensagem) {
    mostrarRetorno("Preencha todos os campos antes de enviar.", "erro");
    return;
  }

  if (!formatoEmail.test(email)) {
    mostrarRetorno("Informe um endereço de e-mail válido.", "erro");
    return;
  }

  formulario.reset();
  mostrarRetorno("Mensagem enviada com sucesso! (Envio demonstrativo.)", "sucesso");
});

// Atualiza a mensagem de retorno e sua aparência
function mostrarRetorno(texto, tipo) {
  retorno.textContent = texto;
  retorno.className = `retorno ${tipo}`;
}

// Exibe automaticamente o ano atual no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();
