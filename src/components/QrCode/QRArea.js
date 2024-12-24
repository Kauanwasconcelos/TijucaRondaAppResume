import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { Button } from 'react-native-paper'; // Usando o Button do react-native-paper
import { Container, ScannerContainer, ReloadButtonContainer } from '../../styles/QrCode/QrAreaStyles';

const QRArea = ({ onScanSuccess, onReload }) => {
  const [scanned, setScanned] = useState(false);

  const handleScanSuccess = (e) => {
    // Aqui, você pode tratar o QR Code escaneado
    onScanSuccess(e.data);  // Passa os dados para o componente pai
    setScanned(true);
  };

  const handleReload = () => {
    setScanned(false);  // Reseta o estado de escaneamento
    onReload && onReload();  // Chama a função onReload, se fornecida
  };

  return (
    <Container>
      <ScannerContainer>
        <QRCodeScanner
          onRead={handleScanSuccess}
          showMarker
          reactivate
          reactivateTimeout={3000}
          topContent={<View />}
          bottomContent={
            <ReloadButtonContainer>
              <Button mode="contained" onPress={handleReload}>
                Recarregar Scanner
              </Button>
            </ReloadButtonContainer>
          }
        />
      </ScannerContainer>

      {scanned && (
        <Button mode="contained" onPress={handleReload}>
          Tentar Novamente
        </Button>
      )}
    </Container>
  );
};

export default QRArea;
