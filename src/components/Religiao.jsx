import React, { useState, useEffect } from "react";
import styled from "styled-components";
import anime from "animejs";

const Religiao = ({ next, update }) => {
  const [religiao, setReligiao] = useState("");
  const [erro, setErro] = useState("");

  useEffect(() => {
    // Animação de entrada
    anime
      .timeline()
      .add({
        targets: ".title",
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 600,
        easing: "easeOutExpo",
      })
      .add({
        targets: ".input-container, .start-button",
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        easing: "easeOutExpo",
      }, "-=500");
  }, []);

  const handleNext = () => {
    if (!religiao.trim()) {
      setErro("Por favor, informe sua religião antes de continuar.");
      return;
    }

    // Atualiza o estado global com a religião
    update({ religiao });

    // Animação de saída
    anime.timeline().add({
      targets: ".title, .input-container, .start-button",
      opacity: [1, 0],
      translateY: [0, -30],
      duration: 1000,
      easing: "easeInOutQuad",
      complete: next,
    });
  };

  return (
    <Container>
      <Title className="title">Qual é a sua religião?</Title>
      <InputContainer className="input-container">
        <Input
          type="text"
          placeholder="Digite sua religião"
          value={religiao}
          onChange={(e) => {
            setReligiao(e.target.value);
            setErro("");
          }}
        />
        <FocusBorder />
      </InputContainer>
      {erro && <ErrorMessage>{erro}</ErrorMessage>}
      <StyledButton className="start-button" onClick={handleNext}>
        Próximo
      </StyledButton>
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
`;

const InputContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: none;
  border-bottom: 2px solid #ccc;
  background-color: transparent;
  color: var(--main-text-color);
  outline: none;
  font-family: var(--main-font);
  transition: border-color 0.3s;

  &:focus {
    border-color: var(--button-hover-bg-color);
  }
`;

const FocusBorder = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--button-hover-bg-color);
  transition: width 0.3s;

  ${Input}:focus + & {
    width: 100%;
  }
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
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
`;

export default Religiao;