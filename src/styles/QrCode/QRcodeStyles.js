import styled from 'styled-components/native';
import { Camera } from 'react-native-vision-camera';

export const Container = styled.View`
position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
 background-color: rgba(0, 0, 0, 0.0); 
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const LoadingText = styled.Text`
  font-size: 18px;
  color: #000;
  text-align: center;
`;

export const CameraContainer = styled.View`
position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: rgba(0, 0, 0, 0.0); 
  z-index: 0; /* Correção de z-index */
`;

export const CameraPreview = styled.View`
position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  z-index: 1; /* Ajustado para estar acima do CameraContainer */
`;

export const CameraPreview2 = styled.View`
position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 30%;
  background-color: rgba(0, 0, 0, 0.0); /* Transparência */
  justify-content: center;
  align-items: center;
  z-index: 2; /* Está acima do CameraPreview */

`;

export const ToastText = styled.Text`
  color: #000;
`;

export const CameraQR = styled(Camera)`
  width: 60%;
  height: 30%;
  z-index: 1;
`;
