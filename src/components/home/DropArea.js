import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { DropContainer, DropContent } from '../../styles/Home/DropAreaStyles';

const DropArea = () => {
  const locaisTemporarios = [
    { id: 1, nome: 'T.I', horario: '08:00 - 16:00' },
    { id: 2, nome: 'Praça de Alimentação', horario: '08:00 - 16:00' },
    { id: 3, nome: 'Escritório', horario: '08:00 - 16:00' },
  ];

  return (
    <DropContainer>
      {locaisTemporarios.map(local => (
        <View  key={local.id}>
          <DropContent>
            <Text>{local.nome}</Text>
            <Text>{local.horario}</Text>
          </DropContent>
        </View>
      ))}
    </DropContainer>
  );
};



export default DropArea;
