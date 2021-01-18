import React from 'react'
import './card.css'

function Card({title, imageUrl, body }) {
  return (
    <div className='card-container'>
      <div className="image-container">
        <img src={imageUrl} width = '100%' alt='' /> {/* Recebe o Imagem/ Logo do Parceiro*/}
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{title}</h3> {/* Recebe o Nome do Parceiro*/}
        </div>
        <div className="car-body">
          <p>{body}</p> {/* Descrição do parceiro*/}
        </div>
      </div>

      <div className="button">
        <button>
          <a href="{/}">
            Saiba mais! {/* Link pra pagina do parceiro parceiro*/}
          </a>
        </button>
      </div>
    </div>
  )
}

export default Card
