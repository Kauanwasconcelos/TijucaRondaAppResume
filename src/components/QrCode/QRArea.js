import React from 'react';
import {Text} from 'react-native-paper';
import {
  Container,
  StyledButton,
  QRImage,
} from '../../styles/QrCode/QrAreaStyles';
import {useNavigation} from '@react-navigation/native';

const QRArea = () => {
  const navigation = useNavigation();

  function navegar() {
    navigation.navigate('QR');
  }

  return (
    <Container>
      <QRImage
        source={require('../../../assets/img/image.png')}
        resizeMode="contain"
      />

      <StyledButton mode="contained-ripple" onPress={navegar}>
        <Text style={{color: '#fff', fontSize: 13, fontWeight: 'bold'}}>
          Escanear QR Code
        </Text>
      </StyledButton>
    </Container>
  );
};

export default QRArea;
