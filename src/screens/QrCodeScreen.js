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
import useInitRealm from '../hooks/Realm/useInitRealm';
import useDefineRonda from '../hooks/Realm/useDefineRonda';
import requisicao from '../hooks/postQr';
import {Text} from 'react-native-paper';

const QrCodeScreen = () => {
  const [latitude, setLat] = useState('');
  const [longitude, setLog] = useState('');
  const [valueqr, setValueqr] = useState('');
  const [idUsuario, setIdUsuario] = useState();
  const [realm, setRealm] = useState();
  const [rondaAtual, setRondaAtual] = useState();
  const scannerEnable = useRef(true);
  const device = useCameraDevice('back');

  async function getLatitude() {
    try {
      Geolocation.getCurrentPosition(position => {
        setLat(position.coords.latitude);
        setLog(position.coords.longitude);
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
    initRealm();
    defineLoginAtual();
    defineRondaAtual();
    getLatitude();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      initRealm();
      defineLoginAtual();
      defineRondaAtual();
      getLatitude();
    }, []),
  );

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: async codes => {
      if (!scannerEnable.current) {
        return;
      }
      scannerEnable.current = false;

      const valorQr = codes[0].value;
      setValueqr(valorQr);
      await initRealm();
      await getLatitude();
      await defineLoginAtual();
      await defineRondaAtual();

      const requisicaoa = requisicao(
        idUsuario,
        rondaAtual,
        valueqr,
        latitude,
        longitude,
      );

      if (requisicaoa) {
        scannerEnable.current = true;
        ToastAndroid.show('Local escaneado com sucesso', ToastAndroid.SHORT);
      } else {
        ToastAndroid.show(
          'Falha ao escanear, se o problema persistir, abra um chamado',
          ToastAndroid.SHORT,
        );
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
          <Text style={{
            color : '#f0f0f0',
            fontSize: 16,
            fontWeight: 'medium',
            textAlign: 'center',
          }}> Escaneie o código do local para registrar sua presença no local</Text>/
        </TextArea>

        <CameraQR codeScanner={codeScanner} device={device} isActive={true} />
        <CameraPreview>
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
