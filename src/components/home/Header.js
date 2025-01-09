import React, { useState } from 'react';
import { Image } from 'react-native';
import {
  HeaderContainer,
  HeaderTitle,
  HeaderText,
} from '../../styles/Home/HeaderStyle';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Header = ({ name }) => {

  const formatName = (name) => {
    if (!name) return 'Usuário';
    const firstName = name.split(' ')[0];
    return firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
  };

  return (
    <HeaderContainer>
      <HeaderTitle>
        <Image
          source={require('../../../assets/img/logotijucapng.png')}
          style={{
            width: wp('20%'),
            height: hp('10%'),
            resizeMode: 'contain',
          }}
        />
        <HeaderText>{formatName(name)}</HeaderText>
      </HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
