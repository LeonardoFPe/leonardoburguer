import HamburguerImg from '../../img/hamburguer.jfif';
import FriturasImg from '../../img/frituras.avif';
import BebidaImg from '../../img/bebida.webp';
import styled from 'styled-components';

const StyledCardapio = styled.section`
  .cardapio {
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: 2rem;
    background-color: #ffd130;
    padding: 5%;
  }

  .cardapio-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    margin-left: 40%;
  }

  .cardapio-info h1 {
    font-size: 3rem;
    font-weight: 900;
    line-height: 1.2;
  }

  .cardapio-info button {
    background-color: #000;
    color: white;
    padding: 1rem 1.5rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    font-size: 1rem;
  }

  .cardapio-itens {
    display: flex;
    gap: 1.5rem;
  }

  .card {
    background-color: white;
    border-radius: 1rem;
    overflow: hidden;
    width: 25%;
    display: flex;
    flex-direction: column;
    text-align: center;
    border-radius: 30px;
  }

  .card img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 30px;
  }

  .card-texto {
    padding: 30px;
  }

  .card-texto h4 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .card-texto p {
    font-size: 1rem;
    color: #444;
  }

  @media (max-width: 1024px) {
    .cardapio {
      grid-template-columns: 1fr;
      padding: 3%;
    }

    .cardapio-info {
      margin-left: 0;
      align-items: center;
      text-align: center;
    }

    .cardapio-info h1 {
      font-size: 2.5rem;
    }

    .cardapio-itens {
      flex-wrap: wrap;
      justify-content: center;
    }

    .card {
      width: 45%;
      margin-bottom: 1.5rem;
    }
  }

  @media (max-width: 600px) {
    .cardapio-info h1 {
      font-size: 2rem;
    }

    .cardapio-info button {
      font-size: 0.9rem;
      padding: 0.75rem 1rem;
    }

    .cardapio-itens {
      flex-direction: column;
      align-items: center;
    }

    .card {
      width: 90%;
      margin-bottom: 1.5rem;
    }

    .card img {
      height: auto;
    }
  }
`;

function MainCardapio() {
  return (
    <StyledCardapio>
      <section className="cardapio" id="cardapio">
        <div className="cardapio-info">
          <h1>
            Nosso
            <br />
            cardápio
          </h1>
          <button>VER TODO CARDÁPIO</button>
        </div>

        <div className="cardapio-itens">
          <div className="card">
            <img src={HamburguerImg} alt="Hamburguer Gourmet" />
            <div className="card-texto">
              <h4>
                Hamburguer
                <br />
                Gourmet
              </h4>
              <p>Um saboroso hamburguer.</p>
            </div>
          </div>

          <div className="card">
            <img src={FriturasImg} alt="Frituras" />
            <div className="card-texto">
              <h4>Frituras</h4>
              <p>Prove nossas frituras e não se arrependa.</p>
            </div>
          </div>

          <div className="card">
            <img src={BebidaImg} alt="Bebidas" />
            <div className="card-texto">
              <h4>Bebidas</h4>
              <p>As melhores bebidas.</p>
            </div>
          </div>
        </div>
      </section>
    </StyledCardapio>
  );
}

export default MainCardapio;
