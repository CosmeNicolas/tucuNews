import { Container, Image, Card, Col, Row } from 'react-bootstrap';

const News = ({ noticias }) => {
  console.log(noticias)
  return (
    <>
      <Container>
       
        <Row xs={1} md={2} lg={4}>
          
            {
              Array.isArray(noticias) ? (
                noticias.map(noticia => (
                  <Col className='d-flex justify-content-center' key={noticia.article_id}>
                    <Card className='my-3' >
                      <Image src={noticia.image_url} className='img-fluid img-new' />
                      <Card.Body>
                        <Card.Title>{noticia.title}</Card.Title>
                        <p>{noticia.content}</p>
                        <p>Author: <em>{noticia.creator} - {noticia.country}</em></p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              ) : (
                <p>No hay noticias disponibles</p>
              )
            }
        </Row>
      </Container>
    </>
  );
};

export default News;
