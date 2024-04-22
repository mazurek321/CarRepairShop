import React, { useRef } from 'react'
import "./Baner.css"
import baner from "../../assets/baner.jpeg"

const Baner = ({contactRef}) => {
  const handleClick = () => {
    contactRef.current.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <div className='baner'>
        <div className="image">
            <img src={baner} alt="Main baner showing car" />
        </div>
        <div className="content container">
            <h3>Car repair shop</h3>
            <p>Ogólnie znana teza głosi, iż użytkownika może rozpraszać zrozumiała zawartość strony, kiedy ten chce zobaczyć sam jej wygląd. Jedną z mocnych stron używania Lorem Ipsum jest to, że ma wiele różnych „kombinacji” zdań, słów i akapitów, w przeciwieństwie do zwykłego: „tekst, tekst, tekst”, sprawiającego, że wygląda to „zbyt czytelnie” po polsku. Wielu webmasterów i designerów używa Lorem Ipsum jako domyślnego modelu tekstu i wpisanie w internetowej wyszukiwarce ‘lorem ipsum’ spowoduje znalezienie bardzo wielu stron, które wciąż są w budowie. Wiele wersji tekstu ewoluowało i zmieniało się przez lata, czasem przez przypadek, czasem specjalnie (humorystyczne wstawki itd).</p>
            <button onClick={handleClick}>make appointment</button>
        </div>
    </div>
  )
}

export default Baner