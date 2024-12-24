// Função para validar CPF
export const validarCpf = cpf => {
  if (!cpf) {
    return 'CPF é obrigatório.';
  }

  // Remove formatações como pontos e traços
  const cpfLimpo = cpf.replace(/\D/g, '');
  const cpfRegex = /^\d{11}$/;

  if (!cpfRegex.test(cpfLimpo)) {
    return 'O CPF precisa ter exatamente 11 dígitos.';
  }

  // Lógica para validar dígitos verificadores
  const cpfArr = cpfLimpo.split('').map(Number);
  const validarDigito = (arr, peso) =>
    (arr.slice(0, peso - 1).reduce((acc, val, idx) => acc + val * (peso - idx), 0) * 10) % 11 % 10;

  const digito1 = validarDigito(cpfArr, 10);
  const digito2 = validarDigito(cpfArr, 11);

  if (cpfArr[9] !== digito1 || cpfArr[10] !== digito2) {
    return 'CPF inválido.';
  }

  return ''; // CPF válido
};

// Função para validar senha
export const validarSenha = senha => {
  if (!senha) {
    return 'A senha é obrigatória.';
  }

  if (senha.length < 4) {
    return 'A senha precisa ter pelo menos 4 caracteres.';
  }

  return ''; // Senha válida
};
