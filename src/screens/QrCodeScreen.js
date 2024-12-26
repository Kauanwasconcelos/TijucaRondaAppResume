import React, { useEffect, useRef, useState } from 'react';
import {View, Alert, ToastAndroid} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import QRArea from '../components/QrCode/QRArea'; // Importando o componente QRArea
import {Title, Description} from '../styles/QrCode/QRcodeStyles'; // Estilos para título
import lerLoginAtual from '../hooks/Realm/useDefineLogin';
import {
  Camera,
  useCameraDevice,
  useCodeScanner,
} from 'react-native-vision-camera';
import Geolocation from '@react-native-community/geolocation';
import useInitRealm from "../hooks/Realm/useInitRealm"
import useDefineRonda from "../hooks/Realm/useDefineRonda"



import requisicao from '../hooks/postQr';

const QrCodeScreen = () => {
  const [latitude, setLat] = useState('');
  const [longitude, setLog] = useState('');
  const [valueqr, setValueqr] = useState('');
  const [idUsuario, setIdUsuario] = useState()
  const[realm, setRealm] = useState()
  const[rondaAtual, setRondaAtual] = useState()
  const scannerEnable = useRef(true);
  const device = useCameraDevice('back');

  useEffect(() => {
    const defineLoginAtual = async () => {
      const loginAtual = await lerLoginAtual(realm);
      setIdUsuario(loginAtual)
    };
    const defineRondaAtual = async () => {
      const rondaAtual = await useDefineRonda(realm);
      setRondaAtual(rondaAtual);
    };
    
    const initRealm = async () => {
      const iniciaRealm = await useInitRealm();
      setRealm(iniciaRealm);
    };

    
    initRealm();
    defineLoginAtual();
    defineRondaAtual();




  },[]);
  async function getLatitude() {
    try {
      Geolocation.getCurrentPosition(position => {
        setLat(position.coords.latitude);
        setLog(position.coords.longitude);
      });
    } catch (e) {}
  }
  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: async codes => {
      if (scannerEnable.current == false) {
        return;
      }

      scannerEnable.current = false;

      for (i = 0; i <= 0; i++) {
        const valorQr = codes[0].value;
        const data = new Date().toISOString().split("T")[0];
        setValueqr(valorQr);
        console.log(valorQr);
        await getLatitude();
      }
      const requisicaoa = requisicao(idUsuario, rondaAtual,valueqr, latitude, longitude, idRonda)
      if(requisicaoa){
        scannerEnable.current = true
        ToastAndroid.show(
          'Local escaneado com sucesso',
          ToastAndroid.SHORT,
        );
      }
      else{
        ToastAndroid.show(
          'Falha ao escanear, se o problema persistir, abra um chamado',
          ToastAndroid.SHORT,
        );
      }


    },
  });

  
  if (device == null) {
    return <Text>Loading...</Text>;
  }
  return (
    <>
      <View>
        <Camera
          codeScanner={codeScanner}
          device={device}
          isActive={true}
          style={{width: "100%", height: "100%"}}
        />
      </View>
    </>
  );
};

export default QrCodeScreen;
