import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import NomeSobrenome from "./components/NomeSobrenome";
import Logo from "./components/Logo";
import BemVindo from "./components/BemVindo";
import Contato from "./components/Contato";
import CidadeEstado from "./components/CidadeEstado";
import GeneroDataNascimento from "./components/GeneroDataNascimento";
import RevisaoDados from "./components/RevisaoDados";
import CadastroConcluido from "./components/CadastroConcluido";
import Religiao from "./components/Religiao";
import ConcordarComTermos from "./components/ConcordarComTermos";

function App() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    telefone: "",
    email: "",
    cidade: "",
    estado: "",
    genero: "",
    dataNascimento: "",
    religiao: "",
    assinouTermos: false, // Adicionado aqui
  });

  const nextStep = () => setStep(step + 1);

  const updateData = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  };

  const handleEdit = () => {
    setStep(0);
  };

  const handleSubmit = () => {
    console.log("Dados confirmados:", formData);
    alert("Cadastro concluído!"); // Substitua pela lógica de envio ao backend
  };

  return (
    <Container>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <ContentWrapper>
        {step === 0 && <BemVindo next={nextStep} />}
        {step === 1 && <NomeSobrenome next={nextStep} update={updateData} />}
        {step === 2 && <Contato next={nextStep} update={updateData} />}
        {step === 3 && <CidadeEstado next={nextStep} update={updateData} />}
        {step === 4 && (
          <GeneroDataNascimento next={nextStep} update={updateData} />
        )}
        {step === 5 && <Religiao next={nextStep} update={updateData} />}
        {step === 6 && (
          <ConcordarComTermos
            onConfirm={() => {
              updateData({ assinouTermos: true });
              nextStep();
            }}
          />
        )}
        {step === 7 && (
          <RevisaoDados
            formData={formData}
            update={updateData}
            onSubmit={() => setStep(8)}
          />
        )}
        {step === 8 && <CadastroConcluido />}
      </ContentWrapper>
    </Container>
  );
}

// Estilos do layout principal
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: var(--main-bg-color);
  padding-top: 40px;
`;

const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  text-align: center;
`;

export default App;
