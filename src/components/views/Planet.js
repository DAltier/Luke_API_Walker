import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PageDiv, PageText, PageBox, PageHeader } from '../styles/PageStyle';

const Planet = ({ id }) => {
  const [planet, setPlanet] = useState([]);

  useEffect(() => {
    axios
      .get('https://swapi.dev/api/planets/' + id +'/')
      .then(response => { setPlanet(response.data) })
  }, [id]);

  return (
    <PageBox>
      <PageHeader>{ planet.name }</PageHeader>
      <PageDiv>
        <PageText>Terrain:</PageText>
        <h3>{ planet.terrain }</h3>
      </PageDiv>
      <PageDiv>
        <PageText>Climate:</PageText>
        <h3>{ planet.climate }</h3>
      </PageDiv>
      <PageDiv>
        <PageText>Population:</PageText>
        <h3>{ planet.population }</h3>
      </PageDiv>
      <PageDiv>
        <PageText>Diameter:</PageText>
        <h3>{ planet.diameter } km</h3>
      </PageDiv>
      <PageDiv>
        <PageText>Surface Water:</PageText>
        <h3>{ planet.surface_water } days</h3>
      </PageDiv>
      <PageDiv>
        <PageText>Rotation Period:</PageText>
        <h3>{ planet.rotation_period } days</h3>
      </PageDiv>
    </PageBox>
  )
}

export default Planet;