import { useState } from 'react'
import "./style.css";
import {Header} from "./header.jsx";
import {Login} from "./login.jsx";

const trop_style = {color : "#2c038c"};

const domaines = [ 
  "Administration",
  "Banque",
  "Commerce",
  "Défense et Sécurité"
]

function App() {

  
  const clickDomaine = () => {
    alert("La page en question");
  }

  return (
    <>
      <body>
        <header>
          <Header/>
        </header>
          <Login/>
      </body>
    </>
  )
}

export default App
