import React from 'react';
import PropTypes from 'prop-types';
import { Cuadrado, Rectangulo } from './Cositas.styles';
import { GlobalStyle } from './Cositas.styles';

const Cositas = (props) => (
  <div className="CositasWrapper">
    <GlobalStyle />
    Test content
    <Cuadrado />
    <Rectangulo color='white' />
  </div>
);

export default Cositas;
