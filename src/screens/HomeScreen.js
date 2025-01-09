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
import initializeRealm from '../hooks/Realm/initRealm';
import useRealmRonda from '../hooks/Realm/useRealmRonda';
import useDefineRonda from '../hooks/Realm/useDefineRonda';
import DropArea from '../components/home/DropArea';
import QRArea from '../components/QrCode/QRArea';

import lerLoginAtual from '../hooks/Realm/useDefineLogin';
import {RefreshControl} from 'react-native';

const HomeScreen = ({navigation}) => {
  const [rondas, setRondas] = useState([]);
  const [modalVisible, setModalVisible] = useState([]);
  const [reload, setReload] = useState(!reload);
  const [rondaAtual, setRondaAtual] = useState(0);
  const [realm, setRealm] = useState(null);
  const [visibleBox, setVisibleBox] = useState(null);
  const [usuario, setUsuario] = useState({});
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    try {
      const respostaHookRondas = await useRondas();
      setRondas(respostaHookRondas);
    } catch (e) {
      console.log(e);
    } finally {
      setRefreshing(false);
    }
  };

  const toggleBox = idRonda => {
    setVisibleBox(visibleBox === idRonda ? null : idRonda);
  };

  const onClose = () => {
    setReload(!reload);
    setModalVisible(null);
  };

  const defineUser = async () => {
    const loginAtual = await lerLoginAtual(realm);
    setUsuario(loginAtual);
  };

  const defineRondaAtual = async () => {
    const rondaAtual = await useDefineRonda(realm);
    setRondaAtual(rondaAtual);
  };

  const initRealm = async () => {
    const iniciaRealm = await initializeRealm();
    setRealm(iniciaRealm);
  };

  useEffect(() => {
    if (realm) {
      defineRondaAtual();
      defineUser();
    }
  }, [realm]);

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
      initRealm();
      carregaRonda();
    }, [reload]),
  );
  return (
    <>
      <HomeContainer>
        <Header
       
       
          name={usuario.nomedeUsuario}
        />
        <ListaView>
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
                      toggleBox={toggleBox}
                      prop={[item.idRonda, rondaAtual, realm]}
                    />
                  )}
                </BView>

                {visibleBox == item.idRonda && (
                  <DropArea idRonda={item.idRonda} />
                )}
              </>
            )}
            keyExtractor={item => item.idRonda.toString()}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={['#ff0000', '#00ff00', '#0000ff']}
              />
            }
          />
        </ListaView>
        <QRArea setReload={setReload} reload={reload}>
 
        </QRArea>
      </HomeContainer>
    </>
  );
};

export default HomeScreen;
