import React from 'react'
import {
  Container, Row, Col, Image,
} from 'react-bootstrap'
import LandingImage from '../../Assets/img/undraw_image_viewer_wxce.svg'
import ObjetividadeImage from '../../Assets/img/undraw_online_connection_6778.svg'
import ConversaoImage from '../../Assets/img/undraw_revenue_3osh.svg'


const Showcase = () => (
  <section className="showcase bg-light">
    <Container fluid className="p-0">
      <Row className="showcase-row">
        <Col lg={{ span: 6, order: 1 }} className="showcase-col-img">
          <Image src={LandingImage} className="showcase-img mx-auto my-auto" />
        </Col>
        <Col lg={{ span: 6, order: 2 }} className="showcase-text my-auto">
          <h2 className="text-primary">O que é Landing Page?</h2>
          <p className="lead mb-0">
            A landing page oferece ao visitante todas a informação necessária para que ele
            conheça e deseje o produto. É muito mais seguro que ele finalize a compra. Você
            está em uma landing page!
          </p>
        </Col>
      </Row>
      <Row className="showcase-row">
        <Col lg={{ span: 6, order: 2 }} className="showcase-col-img">
          <Image src={ObjetividadeImage} className="showcase-img mx-auto my-auto" />
        </Col>
        <Col lg={{ span: 6, order: 1 }} className="showcase-text my-auto">
          <h2 className="text-primary">Objetividade</h2>
          <p className="lead mb-0">
            As informações presentes em uma landing page são mais objetivas,
            indo direto ao ponto e passando com clareza o que o cliente precisa saber
            e o que ele vai ganhar preenchendo o formulário daquela página.
          </p>
        </Col>
      </Row>
      <Row className="showcase-row">
        <Col lg={{ span: 6, order: 1 }} className="showcase-col-img">
          <Image src={ConversaoImage} className="showcase-img mx-auto my-auto" />
        </Col>
        <Col lg={{ span: 6, order: 2 }} className="showcase-text my-auto">
          <h2 className="text-primary">Conversão</h2>
          <p className="lead mb-0">
            Quanto menos distrações e opções de clique a página tiver,
            maiores são as chances de o usuário realizar a ação que está determinada ali.
            E aí, a taxa de conversão sobe significativamente.
          </p>
        </Col>
      </Row>
    </Container>
  </section>
)

export default Showcase
