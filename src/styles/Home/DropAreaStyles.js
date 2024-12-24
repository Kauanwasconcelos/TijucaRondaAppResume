import styled from 'styled-components/native';

// Contêiner para o DropArea, ajustado para ter margem e altura apropriadas
export const DropContainer = styled.View`
  transition: 3ms ease;
  background-color: #f0f0f0;
  padding: 10px 0;  /* Adicionar espaçamento entre os itens */
  width: 100%;   
  border-radius: 10px;  

`;

// Conteúdo dentro do DropArea, com padding e borda arredondada
export const DropContent = styled.View`
  padding: 20px;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0,0,0, 0.1);
  margin-bottom: 10px; /* Espaçamento entre os elementos dentro do DropArea */
  position: relative; /* Adicionando posição relativa para garantir o controle do z-index */
`;

