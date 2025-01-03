// screens/HomeScreen.js
import React, {useEffect, useState} from 'react';
import useRondas from '../hooks/useRondas';
import {
  ListaView,
  List,
  BView,
  B1,
  TB1,
  B2,
  B2Stop,
} from '../styles/Home/RondaListStyle';

import Header from '../components/home/Header';
import {HomeContainer} from '../styles/Home/HomeStyles';
import {useFocusEffect} from '@react-navigation/native';
import ModalComponent from '../components/home/ModalComponent';
import useInitRealm from '../hooks/Realm/useInitRealm';
import useRealmRonda from '../hooks/Realm/useRealmRonda';
import useDefineRonda from '../hooks/Realm/useDefineRonda';
import DropArea from '../components/home/DropArea';
import QRArea from '../components/QrCode/QRArea';
import {StyledButton} from '../styles/Login/styledComponents';
import lerLoginAtual from '../hooks/Realm/useDefineLogin';

const HomeScreen = ({navigation}) => {
  const [rondas, setRondas] = useState([]);
  const [modalVisible, setModalVisible] = useState([]);
  const [reload, setReload] = useState(!reload);
  const [rondaAtual, setRondaAtual] = useState(0);
  const [realm, setRealm] = useState(null);
  const [visibleBox, setVisibleBox] = useState(null);
  const [usuario, setUsuario] = useState({})
  
  const toggleBox = idRonda => {
    setVisibleBox(visibleBox === idRonda ? null : idRonda);
  };

  const onClose = () => {
    setReload(!reload);
    setModalVisible(null);
  };

  const defineUser = async () => {
    const loginAtual = await lerLoginAtual(realm);
    console.log("loginAtual")
    setUsuario(loginAtual);
  };

  const defineRondaAtual = async () => {
    const rondaAtual = await useDefineRonda(realm);
    console.log(rondaAtual)
    console.log("rondaAtual")
    setRondaAtual(rondaAtual);
  };
  
        const initRealm = async () => {
          const iniciaRealm = await useInitRealm();
          setRealm(iniciaRealm);
        };

  useEffect(() => {
    const load = async () => {
      await initRealm();
      await defineUser()
      await defineRondaAtual()
      await defineLoginAtual()
      await useDefineRonda(realm)
    }
      load();

  },[reload]);

  useFocusEffect(
    React.useCallback(() => {
      const carregaRonda = async () => {
        try {
          const respostaHookRondas = await useRondas();
          setRondas(respostaHookRondas);
        } catch (e) {
          console.log(e);
        }
      };
      const load = async () => {
        try{
        await initRealm();
        await defineUser()
        await defineRondaAtual()
        await useDefineRonda(realm)
      }catch(e){
        console.log(e + "TESTEEEEEEEE USE EFFECTTTFOCUS")
      }}
        load();
        carregaRonda()
    }, []),
  );
  console.log("login define")
  return (
    <>
      <HomeContainer >
        <Header setReload={setReload} reload={reload} />
        <ListaView >
          <List 
            
            data={rondas}
            renderItem={({item}) => (
              <>
                <BView
                  style={
                    item.horaFim !== '' ? {display: 'none'} : {display: 'flex'}
                  }>
                  <B1 onPress={() => toggleBox(item.idRonda)}>
                    <TB1>{item.nomeRota}</TB1>
                  </B1>
                  {item.idUsuario ? (
                    <B2Stop
                      onPress={() => {
                        setModalVisible(item.idRonda);
                      }}
                    />
                  ) : (
                    <B2
                      onPress={() => {
                        setModalVisible(item.idRonda);
                      }}
                    />
                  )}
                  {modalVisible === item.idRonda && (
                    <ModalComponent
                      isVisible={true}
                      onClose={onClose}
                      defineRondaAtual={useRealmRonda}
                      prop={[item.idRonda, rondaAtual, realm]}
                    />
                  )}
                </BView>

                {/* Colocando o DropArea fora do BView */}
                {visibleBox === item.idRonda && (
                  <DropArea idRonda={item.idRonda} />
                )}
              </>
            )}
            keyExtractor={item => item.idRonda.toString()}
          />
        </ListaView>
        <QRArea setReload={setReload} reload={reload}>
          {/* <StyledButton mode="contained">a</StyledButton> */}
        </QRArea>
      </HomeContainer>
    </>
  );
};

export default HomeScreen;
