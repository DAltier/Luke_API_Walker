import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PageDiv, PageText, PageBox, PageHeader } from '../styles/PageStyle';

const Starship = ({ id }) => {
  const [ship, setShip] = useState([]);

  useEffect(() =>{
    axios
    .get('https://swapi.dev/api/starships/' + id + '/')
    .then(res => { setShip(res.data) });
  }, [id]);

  return (
    <PageBox>
      <PageHeader>{ ship.name }</PageHeader>
      <PageDiv>
        <PageText>Model:</PageText>
        <h3>{ ship.model }</h3>
      </PageDiv>
      <PageDiv>
        <PageText>Manufacturer:</PageText>
        <h3>{ ship.manufacturer }</h3>
      </PageDiv>
      <PageDiv>
        <PageText>Length:</PageText>
        <h3>{ ship.length }</h3>
      </PageDiv>
      <PageDiv>
        <PageText>Crew:</PageText>
        <h3>{ ship.crew }</h3>
      </PageDiv>
      <PageDiv>
        <PageText>Passengers:</PageText>
        <h3>{ ship.passengers }</h3>
      </PageDiv>
      <PageDiv>
        <PageText>Consumables:</PageText>
        <h3>{ ship.consumables } credits</h3>
      </PageDiv>
      <PageDiv>
        <PageText>Class:</PageText>
        <h3>{ ship.starship_class } credits</h3>
      </PageDiv>
    </PageBox>
  )
}

export default Starship;