import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const IconsSection = () => (
  <section className="features-icons text-center">
    <Container>
      <Row>
        <Col lg={4} className="mb-5">
          <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3 d-flex flex-column">
            <div className="features-icons-icon d-flex">
              <i className="icon-screen-desktop m-auto text-light" />
            </div>
            <div className="mt-auto">
              <h3 className="text-light">Página Responsiva</h3>
              <p className="lead mb-0 text-light">Esse tema vai funcionar em qualquer aparelho, não importa o tamanho!</p>
            </div>

          </div>
        </Col>
        <Col lg={4} className="mb-5">
          <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3 d-flex flex-column">
            <div className="features-icons-icon d-flex">
              <i className="icon-layers m-auto text-light" />
            </div>
            <div className="mt-auto">
              <h3 className="text-light">Design Moderno</h3>
              <p className="lead mb-0 text-light">Design moderno que acompanha as tendências mundiais!</p>
            </div>
          </div>
        </Col>
        <Col lg={4} className="mb-5">
          <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3 d-flex flex-column">
            <div className="features-icons-icon d-flex">
              <i className="icon-check m-auto text-light" />
            </div>
            <div className="mt-auto">
              <h3 className="text-light">Fácil De Usar</h3>
              <p className="lead mb-0 text-light">Pronta para usar com seu conteúdo e com arquivos customizáveis!</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
)

export default IconsSection
