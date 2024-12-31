import styled from 'styled-components/native';

export const DropAreaContainer = styled.View`
  background-color: #fff; 
  margin-top: -19px;
  padding: 16px;
  border-radius: 0px 0px 8px 8px;
  position: relative
  ;
  z-index: -1;
`;

export const ItemContainer = styled.View`
  display: flex;
  flex-direction: row;
  padding: 12px;
  margin-bottom: 8px;
  border-radius: 6px;
  background-color: ${({IsNull}) => (IsNull? '#2CD402' : '#F9102C')}
`;

export const ItemText = styled.Text`
  margin: 0% 50% 0% 8%;
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
