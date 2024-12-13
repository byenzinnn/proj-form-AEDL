import React, { useEffect, useState } from "react";
import styled from "styled-components";
import anime from "animejs";

const CidadeEstado = ({ next, update }) => {
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [erro, setErro] = useState("");

  const estados = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA",
    "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
  ];

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
        targets: ".input-container",
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 500,
        easing: "easeOutExpo",
      })
      .add({
        targets: ".start-button",
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        easing: "easeOutExpo",
      }, "-=500");
  }, []);

  const handleNext = () => {
    if (!cidade.trim() || !estado.trim()) {
      setErro("Por favor, preencha todos os campos antes de continuar.");
      return;
    }

    // Atualiza o estado global com os dados
    update({ cidade, estado });

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
      <Title className="title">Onde você mora?</Title>
      <InputContainer className="input-container">
        <Input
          type="text"
          placeholder="Digite sua cidade"
          value={cidade}
          onChange={(e) => {
            setCidade(e.target.value);
            setErro("");
          }}
        />
        <Select
          value={estado}
          onChange={(e) => {
            setEstado(e.target.value);
            setErro("");
          }}
        >
          <option value="" disabled>
            UF
          </option>
          {estados.map((uf) => (
            <option key={uf} value={uf}>
              {uf}
            </option>
          ))}
        </Select>
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
  display: flex;
  gap: 10px;
  width: 100%;
  max-width: 400px;
  margin-bottom: 10px;
  opacity: 0;
`;

const Input = styled.input`
  flex: 2; /* Ocupa mais espaço */
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

const Select = styled.select`
  flex: 1; /* Menor espaço que o input */
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

export default CidadeEstado;