import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Dimensions, Text} from 'react-native';
import {LoginContainer, FormContainer} from '../styles/Login/styledComponents';
import Logo from '../components/Logo';
import Welcome from '../components/login/Welcome';
import LoginForm from '../components/login/LoginForm';
import useLogin from '../hooks/useLogin';

const {height} = Dimensions.get('window'); // Pegando a altura da tela

const LoginScreen = () => {
  const navigation = useNavigation(); // Navegação para outras telas
  const {
    cpf,
    setCpf,
    senha,
    setSenha,
    requestLogin,
    isLoading,
    errorCpf,
    errorSenha,
  } = useLogin(); // Usando o hook de login

  const handleSubmit = async () => {
    const sucesso = await requestLogin();
    if (sucesso) {
      navigation.navigate('Home'); // Redireciona para a tela inicial ao logar
    }
  };

  return (
    <LoginContainer>
      <Logo />
      <FormContainer style={{height: height * 0.6}}>
        {/* Definindo 60% da altura da tela */}
        <Welcome />
        <LoginForm
          cpf={cpf}
          setCpf={setCpf}
          senha={senha}
          setSenha={setSenha}
          onSubmit={handleSubmit}
          isLoading={isLoading}
          errorCpf={errorCpf}
          errorSenha={errorSenha}
        />
        {/* Exibição de mensagens de erro globais (opcional) */}
        {errorCpf || errorSenha ? (
          <View>
            {errorCpf ? <Text style={{color: 'red'}}>{errorCpf}</Text> : null}
            {errorSenha ? (
              <Text style={{color: 'red'}}>{errorSenha}</Text>
            ) : null}
          </View>
        ) : null}
      </FormContainer>
    </LoginContainer>
  );
};

export default LoginScreen;
