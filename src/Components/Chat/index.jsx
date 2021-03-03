import React from 'react';
import chat from './chat-roxoTT.png';
import "./style.css";

function Chat() {

  const exibirChat = (evento) => {
    evento.preventDefault();
    let elemento = document.getElementById('icone-chat2');
    console.log(elemento);
    if(elemento.style.display == "none"){
      elemento.style.display = "block"
    } else {
      elemento.style.display = "none"
    }
  }

    return (
      <>
        <a href="#" onClick={exibirChat} >
          <img className="icone-chat" src={chat} alt="Chat"/>
        </a>

          <iframe id="icone-chat2" src="https://chat-recomecar.herokuapp.com/"></iframe>
      </>
    )
}

export default Chat