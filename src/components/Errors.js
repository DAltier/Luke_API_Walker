import React from 'react';
import { ErrorsDiv, ErrorsHeader, ErrorsImage } from './styles/ErrorsStyle';

const Errors = () => {
  return (
    <ErrorsDiv>
      <ErrorsHeader>These aren't the droids you're looking for</ErrorsHeader>
      <ErrorsImage alt = "picture of Obi-Wan Kenobi" src = "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/12/ObiWanComicCover.jpg" />
    </ErrorsDiv>
  )
}

export default Errors;