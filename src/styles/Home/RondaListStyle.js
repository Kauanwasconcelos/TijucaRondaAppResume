import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// Lista View
export const ListaView = styled.View`
  margin-top: ${hp('1%')}px;
  height: ${hp('60%')}px;
  width: 100%;
  text-align: center;
  border-radius: ${wp('2%')}px;
`;

// FlatList
export const List = styled.FlatList`
  margin: auto;
  width: ${wp('90%')}px;
`;

// Botão View
export const BView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
  align-items: center;
  width: 100%;
  height: ${hp('9%')}px;
  margin: auto;
  border-radius: ${wp('3%')}px;
  margin-top: ${hp('2%')}px;
  position: relative;
  z-index: 10;
`;

// Botão 1
export const B1 = styled.TouchableOpacity`
  flex: 1;
  width: ${wp('78%')}px;
  height: 100%;
  background-color: #fff;
  justify-content: center;
  border-radius: ${wp('2%')}px;
`;

export const TB1 = styled.Text`
  margin-left: ${wp('5%')}px;
  font-family: FuturaBold;
  font-size: ${wp('4%')}px;
`;

// Botão 2 (Ação)
export const B2 = styled.TouchableOpacity`
  width: ${wp('8%')}px;
  height: ${hp('4%')}px;
  border-radius: 50%;
  background-color: #17bf52;
  margin: ${hp('2%')}px;
`;

// Botão 2 (Parar)
export const B2Stop = styled.TouchableOpacity`
  width: ${wp('8%')}px;
  height: ${hp('4%')}px;
  border-radius: 50%;
  background-color: #ff464f;
  margin: ${hp('2%')}px;
`;
