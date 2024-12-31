import React, {useEffect, useRef, useState} from 'react';
import {Alert, ToastAndroid} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';
import {
  useCameraDevice,
  useCodeScanner,
  Camera,
} from 'react-native-vision-camera';
import {
  Container,
  LoadingText,
  CameraContainer,
  CameraQR,
  CameraPreview,
  CameraPreview2,
} from '../styles/QrCode/QRcodeStyles'; // Estilos importados
import lerLoginAtual from '../hooks/Realm/useDefineLogin';
import useInitRealm from '../hooks/Realm/useInitRealm';
import useDefineRonda from '../hooks/Realm/useDefineRonda';
import requisicao from '../hooks/postQr';

const QrCodeScreen = () => {
  const [latitude, setLat] = useState('');
  const [longitude, setLog] = useState('');
  const [valueqr, setValueqr] = useState('');
  const [idUsuario, setIdUsuario] = useState();
  const [realm, setRealm] = useState();
  const [rondaAtual, setRondaAtual] = useState();
  const scannerEnable = useRef(true);
  const device = useCameraDevice('back');
  const navigator = useNavigation();

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
      if (scannerEnable.current == false) {
        return;
      }

      scannerEnable.current = false;
      console.log('TESTEEEEE');

      for (i = 0; i <= 0; i++) {
        scannerEnable.current = false;
        const valorQr = codes[0].value;
        setValueqr(valorQr);
        console.log(valorQr);
        await initRealm();
        await getLatitude();
        await defineLoginAtual();
        await defineRondaAtual();
        // console.log(latitude, longitude);
        
        const requisicaoa = requisicao(
          idUsuario,
          rondaAtual,
          valueqr,
          latitude,
          longitude,
        );

        if (requisicaoa) {
          scannerEnable.current = true;
          navigator.navigate('Home');
          ToastAndroid.show('Local escaneado com sucesso', ToastAndroid.SHORT);
        } else {
          ToastAndroid.show(
            'Falha ao escanear, se o problema persistir, abra um chamado',
            ToastAndroid.SHORT,
          );
        }
      }
    },
  });

  if (device == null) {
    return <LoadingText>Loading...</LoadingText>;
  }

  return (
   <CameraContainer>
  <CameraQR codeScanner={codeScanner} device={device} isActive={true} />
  {/* Adiciona uma sobreposição com transparência ao redor da câmera */}
  <CameraPreview>
    <CameraPreview2 />
  </CameraPreview>
</CameraContainer>

  );
};

export default QrCodeScreen;
