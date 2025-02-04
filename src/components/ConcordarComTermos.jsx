import React, { useState } from "react";
import styled from "styled-components";
import anime from "animejs";

const ConcordarTermos = ({ onConfirm, update }) => {
  const [aceito, setAceito] = useState(false);
  const [erro, setErro] = useState("");

  const handleConfirm = () => {
    if (!aceito) {
      setErro("Você deve concordar com os termos antes de continuar.");
      return;
    }

    console.log("Usuário aceitou os termos."); 

    anime.timeline().add({
      targets: "#cont1", // Use a classe correta
      opacity: [1, 0],
      translateY: [0, -20],
      duration: 800,
      easing: "easeInOutQuad",
      complete: () => {
        update({ assinouTermos: true }); // Atualiza o estado global
        onConfirm();
      },
    });
  };

  return (
    <Container id="cont1">
      <Title>Concorde com os Termos</Title>
      <TermsContainer>
        <Text>
          Por favor, leia e concorde com os termos antes de continuar. Clique no
          link abaixo para acessar os termos:
          <br />
          <a
            href="/assets/TERMO_VOLUNTARIADO.zip"
            target="_blank"
            rel="noopener noreferrer"
            download="TERMO_VOLUNTARIADO.zip"
          >
            Download do Termo de Voluntariado
          </a>
        </Text>
      </TermsContainer>
      <CheckboxContainer>
        <Checkbox
          type="checkbox"
          id="aceito"
          checked={aceito}
          onChange={() => {
            setAceito(!aceito);
            setErro(""); // Limpa erro ao marcar
          }}
        />
        <Label htmlFor="aceito">Eu li e concordo com os termos</Label>
      </CheckboxContainer>
      {erro && <ErrorMessage>{erro}</ErrorMessage>}
      <StyledButton onClick={handleConfirm}>Confirmar</StyledButton>
    </Container>
  );
};

// **Estilização com Styled-Components**
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: var(--main-text-color);
  margin-bottom: 20px;
`;

const TermsContainer = styled.div`
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 1rem;
  color: var(--main-text-color);
  text-align: center;

  a {
    color: var(--button-hover-bg-color);
    text-decoration: underline;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const Label = styled.label`
  font-size: 1rem;
  color: var(--main-text-color);
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-bottom: 10px;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: var(--button-hover-bg-color);
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: var(--button-border-color);
  }
`;

export default ConcordarTermos;
