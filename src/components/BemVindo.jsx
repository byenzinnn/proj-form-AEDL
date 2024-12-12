import React, { useEffect } from 'react';
import styled from 'styled-components';
import anime from 'animejs';

const BemVindo = ({ next }) => {
  useEffect(() => {
    anime.timeline()
      .add({
        targets: '.logo',
        opacity: [0, 1],
        translateY: [40, 0],
        duration: 1600,
        easing: 'easeInOutQuad',
      })
      .add({
        targets: '.title',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1000,
        easing: 'easeOutExpo',
      }, '-=500')
      .add({
        targets: '.start-button',
        opacity: [0, 1],
        scale: [0.9, 1],
        duration: 1000,
        easing: 'easeOutExpo',
      }, '-=500');
  }, []);

  const handleNext = () => {
    anime.timeline()
      .add({
        targets: '.title, .start-button',
        opacity: [1, 0],

        duration: 1000,
        easing: 'easeInOutQuad',
        complete: next,
      });
  };

  return (
    <Container>
      <ContentWrapper>
        <Title className="title">Seja bem-vindo(a) à nossa Família de Voluntários!</Title>
        <StyledButton className="start-button" onClick={handleNext}>
          Vamos lá!
        </StyledButton>
      </ContentWrapper>
    </Container>
  );
};

// Estilos utilizando styled-components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: var(--main-bg-color);
  overflow: hidden;
  padding-block: 20px;
  gap: 40px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  text-align: center;
`;

const Title = styled.h1`
  color: var(--main-text-color);
  font-family: var(--main-font);
  font-weight: var(--main-font-weight);
  opacity: 0; /* Inicia invisível */
  margin-bottom: 40px;

  @media (max-width: 400px) {
    font-size: 8vw;
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

export default BemVindo;
