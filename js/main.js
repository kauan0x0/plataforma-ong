// ======= main.js =======
// Controle do formulário e avisos de erro

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Pega os campos
    const nome = form.querySelector("#nome");
    const email = form.querySelector("#email");
    const telefone = form.querySelector("#telefone");
    const cpf = form.querySelector("#cpf");

    let valido = true;
    let mensagem = "";

    // Verificações básicas
    if (isEmpty(nome.value)) {
      valido = false;
      mensagem = "O campo Nome é obrigatório.";
    } else if (!validarEmail(email.value)) {
      valido = false;
      mensagem = "E-mail inválido.";
    } else if (!validarTelefone(telefone.value)) {
      valido = false;
      mensagem = "Telefone inválido.";
    } else if (!validarCPF(cpf.value)) {
      valido = false;
      mensagem = "CPF inválido.";
    }

    // Mostra alerta visual
    const alerta = document.createElement("div");
    alerta.classList.add("alert");
    alerta.style.padding = "12px";
    alerta.style.marginTop = "10px";
    alerta.style.borderRadius = "8px";
    alerta.style.fontWeight = "600";

    if (valido) {
      alerta.textContent = "Formulário enviado com sucesso!";
      alerta.style.background = "#2E7D32";
      alerta.style.color = "#fff";
      form.reset();
    } else {
      alerta.textContent = mensagem;
      alerta.style.background = "#D32F2F";
      alerta.style.color = "#fff";
    }

    // Remove alertas antigos e adiciona novo
    const antigos = form.querySelectorAll(".alert");
    antigos.forEach((a) => a.remove());
    form.appendChild(alerta);
  });
});
