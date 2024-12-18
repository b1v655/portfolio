import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/startup.svg";
import Particle from "../Particle";
import Type from "./Type";
import Poets from "./Poets";
import MyImageGallery from "./Galery";
function Funfact() {
  return (
    <section>
        <Container fluid className="about-section" >
        <Particle />
        
      <Container>
      <Row>
            <Col md={7} className="home-header">

              <h1 className="heading-name">

                <strong className="main-name"> Fun</strong> facts
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>

            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
          <MyImageGallery />
          <Poets style={{marginBottom:100}}/>
      </Container>
          
        </Container>
        
    </section>
  );
}

export default Funfact;
