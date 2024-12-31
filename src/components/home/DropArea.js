import React, { useEffect, useState, useRef } from 'react';
import { Animated } from 'react-native';
import useFetchLocais from '../../hooks/useFetchLocais';
import {
  DropAreaContainer,
  ItemContainer,
  ItemText,
} from '../../styles/Home/DropAreaStyle';

const DropArea = ({ idRonda }) => {
  const [locais, setLocais] = useState([]);
  const [IsNull, setIsNull] = useState(false);
  const dropAreaTranslateY = useRef(new Animated.Value(-50)).current; 

  useEffect(() => {
    const fLocais = async () => {
      const locais = await useFetchLocais(idRonda);
      const idRondaCheck = locais[0]?.idRonda != null;
      setIsNull(idRondaCheck);
      setLocais(locais);

      
      Animated.timing(dropAreaTranslateY, {
        toValue: 2, 
        duration: 200, 
        useNativeDriver: true,
      }).start();
    };
    fLocais();
  }, [idRonda]);

  return (
    <Animated.View
      style={{
        transform: [{ translateY: dropAreaTranslateY }],
      }}
    >
      <DropAreaContainer>
        {locais.map((local, index) => (
          <AnimatedItemContainer
            key={index}
            local={local}
            IsNull={IsNull}
          />
        ))}
      </DropAreaContainer>
    </Animated.View>
  );
};

const AnimatedItemContainer = ({ local, IsNull }) => {
  const translateY = useRef(new Animated.Value(-0)).current; 

  useEffect(() => {
    // Animação para os itens descerem
    Animated.timing(translateY, {
      toValue: 0,
      duration: 300, // Duração da animação
      delay: 100, // Pequeno atraso para cada item
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        transform: [{ translateY }],
      }}
    >
      <ItemContainer status={local.status} IsNull={IsNull}>
        <ItemText>{local.nomeLocal}</ItemText>
        <ItemText>{local.hora}</ItemText>
      </ItemContainer>
    </Animated.View>
  );
};

export default DropArea;
