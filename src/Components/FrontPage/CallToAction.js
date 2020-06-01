import React from 'react'
import {
  Container, Row, Col, Form, Button,
} from 'react-bootstrap'
import FooterImage from '../../Assets/img/Mobile_notification_SVG.svg'

const CallToAction = () => (
  <section className="call-to-action text-white text-center" style={{ backgroundImage: `url(${FooterImage})` }}>
    <Container>
      <Row>
        <Col xl={9} className="mx-auto">
          <h1 className="mb-5 text-primary" id="call_to_action_heading">Pronto para começar? Se inscreva!</h1>
        </Col>
        <Col md={10} lg={8} xl={7} className="mx-auto">
          <Form>
            <Form.Row>
              <Col md={9} className="col-12 mb-2 mb-md-0">
                <Form.Control size="lg" type="email" placeholder="Digite seu email..." className="email_input" />
              </Col>
              <Col md={3}>
                <Button variant="primary" size="lg" block className="button_subscribe text-white">Inscrever</Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Container>
  </section>
)

export default CallToAction
