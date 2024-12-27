import React, { useEffect, useState } from 'react';
import useFetchLocais from '../../hooks/useFetchLocais';
import {
  DropAreaContainer,
  ItemContainer,
  ItemText,
} from '../../styles/Home/DropAreaStyle';

const DropArea = ({ idRonda }) => {
  const [locais, setLocais] = useState([]);

  useEffect(() => {
    const fLocais = async () => {
      const locais = await useFetchLocais(idRonda);
      setLocais(locais);
    };
    fLocais();
  }, [idRonda]);

  return (
    <DropAreaContainer>
      {locais.map((local, index) => (
        <ItemContainer key={index} status={local.status}>
          <ItemText>{local.nomeLocal}</ItemText>
        </ItemContainer>
      ))}
    </DropAreaContainer>
  );
};

export default DropArea;
