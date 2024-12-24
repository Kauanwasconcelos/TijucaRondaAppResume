import styled from 'styled-components/native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const Title = styled.Text`
  font-size: ${wp('6%')}; /* Ajuste dinâmico baseado na largura da tela */
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text}; /* Usando a cor do tema */
  text-align: center;
  margin-top: ${hp('5%')}; /* Espacamento superior */
  margin-bottom: ${hp('3%')}; /* Espacamento inferior */
  font-family: Poppins-Bold;
`;

export const Description = styled.Text`
  font-size: ${wp('4.5%')}; /* Ajuste dinâmico baseado na largura da tela */
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  font-family: Poppins-Light;
  margin-bottom: ${hp('3%')};
`;
