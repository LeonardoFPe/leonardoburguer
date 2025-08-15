import EnderecoIcon from '../../img/icons8-endereço-50.png';
import TelefoneIcon from '../../img/icons8-telefone-50.png';
import EmailIcon from '../../img/icons8-nova-mensagem-50.png';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #ffd130;
  padding: 90px;
  text-align: center;

  h1 {
    font-size: 70px;
    padding-top: 80px;
    margin-bottom: 40px;
  }

  h2 {
    font-size: 24px;
    margin: 10px 0 5px;
  }

  p {
    font-size: 18px;
    margin-bottom: 20px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .icons {
    padding-top: 30px;
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .icons img {
    width: 50px;
    height: 50px;
    transition: transform 0.2s ease;
    cursor: pointer;
    padding-bottom:70px;
  }

  .icons img:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
    h1 {
      font-size: 30px;
      padding-top: 40px;
    }
    h2 {
      font-size: 20px;
    }
    p {
      font-size: 16px;
    }
  }
`;

function Footer() {
  return (
    <StyledFooter id="informacoes">
      <h1>Informações</h1>

      <div className="endereco">
        <h2>Nosso endereço</h2>
        <p>R. Dr. Antônio Bento, 393 - Santo Amaro, São Paulo - SP, 04750-000</p>
      </div>

      <div className="email">
        <h2>Nosso email</h2>
        <p>burguerleonardo@gmail.com</p>
      </div>

      <div className="number">
        <h2>Número de Telefone</h2>
        <p>2942-3910</p>
      </div>

      <div className="icons">
        <a
          href="https://www.google.com/maps?daddr=R.+Dr.+Ant%C3%B4nio+Bento,+393+-+Santo+Amaro,+S%C3%A3o+Paulo+-+SP,+04750-000"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={EnderecoIcon} alt="Endereço" />
        </a>

        <a 
        href="https://web.whatsapp.com/"
        target="_blank"
        >
          <img src={TelefoneIcon} alt="Telefone" />
        </a>

        <a 
        href="https://gmail.com/"
        target='_blank'
        
        >
          <img src={EmailIcon} alt="Email" />
        </a>
      </div>
    </StyledFooter>
  );
}

export default Footer;
