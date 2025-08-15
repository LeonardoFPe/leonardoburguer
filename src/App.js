import Header from './components/Header'
import MainSobre from './components/MainSobre/index'
import MainCardapio from './components/MainCardapio/index'
import FooterInformacoes from './components/FooterInformacoes/index'
import MainSociedade from './components/MainSociedade/index'

function App() {
  return (
    <div className="App">
      <Header />
      
      <section id="sobre">
        <MainSobre />
      </section>
      
      <section id="cardapio">
        <MainCardapio />
      </section>
      
      <section id="sociedade">
        <MainSociedade />
      </section>
      
      <FooterInformacoes />
    </div>
  );
}

export default App;
