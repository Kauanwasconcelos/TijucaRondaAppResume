import styled from 'styled-components/native';
import {Camera} from 'react-native-vision-camera';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const CameraContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const CameraQR = styled(Camera)`
  position: absolute;
  width: ${wp('65%')};
  height: ${wp('65%')};
  border-radius: 8px;
  top: 50%;
  left: 50%;
  margin-top: -${wp('32.5%')};
  margin-left: -${wp('32.5%')};
`;

export const LoadingText = styled.Text`
  font-size: 18px;
  color: #000;
  text-align: center;
`;

export const CameraPreview = styled.View`
  position: fixed;
  width: ${wp('75%')}px;
  height: ${wp('75%')}px;
 
`;

export const Corner = styled.View`
  width: ${wp('7%')}px;
  height: ${wp('7%')}px;
  position: absolute;
  border-width: 4px;
  border-style: solid;
`;

export const TopLeftCorner = styled(Corner)`
  top: 0;
  left: 0;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-top-color: #ffffff;
  border-left-color: #ffffff;
`;

export const TopRightCorner = styled(Corner)`
  top: 0;
  right: 0;
  border-left-color: transparent;
  border-bottom-color: transparent;
  border-top-color: #ffffff;
  border-right-color: #ffffff;
`;

export const BottomLeftCorner = styled(Corner)`
  bottom: 0;
  left: 0;
  border-right-color: transparent;
  border-top-color: transparent;
  border-bottom-color: #ffffff;
  border-left-color: #ffffff;
`;

export const BottomRightCorner = styled(Corner)`
  bottom: 0;
  right: 0;
  border-left-color: transparent;
  border-top-color: transparent;
  border-bottom-color: #ffffff;
  border-right-color: #ffffff;
`;

export const TextArea = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 18px;
  position: absolute;
  top: 10%;
  color: #f0f0f0;
`;
