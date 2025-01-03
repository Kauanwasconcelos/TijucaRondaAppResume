import React from 'react';
import { Text } from 'react-native-paper';
import { Container, StyledButton, QRImage } from '../../styles/QrCode/QrAreaStyles';
import { useNavigation } from '@react-navigation/native';

const QRArea = (reload, setReload) => {
  const navigation = useNavigation();

  function navegar() {
    navigation.navigate('QR', {reload, setReload});
  }

  return (
    <Container>
      {/* Imagem Centralizada */}
      <QRImage source={require('../../../assets/img/image.png')} 
      resizeMode='contain'
      
      />

      {/* Botão de Escanear */}
      <StyledButton mode="contained-ripple" onPress={navegar}>
        <Text style={{ color: '#fff', fontSize: 13, fontWeight: 'bold' }}>
          Escanear QR Code
        </Text>
      </StyledButton>
    </Container>
  );
};

export default QRArea;
