/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {
  Container, Row, Col, Card,
} from 'react-bootstrap'
import gregorio from '../../Assets/img/gregorio.jpg'
import renan from '../../Assets/img/renan.jpg'
import leticia from '../../Assets/img/leticia.jpg'

const Testimonials = () => (
  <section className="testimonials text-center bg-primary">
    <Container>
      <div>
        <h1 id="testimonials_header" className="text-light display-5">Depoimentos</h1>
      </div>
      <Row>
        <Col lg={4}>
          <div className="testimonial-item mx-auto mb-5 mb-lg-0 h-100">
            <Card>
              <Card.Img variant="top" src={gregorio} />
              <Card.Body className="d-flex flex-column">
                <Card.Text className="my-auto font-weight-600 text-secondary">
                  Muito bom, funcionou perfeitamente para o meu negócio.
                  Gostei principalmente da facilidade de customização.
                  Pude deixar compatível com minhas ideias. Recomendo.
                </Card.Text>
                <div className="mt-auto">
                  <Card.Title className="text-primary font-weight-bold">Gregorio Bastos</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">CEO</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted font-weight-bold">Gregorio's Pizzaria</Card.Subtitle>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col lg={4}>
          <div className="testimonial-item mx-auto mb-5 mb-lg-0 h-100">
            <Card>
              <Card.Img variant="top" src={renan} />
              <Card.Body className="d-flex flex-column">
                <Card.Text className="my-auto font-weight-600 text-secondary">
                  Bom demais, quem sabe sabe realmente.
                  Fico admirado com a capacidade desse desenvolvedor.
                  Que template bom. UAU!
                </Card.Text>
                <div className="mt-auto">
                  <Card.Title className="text-primary font-weight-bold">Renan Figueiredo</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Analista de Marketing</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted font-weight-bold">Dunder Mifflin</Card.Subtitle>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col lg={4}>
          <div className="testimonial-item mx-auto mb-5 mb-lg-0 h-100">
            <Card>
              <Card.Img variant="top" src={leticia} />
              <Card.Body className="d-flex flex-column">
                <Card.Text className="my-auto font-weight-600 text-secondary">
                  Muito obrigada pelo trabalho, atingiu minhas expectativas!
                </Card.Text>
                <div className="mt-auto">
                  <Card.Title className="text-primary font-weight-bold">Leticia Schapenhauzer</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Desenvolvedora</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted font-weight-bold">Golden Devs</Card.Subtitle>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>

  </section>
)

export default Testimonials
