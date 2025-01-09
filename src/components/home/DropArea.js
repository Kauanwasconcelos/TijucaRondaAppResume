import React, {useEffect, useState, useRef} from 'react';
import {Animated} from 'react-native';
import useFetchLocais from '../../hooks/useFetchLocais';
import {
  DropAreaContainer,
  ItemContainer,
  ItemText,
} from '../../styles/Home/DropAreaStyle';

const DropArea = ({idRonda}) => {
  const [locais, setLocais] = useState([]);
  const [isNull, setIsNull] = useState(false);
  const dropAreaTranslateY = useRef(new Animated.Value(-40)).current;

  useEffect(() => {
    const fLocais = async () => {
      try {
        const locais = await useFetchLocais(idRonda);

        setLocais(locais);

        Animated.timing(dropAreaTranslateY, {
          toValue: 0,
          duration: 200, 
       
          useNativeDriver: true,
        }).start();
      } catch (error) {
        console.error('Erro ao buscar locais:', error);
      }
    };

    if (idRonda) {
      fLocais();
    }
  }, [idRonda]);

  return (
    <Animated.View
      style={{
        transform: [{translateY: dropAreaTranslateY}],
      }}>
      <DropAreaContainer>
        {locais.length > 0 ? (
          locais.map((local, index) => (
            <AnimatedItemContainer
              key={index}
              local={local}
              isNull={local.idRonda != null}
            />
          ))
        ) : (
          <ItemText>Nenhum local encontrado.</ItemText>
        )}
      </DropAreaContainer>
    </Animated.View>
  );
};

const AnimatedItemContainer = ({local, isNull}) => {
  const translateY = useRef(new Animated.Value(-10)).current;
  console.log(isNull + 'TESTE');
  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 200,
      delay: 100,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        transform: [{translateY}],
      }}>
      <ItemContainer status={local.status} IsNull={isNull}>
        <ItemText>{local.nomeLocal}</ItemText>
        <ItemText>{local.hora}</ItemText>
      </ItemContainer>
    </Animated.View>
  );
};

export default DropArea;
