import React from 'react';
import '../styles/css/styles.css'
import { JuegoContainer } from '../components/common/Juego/JuegoContainer';
import { Titulo } from '../components/common/Titulo/Titulo';

const App = () => {
  let imgLink = 'https://res.cloudinary.com/dge6pbj4l/image/upload/v1710542265/myPhotos/bgfabwnv9sd1qstqpvse.jpg';
  let altImg = 'Imagen colorida del nombre del juego numberpalooza'

  return (
    <>
      <Titulo titulo={'Numberpaloosa'} linkImg={imgLink} altImg={altImg} />
      <JuegoContainer />

    </>
  )
}

export default App