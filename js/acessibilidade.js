const toggleBtn = document.getElementById("toggle-contraste");
let mode = localStorage.getItem("themeMode") || "normal";

document.body.classList.add(mode);
atualizarTextoBotao(mode);

toggleBtn.addEventListener("click", () => {
  if (mode === "normal") mode = "dark-mode";
  else if (mode === "dark-mode") mode = "high-contrast";
  else mode = "normal";

  document.body.classList.remove("dark-mode", "high-contrast");
  if (mode !== "normal") document.body.classList.add(mode);

  atualizarTextoBotao(mode);
  localStorage.setItem("themeMode", mode);
});

function atualizarTextoBotao(modo) {
  if (modo === "dark-mode") toggleBtn.textContent = "🌙 Modo Escuro";
  else if (modo === "high-contrast") toggleBtn.textContent = "⚡ Alto Contraste";
  else toggleBtn.textContent = "♿ Acessibilidade";
}
const status = document.getElementById("statusAcessibilidade");

function atualizarTextoBotao(modo) {
  if (modo === "dark-mode") {
    toggleBtn.textContent = "🌙 Modo Escuro";
    status.textContent = "Modo escuro ativado";
  } else if (modo === "high-contrast") {
    toggleBtn.textContent = "⚡ Alto Contraste";
    status.textContent = "Modo alto contraste ativado";
  } else {
    toggleBtn.textContent = "♿ Acessibilidade";
    status.textContent = "Modo padrão ativado";
  }
}
