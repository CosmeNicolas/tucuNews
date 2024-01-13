import React from 'react';
import { Container, Image, Card, Button, Col, Row, ListGroup } from 'react-bootstrap';

const News = ({ noticias }) => {
  return (
    <>    <Container className=''>
      <hr />
      <h1 className='text-center' >It's Happening  📰</h1>
      <br />
      <Row xs={1} md={2} lg={4}>
        {
          noticias.map(noticia => (
            <Col className='d-flex justify-content-center' key={noticia.article_id}>
              <Card className='my-3' >
                <Image src={noticia.image_url} className='img-fluid img-new' />
                <Card.Body>
                  <Card.Title>{noticia.title}</Card.Title>
                  <Card.Text>
                    {noticia.description}
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        Author: <em>{noticia.creator} - {noticia.country}</em>
                      </ListGroup.Item>
                    </ListGroup >
                  </Card.Text>
                </Card.Body>
                <Card.Footer className='text-center fondo-footer'>
                  <Button variant="dark" >Read</Button>
                </Card.Footer>
              </Card>
            </Col>
          ))
        }

      </Row>
    </Container>
    </>

  );
};

export default News;
