import React from "react";
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
    religiao, // Novo campo
  } = formData;

  const handleInputChange = (field, value) => {
    const updatedData = { ...formData, [field]: value };
    update(updatedData);
  };

  return (
    <Container>
      <Title>Revise e Edite seus dados</Title>
      <DataContainer>
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
            type="date"
            value={dataNascimento}
            onChange={(e) =>
              handleInputChange("dataNascimento", e.target.value)
            }
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
        <StyledButton primary onClick={onSubmit}>
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

  @media (max-width: 400px){
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
  box-shadow:  8px 8px 11px #1c1c1c,
             -8px -8px 11px #323232;

  @media (max-height: 786px){
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
`;

const Input = styled.input`
  flex: 2;
  padding: 8px;
  font-family: var(--main-font);
  font-size: 1rem;
  background-color: transparent;
  color: var(--main-text-color);
  border: none;

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
  transition: all 0.3s ease;
`;

export default RevisaoDados;
