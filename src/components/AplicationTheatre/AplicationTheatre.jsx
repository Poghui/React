import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { P } from './AplicationTheatre.styles';
import lines from './data/lines.json'

const AplicationTheatre = (props) => {
  const [currentParagraph, setCurrentParagraph] = useState(0)
  return (
    <>
      <div className="AplicationTheatreWrapper" >
        <button onClick={() => setCurrentParagraph(currentParagraph - 1)}>Anterior</button>
        <button onClick={() => setCurrentParagraph(currentParagraph + 1)}>Siguiente</button>
      </div >
      <div>{lines.map((line, index) => <P highlighting={index === currentParagraph}>{line}</P>)}</div>
    </>
  )
};

export default AplicationTheatre;
