import React from 'react';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importando o ícone
import {
  CenteredView,
  ModalView,
  Title,
  Paragrafo,
  SimButton,
  SimButtonText,
  NaoButton,
  NaoButtonText,
} from '../../styles/Home/ModalStyles'; // Importando os estilos
import initRonda from '../../hooks/initRonda';
import stopRonda from '../../hooks/stopRonda';
import {ToastAndroid} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const ModalComponent = ({isVisible, onClose, prop, defineRondaAtual}) => {
  // Verificando o estado do modal (iniciar ou encerrar)
  const isModalA = prop[1] === 0; // Se for 0, é um modal para iniciar a ronda

  // Função para iniciar a ronda
  const iniciaRonda = async (idRonda, idUsuario) => {
    const playRonda = await initRonda(idRonda, idUsuario);
    if (playRonda === true) {
      ToastAndroid.show('Ronda iniciada com sucesso', ToastAndroid.SHORT);
      defineRondaAtual(prop[2], prop[0]);
      onClose();
    } else {
      ToastAndroid.show('Ronda já iniciada', ToastAndroid.SHORT);
      defineRondaAtual(prop[2], prop[0]);
      onClose();
    }
  };

  // Função para encerrar a ronda
  const encerraRonda = async () => {
    const pararRonda = await stopRonda(prop[1]);
    if (pararRonda === true) {
      ToastAndroid.show('Ronda encerrada com sucesso', ToastAndroid.SHORT);
      defineRondaAtual(prop[2], 0);
      onClose();
    }
  };

  return (
    <Modal
      isVisible={isVisible}
      animationOut={'fade'}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      animationInTiming={500}
      animationOutTiming={500}>
      <CenteredView>
        <ModalView isModalA={isModalA}>
          {/* Ícone de alerta ou sucesso */}
          <Icon
            name={isModalA ? 'check-circle' : 'exclamation-circle'}
            size={50}
            color={isModalA ? 'green' : 'red'}
            style={{
              marginBottom: hp('2%'),
            }} /* Ajuste o espaçamento abaixo do ícone */
          />

          <Paragrafo>
            {isModalA
              ? 'Esta ação inicia a ronda'
              : 'Esta ação finaliza a ronda e não pode ser revertida'}
          </Paragrafo>

          {/* Botões de ação */}
          <SimButton
            isModalA={isModalA}
            onPress={() =>
              isModalA ? iniciaRonda(prop[0], 1) : encerraRonda()
            }>
            <SimButtonText>Sim</SimButtonText>
          </SimButton>

          <NaoButton onPress={onClose}>
            <NaoButtonText>Não</NaoButtonText>
          </NaoButton>
        </ModalView>
      </CenteredView>
    </Modal>
  );
};

export default ModalComponent;
