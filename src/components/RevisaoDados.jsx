import anime from "animejs";
import React, { useEffect } from "react";
import styled from "styled-components";

const RevisaoDados = ({ formData, update, onSubmit }) => {
  const {
    nome,
    cpf,
    telefone,
    email,
    cidade,
    estado,
    genero,
    dataNascimento,
    religiao,
  } = formData;

  const formatDate = (date) => {
    if (!date) return "dd/mm/aaaa"; // Retorno padrão caso a data esteja vazia
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  };

  const handleInputChange = (field, value) => {
    const updatedData = { ...formData, [field]: value };
    update(updatedData);
  };

  useEffect(() => {
    anime
      .timeline()
      .add({
        targets: ".title",
        opacity: [0, 1],
        duration: 800,
        translateY: [30, 0],
        easing: "easeInOutQuad",
      })
      .add({
        targets: ".data-container",
        opacity: [0, 1],
        duration: 600,
        translateY: [5, 0],
        easing: "easeInOutQuad",
      })
      .add({
        targets: ".button",
        opacity: [0, 1],
        duration: 800,
        translateY: [5, 0],
        easing: "easeInOutQuad",
      });
  }, []);

  return (
    <Container>
      <Title className="title">Revise e Edite seus dados</Title>
      <DataContainer className="data-container">
        <DataRow>
          <Label>Nome:</Label>
          <Input
            type="text"
            value={nome}
            onChange={(e) => handleInputChange("nome", e.target.value)}
          />
        </DataRow>
        <DataRow>
          <Label>CPF:</Label>
          <Input
            type="text"
            value={cpf}
            onChange={(e) => handleInputChange("cpf", e.target.value)}
          />
        </DataRow>
        <DataRow>
          <Label>Telefone:</Label>
          <Input
            type="text"
            value={telefone}
            onChange={(e) => handleInputChange("telefone", e.target.value)}
          />
        </DataRow>
        <DataRow>
          <Label>Email:</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
        </DataRow>
        <DataRow>
          <Label>Cidade:</Label>
          <Input
            type="text"
            value={cidade}
            onChange={(e) => handleInputChange("cidade", e.target.value)}
          />
        </DataRow>
        <DataRow>
          <Label>Estado:</Label>
          <Input
            type="text"
            value={estado}
            onChange={(e) => handleInputChange("estado", e.target.value)}
          />
        </DataRow>
        <DataRow>
          <Label>Gênero:</Label>
          <Input
            type="text"
            value={genero}
            onChange={(e) => handleInputChange("genero", e.target.value)}
          />
        </DataRow>
        <DataRow>
          <Label>Data de Nascimento:</Label>
          <Input
            type="text"
            value={formatDate(dataNascimento)}
            onChange={(e) => {
              const [day, month, year] = e.target.value.split("/");
              const formattedValue = `${year}-${month.padStart(
                2,
                "0"
              )}-${day.padStart(2, "0")}`;
              handleInputChange("dataNascimento", formattedValue);
            }}
          />
        </DataRow>
        <DataRow>
          <Label>Religião:</Label>
          <Input
            type="text"
            value={religiao}
            onChange={(e) => handleInputChange("religiao", e.target.value)}
          />
        </DataRow>
      </DataContainer>
      <ButtonContainer>
        <StyledButton className="button" primary onClick={onSubmit}>
          Confirmar
        </StyledButton>
      </ButtonContainer>
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
  overflow-y: sroll;
`;

const Title = styled.h1`
  color: var(--main-text-color);
  font-family: var(--main-font);
  font-weight: var(--main-font-weight);
  margin-bottom: 20px;

  @media (max-width: 400px) {
    font-size: 6vw;
  }
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 500px;
  max-height: 400px;
  padding: 20px;
  border-radius: 0px;
  background: #272727;
  box-shadow: 8px 8px 11px #1c1c1c, -8px -8px 11px #323232;

  @media (max-height: 786px) {
    max-height: 360px;
  }
`;

const DataRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  min-height: 100%;

  &:last-child {
    border-bottom: none;
  }
`;

const Label = styled.span`
  font-family: var(--main-font);
  font-weight: bold;
  color: var(--main-text-color);
  flex: 1;
  text-align: left;
`;

const Input = styled.input`
  flex: 2;
  padding: 8px;
  font-family: var(--main-font);
  font-size: 1rem;
  background-color: transparent;
  color: var(--main-text-color);
  border: none;
  text-align: right;

  &:focus {
    border-color: var(--button-hover-bg-color);
    outline: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  font-family: var(--main-font);
  font-weight: bold;
  font-size: 1rem;
  color: ${({ primary }) => (primary ? "#fff" : "var(--main-text-color)")};
  background-color: ${({ primary }) =>
    primary ? "var(--button-hover-bg-color)" : "transparent"};
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

export default RevisaoDados;
