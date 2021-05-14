import React, { useState, useEffect } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios';
import { PageDiv, PageText, PageBox, PageHeader } from '../styles/PageStyle';

const People = ({ id }) => {
  const [people, setPeople] = useState([]);
  const [home, setHome] = useState({name: ""});

  useEffect(() => {
    axios
      .get('https://swapi.dev/api/people/' + id + '/')
      .then(response => { setPeople(response.data) })
      .catch(() => navigate('/error'));
  }, [id], 2500);

  useEffect(() => {
    axios
      .get(people.homeworld)
      .then(response => { setHome(response.data) })
  }, [id, people] );

  const getHomeWorldId = () => {
    if (home.url) {
      const url = home.url;
      let hwid = url.slice(29);
      return hwid;
    }
  }

  return (
    <PageBox>
      <PageHeader>{ people.name }</PageHeader>
      <PageDiv>
        <PageText>Height:</PageText>
        <h3>{ people.height } cm</h3>
      </PageDiv>
      <PageDiv>
        <PageText>Weight:</PageText>
        <h3>{ people.mass } kg</h3>
      </PageDiv>
      <PageDiv>
        <PageText>Hair Color:</PageText>
        <h3>{ people.hair_color }</h3>
      </PageDiv>
      <PageDiv>
        <PageText>Skin Color:</PageText>
        <h3>{ people.skin_color }</h3>
      </PageDiv>
      <PageDiv>
        <PageText>Eye Color:</PageText>
        <h3>{ people.eye_color }</h3>
      </PageDiv>
      <PageDiv>
        <PageText>Birth Year:</PageText>
        <h3>{ people.birth_year }</h3>
      </PageDiv>
      <PageDiv>
        <PageText>Home World:</PageText>
        <h3> <Link to={`/planets/${ getHomeWorldId() }`}>{ home.name }</Link></h3>
      </PageDiv>
    </PageBox>
  )
}

export default People;