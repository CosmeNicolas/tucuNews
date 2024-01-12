import React from 'react';
import { Container } from 'react-bootstrap';

const News = ({noticias}) => {
  return (
    <Container>
      {
        noticias.map(noticia => (
      <section key={noticias.id}>
      <h1>{noticia.title}</h1>
      <br />
      <p>
        {noticia.description}
      </p>
      </section>
        ))
      }
    </Container>
  );
};

export default News;