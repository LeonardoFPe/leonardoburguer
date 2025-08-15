import React, { useState } from "react";
import styled from "styled-components";
import ReservaForm from "../ReservaForm";
import Hamburguer from "../../img/hamburguer10.png";
import Logo from "../../img/LogoLeo.png";

const StyledHeader = styled.header`
  background-color: #ffd130;
  min-height: 80vh;
  display: flex;
  flex-direction: column;

  .logo-container {
    margin-left:40px;
    padding: 10px 0;
  }

  .logo {
    height: 90px;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 120px;
    flex-wrap: wrap;
    margin-top: 30px;
  }

  .text-section {
    display: flex;
    flex-direction: column;
    gap: 25px;
    max-width: 500px;
  }

  h1 {
    font-size: 80px;
    margin: 0;
    line-height: 1.1;
  }

  .slogan {
    font-size: 20px;
    color: #000000ff;
    font-weight: 400;
    margin-top: -15px;
    font-weight:bold;
  }

  .artesanal{
    color:#303030
;
  }

  button {
    max-width: 220px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 20px;
    padding: 15px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #333;
  }

  .image-section {
    max-width: 450px;
    flex: 1 1 300px;
    display: flex;
    justify-content: flex-end;
  }

  .image-section img {
    width: 100%;
    border-radius: 20px;
  }

  @media (max-width: 1024px) {
    .content {
      gap: 80px;
    }
    h1 {
      font-size: 64px;
    }
  }

  @media (max-width: 900px) {
    .content {
      flex-direction: column;
      gap: 40px;
      text-align: center;
    }

    h1 {
      font-size: 48px;
    }

    .slogan {
      font-size: 16px;
    }
    
    button {
      margin: 0 auto;
    }

    .text-section {
      align-items: center;
    }

    .image-section {
      justify-content: center;
      max-width: 300px;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 32px;
    }

    .slogan {
      font-size: 14px;
    }

    button {
      max-width: 180px;
      padding: 12px;
      font-size: 14px;
    }
  }
`;

function Header() {
  const [mostrarReserva, setMostrarReserva] = useState(false);

  return (
    <StyledHeader>
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
      </div>

      <div className="content">
        <div className="text-section">
          <h1>
            Burguer <br />
            Leonardo
          </h1>
          <p className="slogan">Sabor <span className="artesanal">artesanal</span> em cada mordida.</p>
          <button onClick={() => setMostrarReserva(true)}>
            RESERVE UMA MESA
          </button>
        </div>

        <div className="image-section">
          <img src={Hamburguer} alt="Hamburguer" />
        </div>
      </div>

      {mostrarReserva && (
        <ReservaForm onClose={() => setMostrarReserva(false)} />
      )}
    </StyledHeader>
  );
}

export default Header;
