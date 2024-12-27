import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.surface}; /* Usa a cor primária do tema */
  border-radius:0px 0px 20px 20px;
  padding: ${wp('3%')}px; /* Ajuste o padding para dar espaço ao redor */

`;

export const HeaderTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HeaderText = styled.Text`
  font-size: ${wp('4%')};  /* Tamanho dinâmico baseado na largura da tela */
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin-left: ${wp('3%')};  /* Ajuste do espaçamento entre a imagem e o texto */
  font-family: Poppins-Bold;
  text-transform: uppercase;
`;

export const ReloadButton = styled.View`
  justify-content: center;
  align-items: center;
  width: ${wp('30%')}; /* O botão ocupa uma parte significativa da largura da tela */
`;
