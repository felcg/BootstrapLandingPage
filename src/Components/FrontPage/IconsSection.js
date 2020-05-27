import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const IconsSection = () => (
  <section className="features-icons text-center bg-light">
    <Container>
      <Row>
        <Col lg={4}>
          <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div className="features-icons-icon d-flex">
              <i className="icon-screen-desktop m-auto text-primary" />
            </div>
            <h3>Página Totalmente Responsiva</h3>
            <p className="lead mb-0">Esse tema vai funcionar em qualquer aparelho, não importa o tamanho!</p>
          </div>
        </Col>
        <Col lg={4}>
          <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div className="features-icons-icon d-flex">
              <i className="icon-layers m-auto text-primary" />
            </div>
            <h3>Compatível Com Bootstrap 4</h3>
            <p className="lead mb-0">Utilizamos a versão mais atualizada da framework mais popular do mercado!</p>
          </div>
        </Col>
        <Col lg={4}>
          <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div className="features-icons-icon d-flex">
              <i className="icon-check m-auto text-primary" />
            </div>
            <h3>Fácil De Usar</h3>
            <p className="lead mb-0">Pronta para usar com seu conteúdo e com arquivos customizáveis!</p>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
)

export default IconsSection
