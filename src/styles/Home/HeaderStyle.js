import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme}) =>
    theme.colors.surface}; 
  border-radius: 0px 0px 20px 20px;
  padding: ${wp('2%')}px;
`;

export const HeaderTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HeaderText = styled.Text`
  font-size: ${wp('4%')};
  /* font-weight: bold; */
  color: ${({theme}) => theme.colors.text};
  font-family: Poppins-Light;
`;

export const ReloadButton = styled.View`
  margin-right: ${wp('1%')};
  justify-content: center;
  align-items: center;
  width: ${wp(
    '30%',
  )};
`;
