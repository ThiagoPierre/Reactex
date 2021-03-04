import React from 'react';
import '../CardCss/index.css';
import { Link } from 'react-router-dom';

const CardUI = ({
  imageSource, title, text, url,
}) => (

  <Link to={url}>
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {text || 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam.'}
        </p>
      </div>
    </div>
  </Link>

);

export default CardUI;
