import React, { useEffect } from "react";
import styled from "styled-components";

const CadastroConcluido = () => {
  return (
    <Container>
      <Title className="title">Cadastro Concluído!</Title>
      <Message>
        Obrigado por se cadastrar, nossa equipe entrará em contato em breve!
      </Message>
    </Container>
  );
};

// Estilização com styled-components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 20px;

  background-color: var(--main-bg-color);
`;

const Title = styled.h1`
  color: var(--main-text-color);
  font-family: var(--main-font);
  font-weight: bold;
  margin-bottom: 10px;
`;

const Message = styled.p`
  color: var(--main-text-color);
  font-family: var(--main-font);
  text-align: center;
  max-width: 400px;
  line-height: 1.5;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  font-family: var(--main-font);
  font-weight: bold;
  font-size: 1rem;
  color: #fff;
  background-color: var(--button-hover-bg-color);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--button-border-color);
    transform: scale(1.05);
  }
`;

export default CadastroConcluido;