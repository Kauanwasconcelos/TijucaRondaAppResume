import {useState} from 'react';
import {validarCpf, validarSenha} from '../utils/validate'; // Importando as validações
import User from '../api/User';
import realmInit from './Realm/initRealm';
import defineLoginAtual from './Realm/useRealmLogin';

const useLogin = () => {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [errorCpf, setErrorCpf] = useState('');
  const [errorSenha, setErrorSenha] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const instancia = new User();

  const requestLogin = async () => {
    setErrorCpf('');
    setErrorSenha('');

    const erroCpf = validarCpf(cpf);
    const erroSenha = validarSenha(senha);

    if (erroCpf || erroSenha) {
      setErrorCpf(erroCpf);
      setErrorSenha(erroSenha);
      return false;
    }

    setIsLoading(true);

    try {
      const resposta = await instancia.login(cpf, senha); //
      setIsLoading(false);
      if (resposta.success) {
        const frealm = await realmInit();
        // console.log(frealm)
        // setRealm(frealm)
        console.log('AQUI ESTOU NO LOGIN');

        defineLoginAtual(
          frealm,
          resposta.idUsuario,
          resposta.token,
          resposta.nomedeUsuario,
        );
        return true;
      }

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
