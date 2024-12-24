import { useState } from 'react';
import { validarCpf, validarSenha } from '../utils/validate'; // Importando as validações
import User from '../api/User';

const useLogin = () => {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [errorCpf, setErrorCpf] = useState('');
  const [errorSenha, setErrorSenha] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const instancia = new User();

  const requestLogin = async () => {
    // Limpa os erros antes de validar
    setErrorCpf('');
    setErrorSenha('');

    // Validação dos campos de CPF e senha
    const erroCpf = validarCpf(cpf);
    const erroSenha = validarSenha(senha);

    // Se houver erros, exibe as mensagens e interrompe o fluxo
    if (erroCpf || erroSenha) {
      setErrorCpf(erroCpf);
      setErrorSenha(erroSenha);
      return false;
    }

    setIsLoading(true);

    try {
      const resposta = await instancia.login(cpf, senha); // Chamada ao back-end
      setIsLoading(false);

      if (resposta.success) {
        return true; // Login bem-sucedido
      }

      // Tratamento de erros específicos do servidor
      if (resposta.message === 'Senha incorreta') {
        setErrorSenha('Senha incorreta. Tente novamente.');
      } else if (resposta.message === 'Usuário não encontrado') {
        setErrorCpf('CPF não cadastrado.');
      } else {
        setErrorCpf('Erro desconhecido. Tente novamente.');
      }

      return false;
    } catch (err) {
      setIsLoading(false);
      setErrorCpf('Erro de rede. Verifique sua conexão.');
      console.error('Erro:', err);
      return false;
    }
  };

  return {
    cpf,
    setCpf,
    senha,
    setSenha,
    requestLogin,
    isLoading,
    errorCpf,
    errorSenha,
  };
};

export default useLogin;
