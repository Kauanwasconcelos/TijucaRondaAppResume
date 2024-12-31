import React from 'react';
import { Image, View } from 'react-native';
import { HeaderContainer, HeaderTitle, HeaderText, ReloadButton } from '../../styles/Home/HeaderStyle'; // Atualizando os estilos
import { Button, Text } from 'react-native-paper';
import { useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Header = ({ name, setReload, reload }) => {
  return (
    <HeaderContainer>
      {/* Logo e Texto com tamanho proporcional */}
      <HeaderTitle>
        <Image
          source={require('../../../assets/img/logotijucapng.png')}
          style={{ width: wp('15%'), height: hp('8%') }}  // Tamanho proporcional
        />
        <HeaderText>{name}</HeaderText> {/* Nome do vigia */}
      </HeaderTitle>

      {/* Botão de recarregar */}
      <ReloadButton>
        <Button
      
          icon="reload"
          mode="contained"
          onPress={() => {
            setReload(!reload);
            console.log('Recarregando...');
          }}>
          <Text style={{ color: 'white' }}>Recarregar</Text>
        </Button>
      </ReloadButton>
    </HeaderContainer>
  );
};

export default Header;
