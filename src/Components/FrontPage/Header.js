import React from 'react'
import {
  Container, Row, Col, Form, Button, Image,
} from 'react-bootstrap'
import HeaderImg from '../../Assets/img/undraw_social_friends_nsbv.svg'

const Header = () => (
  <div id="jumbotron">
    <Container fluid className="text-center text-white mx-auto" id="header_container">
      <Row>
        <Col md={6}>
          <Col xl={12} className="col-auto text-xl-left text-md-left text-center">
            <h1 className="display-4">Landing Page Customizada</h1>
            <h4 className="mb-5">Faça uma landing page para seu negócio e atraia mais clientes!</h4>
          </Col>
          <Col xl={12} className="mx-auto">
            <Form>
              <Form.Row>
                <Col md={8} className="col-12 mb-2 mb-md-0">
                  <Form.Control size="lg" type="email" placeholder="Digite seu email..." className="email_input" />
                </Col>
                <Col md={4}>
                  <Button size="lg" block className="button_subscribe text-primary text-uppercase font-weight-bold" id="header_button">Se inscreva</Button>
                </Col>
              </Form.Row>
            </Form>
          </Col>
        </Col>
        <Col md={6} className="mt-4">
          <Image fluid className="mx-auto" src={HeaderImg} />
        </Col>
      </Row>
    </Container>
  </div>
)

export default Header
