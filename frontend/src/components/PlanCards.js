import React from "react";

function PlanCards() {
  return (
    <div className="card-container row" id="plans">
      <div className="card col-sm">
        <h1 className="jumbotron-text plans-title">PLANES</h1>
        <div className="face face1">
          <h1>1</h1>mes
        </div>
        <div className="face face2">
          <div className="content">
            <h3>Plan Oro</h3>
            <ul>2 clases de pole dance grupales semanales</ul>
            <ul>1 clases de pole dance personalizada semanal</ul>
          </div>
        </div>
      </div>
      <div className="card col-sm">
        <div className="face face1">
          <h1>3</h1>meses
        </div>
        <div className="face face2">
          <div className="content">
            <h3>Plan Platino</h3>
            <ul>
              Beneficios plan oro <h2>+</h2>
            </ul>
            <ul>4 clases especiales al mes (gimnasia, lira o telas)</ul>
          </div>
        </div>
      </div>
      <div className="card col-sm">
        <div className="face face1">
          <h1>6</h1>meses
        </div>
        <div className="face face2">
          <div className="content">
            <h3>Plan Diamante</h3>
            <ul>
              Beneficios plan platino <h2>+</h2>
            </ul>

            <ul>
              Asesoría profesional en nutrición y acondicionamiento físico.Termo
              y camiseta.
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanCards;
