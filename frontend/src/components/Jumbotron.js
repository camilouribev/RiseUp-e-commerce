import React from "react";

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
          <a className="jumbo-btn" href="#plans">
            ver planes
          </a>
        </div>
      </div>
      <div className="jumbotron-2">
        <div>
          <h4 className="jumbotron-text">otro nivel</h4>
          <p className="jumbotron-text-small">
            los mejores insumos para disciplinas aereas ,
            <br /> en un solo lugar.
          </p>
          <a className="jumbo-btn" href="/tienda">
            ir a la tienda
          </a>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
