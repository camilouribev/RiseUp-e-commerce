import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function Jumbotron() {
  return (
    <div>
      <div className="jumbotron" id="main-top">
        <div>
          <h4 className="jumbotron-text">sube tu energía</h4>
          <p className="jumbotron-text-small">
            Aprende pole dance en clases personalizadas,
            <br /> con instructoras de primer nivel
          </p>
          <Link to="#plans">
            <a className="jumbo-btn">ver planes</a>
          </Link>
        </div>
      </div>
      <div className="jumbotron-2">
        <div>
          <h4 className="jumbotron-text">otro nivel</h4>
          <p className="jumbotron-text-small">
            los mejores insumos para disciplinas aereas ,
            <br /> en un solo lugar.
          </p>
          <Link to="/tienda">
            <a className="jumbo-btn">ir a la tienda</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
