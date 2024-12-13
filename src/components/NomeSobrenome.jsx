import React, { useEffect, useState } from "react";
import styled from "styled-components";
import anime from "animejs";

const NomeSobrenome = ({ next, update }) => {
  const [nome, setNome] = useState(""); // Estado para armazenar o nome digitado
  const [erro, setErro] = useState(""); // Estado para armazenar mensagens de erro

  useEffect(() => {
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
        targets: ".input-container",
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        easing: "easeOutExpo",
      })
      .add({
        targets: ".start-button",
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 1000,
        easing: "easeOutExpo",
      }, "-=500");
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setNome(value);
    setErro(""); // Limpa o erro ao digitar algo
    update({ nome: value });
  };

  const handleNext = () => {
    if (!nome.trim()) {
      setErro("Por favor, insira seu nome antes de continuar.");
      return;
    }
    // Animação de saída
    anime.timeline().add({
      targets: ".title",
      opacity: [1, 0],
      translateY: [0, 30],
      duration: 600,
      easing: "easeInOutQuad",
    })
    .add({
      targets: ".input-container",
      opacity: [1, 0],
      translateY: [0, 30],
      duration: 400,
      easing: "easeInOutQuad",
    })
    .add({
      targets: ".start-button",
      opacity: [1, 0],
      scale: [1, 0],
      height: [60, 20],
      duration: 400,
      easing: "easeInOutQuad",
      complete: next,
    });
  };

  return (
    <Container>
      <Title className="title">
        Prazer em te conhecer, <span>{nome || "..."}</span>
      </Title>
      <InputContainer className="input-container">
        <Input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={handleInputChange}
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
  padding-block: 20px;
  padding-inline: 20px;
  background-color: var(--main-bg-color);
  overflow: hidden;
  gap: 20px;
`;

const Title = styled.h1`
  color: var(--main-text-color);
  font-family: var(--main-font);
  font-weight: var(--main-font-weight);
  opacity: 0;

  span {
    color: var(--button-hover-bg-color); /* Destaque o nome do usuário */
  }
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin-bottom: 10px;
  opacity: 0;
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
  position: relative;
  display: inline-block;
  padding: 15px 30px;
  font-size: 1rem;
  font-family: var(--main-font);
  font-weight: var(--main-font-weight);
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  background-color: transparent;
  border: 2px solid var(--button-border-color);
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;
  opacity: 0;

  &:hover {
    color: #fff;
    background-color: var(--button-hover-bg-color);
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  margin: 5px 0;
`;

export default NomeSobrenome;