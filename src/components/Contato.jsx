import React, { useEffect, useState } from "react";
import styled from "styled-components";
import anime from "animejs";

const Contato = ({ next, update }) => {
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");

  useEffect(() => {
    // Animação de entrada
    anime
      .timeline()
      .add({
        targets: ".title",
        opacity: [0, 1],
        translateY: [30, 0],
        delay: 0,
        duration: 600,
        easing: "easeOutExpo",
      })
      .add({
        targets: ".input-container:nth-child(1)",
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 500,
        easing: "easeOutExpo",
      },)
      .add({
        targets: ".input-container:nth-child(2)",
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 500,
        easing: "easeOutExpo",
      },)
      .add({
        targets: ".input-container:nth-child(3)",
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 500,
        easing: "easeOutExpo",
      },)
      .add({
        targets: ".input-container:nth-child(4)",
        opacity: [0, 1],
        translateY: [30, 0],
        delay: 0,
        duration: 500,
        easing: "easeOutExpo",
      },)
      .add({
        targets: ".start-button",
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        easing: "easeOutExpo",
      },);
  }, []);

  const handleNext = () => {
    if (!cpf.trim() || !telefone.trim() || !email.trim()) {
      setErro("Por favor, preencha todos os campos antes de continuar.");
      return;
    }
  
    if (cpf.length < 11) {
      setErro("O CPF deve conter 11 números.");
      return;
    }
  
    if (telefone.length < 10) {
      setErro("O telefone deve conter pelo menos 10 números.");
      return;
    }
  
    // Validação básica do e-mail
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErro("Por favor, insira um e-mail válido.");
      return;
    }
  
    // Envia os dados para o estado global
    update({ cpf, telefone, email });
  
    // Animação de saída
    anime.timeline().add({
      targets: ".title, .input-container, .start-button",
      opacity: [1, 0],
      duration: 800,
      easing: "easeInOutQuad",
      complete: next,
    });
  };
  

  return (
    <Container>
      <Title className="title">Informações de Contato</Title>
      <InputContainer className="input-container">
  <Input
    type="text"
    placeholder="Digite seu CPF"
    value={cpf}
    maxLength={11} // Limita a 11 dígitos
    onChange={(e) => {
      const value = e.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos
      setCpf(value);
      setErro("");
    }}
  />
  <FocusBorder />
</InputContainer>
<InputContainer className="input-container">
  <Input
    type="text"
    placeholder="Digite seu telefone com DDD"
    value={telefone}
    maxLength={11} // Limita a 11 dígitos (DDD + número)
    onChange={(e) => {
      const value = e.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos
      setTelefone(value);
      setErro("");
    }}
  />
  <FocusBorder />
</InputContainer>

      <InputContainer className="input-container">
        <Input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
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

export default Contato;