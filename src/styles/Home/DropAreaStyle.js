import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const DropAreaContainer = styled.View`
  background-color: #fff;
  margin-top: ${hp('-2%')}px;
  padding: ${wp('4%')}px;
  border-radius: ${wp('2%')}px ${wp('2%')}px ${wp('1%')}px ${wp('1%')}px;
`;

export const ItemContainer = styled.View`
  flex: auto;
  flex-direction: row;
  justify-content: space-between;
  padding: ${wp('3%')}px;
  margin-bottom: ${hp('1%')}px;
  border-radius: ${wp('1.5%')}px;
  background-color: ${({ IsNull }) => (IsNull ? '#2CD402' : '#F9102C')};
`;

export const ItemText = styled.Text`

  color: white;
  font-size: ${wp('3%')}px;
  font-weight: bold;
`;
