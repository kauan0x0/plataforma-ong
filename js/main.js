// js/main.js
import { validarCPF } from './validators.js';
import { aplicarMascara } from './masks.js';

const form = document.getElementById('formCadastro');
const cpfInput = document.getElementById('cpf');
const telefoneInput = document.getElementById('telefone');
const cepInput = document.getElementById('cep');

// Aplica máscaras
aplicarMascara(cpfInput);
aplicarMascara(telefoneInput);
aplicarMascara(cepInput);

// Validação e envio
form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!validarCPF(cpfInput.value)) {
    alert('CPF inválido! Corrija o campo.');
    cpfInput.focus();
    return;
  }

  alert('Cadastro realizado com sucesso!');
  form.reset();
});
