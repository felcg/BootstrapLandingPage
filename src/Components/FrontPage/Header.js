import React from 'react'
import {
  Container, Jumbotron, Row, Col, Form, Button,
} from 'react-bootstrap'

const Header = () => (
  <Jumbotron id="jumbotron" fluid>
    <Container className="text-center text-white">
      <Row>
        <Col xl={9} className="mx-auto">
          <h1 className="mb-5">Faça uma landing page para seu negócio e atraia mais clientes!</h1>
        </Col>
        <Col md={10} lg={8} xl={7} className="mx-auto">
          <Form>
            <Form.Row>
              <Col md={9} className="col-12 mb-2 mb-md-0">
                <Form.Control size="lg" type="email" placeholder="Digite seu email..." />
              </Col>
              <Col md={3}>
                <Button variant="primary" size="lg" block>Se inscreva!</Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
)

export default Header
