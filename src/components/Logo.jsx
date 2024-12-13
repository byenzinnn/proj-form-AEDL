import React from "react";
import styled from "styled-components";
import logo from "../assets/Logotipo Editável_Icone AEDL branco.png";

const Logo = () => {
  return (
    <LogoImage
      src={logo}
      alt="Logotipo"
    />
  );
};

const LogoImage = styled.img`
  width: 100%;
  max-width: 100px;
  height: auto;
  margin: 20px 0;
`;

export default Logo;