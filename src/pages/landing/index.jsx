import './index.scss';
import { Link } from 'react-router-dom';
import FAQList from '../../components/faq';

export default function LandingPage() {
  return (
    <div className='landing'>
      <header>
        <img src="/assets/images/logo-valhalla-2.png" alt="logo" />
        <div className='links'>
          <Link>Criação</Link>
          <Link>Recursos</Link>
          <Link>Preços</Link>
        </div>

      </header>
      <div className='secao-inicial'>
        <div className='text'>
          <h3>EXEMPLOS DE SITES FEITOS COM VALHALLA</h3>
          <h1>A inspiração de web design que você estava procurando</h1>

        </div>
        <p>
        Explore estes exemplos de sites criados por usuários Valhalla reais e obtenha inspiração de web design e práticas recomendadas para criar seu site da maneira que você quiser</p>
      </div>
      <div className='secao-dois'>
        <div className='line'/>

        <div className='back'>  
          <Link><img src="/assets/images/vikings-image.png" alt="vikings" /></Link>
        </div>
        <h1>Vikings</h1>
      </div>
      
      <div id='secao3' className='secao-tres'>
        <h1>Encontre inspiração, adquira novas habilidades e descubra tendências</h1>

        <div className='quadrados'>
          <div className='lado'>
              <div className='cubo'>
                <p>Nos Siga em nossas redes Sociais</p>
              </div>
              <div className='cubo'>
                <p>Não perca a oportunidade , faça seu site de acordo com seu gosto</p>
              </div>
          </div>

          <div className='lado'>
              <div className='cubo'>
                <p>Explore todos os nossos templates</p>
              </div>
              <div className='cubo'>
                <p>Fique por dentro de todas as nossas novidades</p>
              </div>
          </div>

        </div>

      </div>

      <div className='secao-4'>
          <h1>Criação</h1>
          <p>Para a criação de sites nós da Valhalla,utilizamos
          dos melhores programadores e entededores de desenvolmento, e desing. Pensamos em cada traço para melhor representar seu pensamento em nosso site</p>
      </div>

      <div className='secao-5'>
        <h1>Recursos</h1>
        <p>Aqui temos os melhores recursos disponiveis no
        mercado da tecnologia e desenvolvimento de sites, cada ferramenta é adepta para melhor extraira essencia visual e funconal de cada cliente.</p>
      </div>

      <div className='secao-6'>
        <h1>Preços</h1>
        <p>Faça o seu orçamento conosco, entre em contato com nossas redes socias e e-mail, para conseguirmos te atender da melhor forma possivel, com preços justos e que cabem no seu bolso.</p>
      </div>

      <div className='secao-7'>
       <h1>Faça como milhões de pessoas e transforme sua ideia em realidade com a Valhalla</h1>
       <button>Começar</button>
      </div>
      <div className='secao-8'>
        <h1>FAQ</h1>

      <FAQList/>
      </div>
      <div className='rodape'>

          <div className='coluna'>
            <img src="/assets/images/logo-valhalla-2.png" alt="logo" />
            <p>O criador de sites Valhalla pode impulsionar a sua presença online, utilizando das melhores habilidades do ramo da tecnlogia e marketing</p>
          </div>
          <div className='coluna-2'>
            <h1>Redes sociais</h1>
            <div>
              <img src="/assets/images/insta.png" alt="insta" /><Link>Instagram</Link>
            </div>
            <div>
              <img src="/assets/images/face.png" alt="face" /><Link>Facebook</Link>
            </div>
          </div>
          <div className='coluna-3'>
            <h1>Parceiros</h1> 
            <Link>Criaativo</Link>
          </div>
        </div>
      

    </div>

  );
}


