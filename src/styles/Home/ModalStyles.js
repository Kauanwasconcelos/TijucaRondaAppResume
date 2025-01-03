import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// Estilos para o Modal
export const CenteredView = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalView = styled.View`
  width: ${wp('80%')}; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;


  background-color: white;
  padding: ${hp('2%')}px; 
  border-radius: ${wp('5%')}px; 
`;

export const Title = styled.Text`
  font-size: ${({isModalA}) => (isModalA ? hp('3.5%') : wp('5%'))}; 
  margin: ${hp('1%')}px;
  font-family: 'Poppins';
  font-weight: 900;
  text-align: center;
`;

export const Paragrafo = styled.Text`
  font-size: ${wp('4%')}px; 
  margin: ${hp('1%')}px;
  text-align: center;
  font-family: Poppins;
`;

export const SimButton = styled.TouchableOpacity`
  width: ${wp('70%')}; 
  min-height: ${hp('6%')};
  border-radius: 10px;
  margin-top: ${hp('3%')};
  background-color: ${({isModalA}) => (isModalA ? '#2CD402' : '#F9102C')};
  justify-content: center;
  align-items: center;
`;

export const SimButtonText = styled.Text`
  color: white;
  text-align: center;
  margin: auto;
  font-weight: 900;
  font-size: ${wp('4.5%')}; 
`;

export const NaoButton = styled.TouchableOpacity`
  width: ${wp('70%')};
  min-height: ${hp('6%')}; 
  border-radius: 10px;
  margin-top: ${hp('2%')};
  border-color: #292929;
  border-width: 1px;
  justify-content: center;
  align-items: center;
`;

export const NaoButtonText = styled.Text`
  color: #292929;
  text-align: center;
  margin: auto;
  font-weight: 900;
  font-size: ${wp('4.5%')}; 
`;

