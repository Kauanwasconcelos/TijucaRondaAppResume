import styled from 'styled-components/native';
import {Button} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  border-radius: 50px 50px 0px 0px ;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  padding: ${hp('3%')}px ${wp('7%')}px;
`;

export const QRImage = styled.Image`
  width: ${wp('40%')};
  height: ${wp('40%')};
  /* margin:  ${hp('%')}px; */
`;

export const StyledButton = styled(Button)`
  padding: ${hp('1%')}px ${wp('8%')}px;
  margin: ${hp('2%')}px;
  border-radius: ${wp('6%')}px;
  background-color: ${({theme}) => theme.colors.primary};
`;
