import './css/header.css'
import './css/links.css'
import './css/main.css'

import React from 'react'
import { Link } from 'react-router-dom' 
import { motion } from "framer-motion"

function App() {
  return (
    <div className="App">
        <div className="box"> 

          <img id="logo_img"src="\logo.png" alt="grafic_logo"/>  
          <span id="grafic">grafic</span><br></br>
          <span id="logotipo_texto">Gráfica e Design</span>

          <div class="links">
            <button className="button-56" id="btn1"
              onClick={() => {window.location.href = 'https://api.whatsapp.com/send/?phone=%2B559191305323&text&type=phone_number&app_absent=0'}}>
              <img className="" src="\whatsapp_2.png" alt="Whatsapp"/>
              Contate nos
            </button>
            
            <button className="button-56" id="btn2" disabled={true} 
              onClick={() => {window.location.href = '#'}}>
              <img className="" src="\shoppe.png" alt="Loja SHOPPE"/>
              Loja SHOPPE (EM BREVE)           
            </button>

            <button className="button-56" id="btn3" disabled={true} 
              onClick={() => {window.location.href = '#'}}>
              <img className="" src="\revista.png" alt="catálogo de produtos"/>
              Catálogo de Produtos <br></br>(EM BREVE)           
            </button>

            <button className="button-56" id="btn4" disabled={true} 
              onClick={() => {window.location.href = '#'}}>
              <img className="" src="\site.png" alt="loja virtual"/>
              Loja Virtual (EM BREVE)           
            </button>

            <button className="button-56" id="btn5" disabled={true} 
              onClick={() => {window.location.href = '#'}}>
              <img className="" src="\order.png" alt="Whatsapp"/>
              Meus Pedidos (EM BREVE)            
            </button>  
          </div>

          <div className="icons ">
          <a className="icons " href="https://www.facebook.com/profile.php?id=61563420547597&locale=pt_BR" >
            <img src="\facebook.png" alt="facebook"/>
          </a>
          <a className="icons " href="https://www.instagram.com/graficbelem/" >
            <img src="\instagram_icon.png" alt="instagram"/>
          </a>
          </div>
            
        </div>

          
 





    </div>
  );
}

export default App;
