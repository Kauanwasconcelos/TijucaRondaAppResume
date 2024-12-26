import React, { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import useFetchLocais from '../../hooks/useFetchLocais'; 
import { useFocusEffect } from '@react-navigation/native';

const DropArea = ({idRonda}) => {
  const[locais, setLocais] = useState([]);



  useEffect(()=>{
    const fLocais = async ()=>{
      console.log(idRonda)
      const locais = await useFetchLocais(idRonda)
      console.log(locais)
      setLocais(locais)
    }
    fLocais()

  },[])

  return (
    <View>
      {/* Exibe o indicador de carregamento */}

      {/* Exibe mensagem de erro, se houver */}
  

      {/* Exibe os dados quando estiver carregado */}
      
        <View>
          {locais.map((local, index) => (
            <View key={index}>
              <Text>{local.nomeLocal}</Text>
            </View>
          ))}
          {/* <Text>TESTO</Text> */}
        </View>
      
    </View>
  );
};

export default DropArea;

