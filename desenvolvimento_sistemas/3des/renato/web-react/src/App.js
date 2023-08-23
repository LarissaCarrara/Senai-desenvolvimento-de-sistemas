import React from 'react';
import './App.css';
import Imagem from './assets/logo.png';

function App() {
  return (
    <div id="tudo">

      <div className='header'>
        <div class="div_logo">
          <img src={Imagem} id="logo" />
          <h3>Biblioteca virtual</h3>

        </div>
        {/* <Imagem />   */}

        <div className='links'>
          <h4 className='text'>Meus livros</h4>
          <h4 className='text'>Mais livros</h4>
        </div>

      </div>

      <div className='section'>
        
      </div>




    </div>


  );
}

export default App;
