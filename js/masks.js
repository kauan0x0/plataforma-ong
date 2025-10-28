// js/masks.js
export function aplicarMascara(input) {
  if (!input) return;

  input.addEventListener('input', () => {
    let valor = input.value.replace(/\D/g, '');
    if (input.id === 'cpf') {
      valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
      valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
      valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    } else if (input.id === 'telefone') {
      valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');
      valor = valor.replace(/(\d{5})(\d{4})$/, '$1-$2');
    } else if (input.id === 'cep') {
      valor = valor.replace(/(\d{5})(\d)/, '$1-$2');
    }
    input.value = valor;
  });
}