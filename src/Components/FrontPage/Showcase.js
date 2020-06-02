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
            A landing page oferece ao visitante toda a informação necessária para que ele
            conheça e deseje o produto. Você está em uma landing page!
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
            Informações objetivas, indo direto ao ponto!
            Perfeita para a internet moderna onde cada
            segundo de atenção vale muito.
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
            Quanto menos distrações maiores as chances do usuário
            realizar a ação desejada. Alta taxa de conversão!
          </p>
        </Col>
      </Row>
    </Container>
  </section>
)

export default Showcase
