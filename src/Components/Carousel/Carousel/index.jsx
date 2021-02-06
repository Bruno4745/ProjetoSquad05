import React from 'react'
import a2 from './a2.jpg'
import a4 from './a4.jpg'
import './styles.css'

const CarouselComCards = () => {
  return (
    <div className="body">
    <div className="banner1">
    <img src={a4} />
        <div className="text-box text-box1">
            <h1>SLIDE 1</h1>
            <div className="span"></div>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit<br/>
            labore et dolore magna aliqua. Ut enim ad minim veniam!</p>
        </div>   
    </div>

    <div className="banner2">
    <img src={a2} />
        <div className="text-box text-box2">
            <h1>SLIDE 2</h1>
            <div className="span"></div>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit<br/>
            labore et dolore magna aliqua. Ut enim ad minim veniam!</p>
        </div>   
    </div>

    <div className="banner3">
    <img src={a4} />
        <div className="text-box text-box3">
            <h1>SLIDE 3</h1>
            <div className="span"></div>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit<br/>
            labore et dolore magna aliqua. Ut enim ad minim veniam!</p>
        </div>   
    </div>

    <div className="banner4">
    <img src={a2} />
        <div className="text-box text-box4">
            <h1>SLIDE 4</h1>
            <div className="span"></div>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit<br/>
            labore et dolore magna aliqua. Ut enim ad minim veniam!</p>
        </div>   
    </div>
</div>
  )
}

export default CarouselComCards
