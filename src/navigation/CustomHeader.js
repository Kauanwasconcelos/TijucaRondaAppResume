// CustomHeader.js
import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const HeaderContainer = styled.View`
  min-height: ${hp('8%')};
  background-color: white; /* Cor de fundo do cabeçalho */
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Title = styled.Text`
  font-size: 18px;
  font-family: 'Poppins-Regular';
  flex: 1;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const CustomHeader = ({title, onBackPress}) => {
  return (
    <HeaderContainer>
      {onBackPress && (
        <TouchableOpacity onPress={onBackPress} style={{paddingLeft: 16, paddingRight: -18}}>
    
          <Icon name="x" size={26} color="#000" />
        </TouchableOpacity>
      )}
      <Title>{title}</Title>
    </HeaderContainer>
  );
};

export default CustomHeader;
