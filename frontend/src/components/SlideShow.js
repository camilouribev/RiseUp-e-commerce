import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = ["academy-1.jpg", "academy-2.jpg", "academy-5.jpg"];

const SlideShow = () => {
  return (
    <div className="slide-container-bg">
      <div className="">
        <h1 className="academy-title">la ACADEMIA</h1>
        <ul className="academy">
          <li>8 poles profesionales, con espacio apropiado </li>
          <li> Salas de cambio de ropa y camerinos de maquillaje.</li>
          <li>Luces LED y sonido profesional</li>
          <li>Clases grupales de máximo 5 personas</li>
          <li>Clases de acondicionamiento físico</li>
          <li>Clases de lira, telas y gimnasia artística </li>
          <li>Clases personalizadas</li>
        </ul>
      </div>
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default SlideShow;
