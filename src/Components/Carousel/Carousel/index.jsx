import React from 'react'
import a5 from './a5.jpeg'
import a2 from './a2.jpg'
import a3 from './a3.jpg'
import a4 from './a4.jpg'
import './styles.css'

const CarouselComCards = () => {
  return (
    <>
    <div className="banner1">
    <img className="img-carousel" src={a5} />
         <div className="text-box text-box1">
            <h1># SEMJUGAMENTOS</h1>
            <div className="span"></div>
          {/*  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit<br/>
            labore et dolore magna aliqua. Ut enim ad minim veniam!</p>*/}
        </div>    
    </div>

    <div className="banner2">
    <img className="img-carousel" src={a2} />
        <div className="text-box text-box2">
            <h1># AMOR</h1>
            <div className="span"></div>
            <p>Trata-se de um gesto de amor que<br />
                pode transformar vidas.<br/></p>
        </div>   
    </div>

    <div className="banner3">
    <img className="img-carousel" src={a3} />
        <div className="text-box text-box3">
            <h1># AFETO</h1>
            <div className="span"></div>
            <p>“...bebês possuem sentimentos e<br/>
            necessidades vitais ligadas ao afeto...”
           </p>
        </div>   
    </div>

    <div className="banner4">
    <img className="img-carousel" src={a4} />
        <div className="text-box text-box4">
            <h1># ESCOLHARESPONSÁVEL</h1>
            <div className="span"></div>
            <p>"Uma escolha, dois recomeços </p>
        </div>   
    </div>
</>
  )
}

export default CarouselComCards
