import React from 'react';
import styles from './CardProduct.module.css';

function CardProduct({ product }) {
  if (!product) {
    return null;
  }
  const { id, title, price, description, category, image } = product;
  // const { country, city, state, postcode, street } = location || {};

  return (
    <div className={styles.cardProduct}>
      <p className={styles.description}>
        {id} - {title} - {price}
      </p>
      <div className={styles.imageContainer}>
        <img
          src={image}
          alt={title}
          height={100}
          width={'auto'}
          className={styles.image}
        />
      </div>
      <h6>
        {description}
      </h6>
    </div>
  );
}

export default CardProduct;
