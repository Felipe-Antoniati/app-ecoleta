import React from 'react';

import { FiLogIn } from 'react-icons/fi'; 
import ecoletaLogo from '../../assets/images/logo.svg';

import './styles.css';

function Landing() {
  return(
    <div id="page-landing">
      <div className="content">        
        <header>
          <img src={ecoletaLogo} alt="Ecoleta"/>
        </header>
        <main>
          <h1>Seu marketplace de coleta de resíduos.</h1>
          <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>
          <a href="/create-point">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre um ponto de coleta</strong>
          </a>
        </main>
      </div>
    </div>
  );
};

export default Landing;