import React from 'react';
import styles from './Card.module.scss';

interface IProps {
  name: any;
}

function Card(item: IProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <figure className={[styles.image, styles.is4by3].join(' ')}>
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{item.name}</p>
            <p className="subtitle is-6">@johnsmith</p>
          </div>
        </div>

        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          <a href="#">#css</a> <a href="#">#responsive</a>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Card;
