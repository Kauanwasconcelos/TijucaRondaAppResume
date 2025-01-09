import React, {useEffect, useRef, useState} from 'react';
import {ToastAndroid} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';
import {useCameraDevice, useCodeScanner} from 'react-native-vision-camera';
import {
  CameraContainer,
  CameraQR,
  CameraPreview,
  TopLeftCorner,
  TopRightCorner,
  BottomLeftCorner,
  BottomRightCorner,
  LoadingText,
  TextArea,
} from '../styles/QrCode/QRcodeStyles';
import lerLoginAtual from '../hooks/Realm/useDefineLogin';
import useInitRealm from '../hooks/Realm/initRealm';
import useDefineRonda from '../hooks/Realm/useDefineRonda';
import requisicao from '../hooks/postQr';
import {Text} from 'react-native-paper';

const QrCodeScreen = () => {
  const navigator = useNavigation();
  const [latitude, setLat] = useState('');
  const [longitude, setLog] = useState('');
  const [valueqr, setValueqr] = useState('');
  const [idUsuario, setIdUsuario] = useState();
  const [realm, setRealm] = useState();
  const [rondaAtual, setRondaAtual] = useState();
  const scannerEnable = useRef(true);
  const device = useCameraDevice('back');

  async function getLatitude() {
    console.log('PEGANDO LATITUDE E LONGITUDE');
    try {
      await Geolocation.getCurrentPosition(async position => {
        await setLat(position.coords.latitude);
        await setLog(position.coords.longitude);
      });
    } catch (e) {
      console.log(e);
    }
  }

  const initRealm = async () => {
    const iniciaRealm = await useInitRealm();
    setRealm(iniciaRealm);
  };

  const defineRondaAtual = async () => {
    const rondaAtual = await useDefineRonda(realm);
    setRondaAtual(rondaAtual);
  };

  const defineLoginAtual = async () => {
    const loginAtual = await lerLoginAtual(realm);
    setIdUsuario(loginAtual);
  };

  useEffect(() => {
    if (realm) {
      getLatitude();
      defineLoginAtual();
      defineRondaAtual();
    }
  }, [realm]);

  useFocusEffect(
    React.useCallback(() => {
      initRealm();
    }, []),
  );

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: async codes => {
      await getLatitude();
      if (scannerEnable.current == false) {
        console.log('DESATIVADO');
        return;
      }

      scannerEnable.current = false;

      const valorQr = codes[0].value;

      const requisicaoLog = await requisicao(
        idUsuario,
        rondaAtual,
        valorQr,
        latitude,
        longitude,
      );
      // setValueqr(valorQr);
      if (requisicaoLog == true) {
        navigator.navigate('Home');
      }
    },
  });

  if (device == null) {
    return <LoadingText>Loading...</LoadingText>;
  }

  return (
    <>
      <CameraContainer>
        <TextArea>
          <Text
            style={{
              color: '#f0f0f0',
              fontSize: 16,
              fontWeight: 'medium',
              textAlign: 'center',
            }}>
            Escaneie o código do local para registrar sua presença no local
          </Text>
        </TextArea>


        <CameraPreview>
        <CameraQR codeScanner={codeScanner} device={device} isActive={true} />
          <TopLeftCorner />
          <TopRightCorner />
          <BottomLeftCorner />
          <BottomRightCorner />
        </CameraPreview>
      </CameraContainer>
    </>
  );
};

export default QrCodeScreen;
