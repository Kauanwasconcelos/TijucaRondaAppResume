import React from 'react';
import {View, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import QRArea from '../components/QrCode/QRArea'; // Importando o componente QRArea
import {Title, Description} from '../styles/QrCode/QRcodeStyles'; // Estilos para título

const QrCodeScreen = () => {
  const onScanSuccess = data => {
    // Aqui você pode processar os dados do QRCode
    Alert.alert('QRCode Escaneado', `Conteúdo: ${data}`);
  };

  const handleReload = () => {
    console.log('Scanner recarregado');
  };

  return (
    <>
      <View style={{flex: 1}}>
        <Title>Escaneie o QR Code</Title>
        <Description>
          Posicione o QR Code dentro da área da câmera para escanear.
        </Description>
        <QRArea onScanSuccess={onScanSuccess} onReload={handleReload} />
      </View>
    </>
  );
};

export default QrCodeScreen;
