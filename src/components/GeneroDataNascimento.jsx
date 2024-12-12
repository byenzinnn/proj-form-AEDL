import React, { useEffect, useState } from "react";
import styled from "styled-components";
import anime from "animejs";

const GeneroDataNascimento = ({ next, update }) => {
  const [genero, setGenero] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
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
    if (!genero || !dataNascimento) {
      setErro("Por favor, preencha todos os campos antes de continuar.");
      return;
    }

    // Atualiza os dados no estado global
    update({ genero, dataNascimento });

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
      <Title className="title">Informações Pessoais</Title>
      <InputContainer className="input-container">
        <RadioGroup>
          <RadioLabel active={genero === "Masculino"} onClick={() => setGenero("Masculino")}>
            Masculino
          </RadioLabel>
          <RadioLabel active={genero === "Feminino"} onClick={() => setGenero("Feminino")}>
            Feminino
          </RadioLabel>
        </RadioGroup>
      </InputContainer>
      <InputContainer className="input-container">
        <Input
          type="date"
          value={dataNascimento}
          onChange={(e) => {
            setDataNascimento(e.target.value);
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
`;

const InputContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin-bottom: 10px;
  opacity: 0;
`;

const RadioGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const RadioLabel = styled.button`
  flex: 1;
  padding: 10px;
  font-family: var(--main-font);
  font-weight: var(--main-font-weight);
  font-size: 1rem;
  text-align: center;
  background-color: ${({ active }) => (active ? "var(--button-hover-bg-color)" : "transparent")};
  color: ${({ active }) => (active ? "#fff" : "var(--main-text-color)")};
  border: 2px solid var(--button-border-color);
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--button-hover-bg-color);
    color: #fff;
  }
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

export default GeneroDataNascimento;
