import styled from 'styled-components/native';
import {Button} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 1;
  border-radius: 30px 30px 0px 0px;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
`;
export const StyledButton = styled(Button).attrs({
  contentStyle: {
    height: hp('6%'),
  },
})`
  margin-top: ${hp('2%')}px;
  padding: 0 ${wp('4%')}px;
  width: ${wp('60%')};
  align-self: center;
  height: ${hp('6%')};
`;

// export const ScannerContainer = styled.View`
//   width: 100%;
// ${({ theme }) => theme.colors.text};
//   justify-content: center;
//   align-items: center;
//   background-color: #fff;
//   border-radius: 10px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   margin-bottom: 20px;
// `;

// export const ReloadButtonContainer = styled.View`
//   margin-top: 20px;
//   justify-content: center;
//   align-items: center;
// `;
