import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className="text-center py-3 footer-text">
            <img
              src="/logo_rise_up.png"
              width="60"
              height="40"
              alt="Rise Up"
              id="logo"
            ></img>{" "}
            <h4 className="footer-text">
              <a href="tel:+62896706255135" className="footer-text">
                Contacto:31011110101
              </a>
            </h4>
            <h4 className="footer-text">
              <a href="info@riseup.co" style={{ color: "white" }}>
                info@riseup.co
              </a>
            </h4>
            <h5 className="footer-text">&copy; Medellín, Antioquia</h5>
            <h5 className="footer-text">&copy; Rise Up Col</h5>
            <span>
              <i
                className="fab fa-instagram footer-text"
                style={{ size: "4em" }}
              ></i>
              <span>
                <i
                  className="fab fa-facebook footer-text-icon"
                  style={{ color: "white" }}
                ></i>
              </span>
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
