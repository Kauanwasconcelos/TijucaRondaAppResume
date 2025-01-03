import React from 'react';
import { Image } from 'react-native';
import { HeaderContainer, HeaderTitle, HeaderText, ReloadButton } from '../../styles/Home/HeaderStyle';
import { Button, Text } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Header = ({ name, setReload, reload }) => {
 
  const formatName = (name) => {
    if (!name) return 'Usuário'; 
    const firstName = name.split(' ')[0]; 
    return firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase(); 
  };

  return (
    <HeaderContainer>
      {/* Logo e Texto */}
      <HeaderTitle>
        <Image
          source={require('../../../assets/img/logotijucapng.png')}
          style={{
            width: wp('15%'),
            height: hp('10%'),
            resizeMode: 'contain',
          }}
        />
        <HeaderText>{formatName(name)}</HeaderText> {/* Nome do vigia formatado */}
      </HeaderTitle>

      {/* Botão de recarregar */}
      <ReloadButton>
        <Button
          icon="reload"
          mode="contained"
          onPress={() => {
            setReload(!reload);
            console.log('Recarregando...');
          }}
          style={{
            borderRadius: wp('3%'),
            backgroundColor: '#224479',
          }}
          labelStyle={{
            fontSize: wp('3.5%'),
            fontWeight: 'bold',
          }}>
          <Text style={{ color: 'white' }}>Recarregar</Text>
        </Button>
      </ReloadButton>
    </HeaderContainer>
  );
};

export default Header;
