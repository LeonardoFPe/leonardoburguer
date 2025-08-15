import React from 'react';
import SobreImg from '../../img/f26dc45e0e3a8be2dc0d35390c9cacb6.jpg';
import styled from 'styled-components';

const StyledSobre = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  padding: 2rem;
  padding-top: 7%;
  padding-bottom:5%;

  .sobre-img img {
    border-radius: 15px;
    max-width: 100%;
    height: auto;
    display: block;
    margin-left: 40%;
  }

  .sobre-texto {
    margin-left: 30%;
  }

  .sobre-texto h2 {
    font-size: 60px;
    margin-bottom: 1rem;
  }

  .sobre-texto p {
    font-size: 20px;
    line-height: 1.5;
    max-width: 300px;
  }

  .destaque-brunao {
    color: #ffd130;
  }

  @media (max-width: 1400px) and (min-width: 1025px) {
    .sobre-img img {
      margin-left: 0;
      justify-self: center;
    }
    .sobre-texto {
      margin-left: 0;
      justify-self: center;
      text-align: left;
    }
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 2rem;

    .sobre-img img {
      margin-left: 0;
    }

    .sobre-texto {
      margin-left: 0;
    }

    .sobre-texto p {
      max-width: 90%;
      margin: 0 auto;
    }
  }

  /* Celular */
  @media (max-width: 480px) {
    .sobre-texto h2 {
      font-size: 36px;
    }
    .sobre-texto p {
      font-size: 16px;
      max-width: 100%;
      padding: 0 1rem;
    }
  }
`;

function MainSobre() {
  return (
    <StyledSobre id="sobre">
      <div className="sobre-img">
        <img src={SobreImg} alt="foto-hamburguer" />
      </div>
      <div className="sobre-texto">
        <h2>
          Sobre <br />
          <span className="destaque-brunao">Leonardo</span>
        </h2>
        <p>
          Em nossa hamburgueria Leonardo servimos hambúrguer caseiro irresistível desde 2000.
          <br />
          Nossa missão é manter você sorrindo a cada mordida.
          <br />
          Presenteie-se com uma refeição reconfortante hoje mesmo!
        </p>
      </div>
    </StyledSobre>
  );
}

export default MainSobre;
