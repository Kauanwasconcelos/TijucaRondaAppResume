import styled from 'styled-components/native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 1;
  border-top: 10px;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
`;

export const ScannerContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const ReloadButtonContainer = styled.View`
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;
