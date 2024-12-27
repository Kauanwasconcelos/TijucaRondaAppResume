// styles/Home/DropAreaStyle.js
import styled from 'styled-components/native';

export const DropAreaContainer = styled.View`
  background-color: #fff; 
  padding: 16px;
  border-radius: 0px 0px 8px 8px;

`;

export const ItemContainer = styled.View`
background-color: ${({isModalA}) => (isModalA ? '#2CD402' : '#F9102C')};  padding: 12px;
  margin-bottom: 8px;
  border-radius: 6px;
`;

export const ItemText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
