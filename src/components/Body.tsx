import React from 'react';
import Card from './Card';
import styles from './Body.module.scss';

function Body() {
  return (
		<div className={[styles.tile, styles.isAncestor].join(" ")}>
			<Card />
			<Card />
		</div>
  );
}

export default Body;
