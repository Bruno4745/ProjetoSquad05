import React from 'react';
import chat from './chat-rosaTT.png';
import "./style.css";

function Chat() {

  const abrir = () => {
    window.open('https://chat-recomecar.herokuapp.com/','chat','resizable,height=460,width=570');
  }

    return (
        <a href="#" onClick={abrir} >
          <img className="icone-chat" src={chat} alt="Chat"/>
        </a>
    )
}

export default Chat