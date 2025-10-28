// ======= masks.js =======
// Aplicação automática de máscaras

function aplicarMascaraCPF(input) {
  input.addEventListener("input", () => {
    let v = input.value.replace(/\D/g, "");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    input.value = v;
  });
}

function aplicarMascaraTelefone(input) {
  input.addEventListener("input", () => {
    let v = input.value.replace(/\D/g, "");
    v = v.replace(/^(\d\d)(\d)/g, "($1) $2");
    v = v.replace(/(\d{4,5})(\d{4})$/, "$1-$2");
    input.value = v;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const cpfInput = document.querySelector("#cpf");
  const telInput = document.querySelector("#telefone");

  if (cpfInput) aplicarMascaraCPF(cpfInput);
  if (telInput) aplicarMascaraTelefone(telInput);
});
