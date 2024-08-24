import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

import styles from './Products.module.css';
import CardProduct from '../CardProduct/CardProduct';
function Prod() {
  const [products, setProducts] = useState([]);

  // dengan axios
  const callRandomProductsAPIAxios = async () => {
    const response = await axios(' https://fakestoreapi.com/products/category/electronics');
    //console.log(response)
    // setProducts(response?.data);
    return response?.data;
  };

   // pembungkus dengan useQuery
  const { data, isFetching } = useQuery(['products'], callRandomProductsAPIAxios);

  return (
    <div>
      <h1>List Products</h1>
      <div className={styles.containerProducts}>
        {data?.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Prod;
