import React from 'react';
import { Container, Image } from 'react-bootstrap';

const News = ({noticias}) => {
  return (
    <Container>
      {
        noticias.map(noticia => (
          <Card key={noticia.article_id} style={{ width: '18rem' }}>
           <Image src={noticia.image_url} /> 
            <Card.Body>
              <Card.Title>{noticia.title}</Card.Title>
              <Card.Text>
               {noticia.description}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))
      }
    </Container>
  );
};

export default News;