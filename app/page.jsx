'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListProducts from '../components/products/ListProducts';

const HomePage = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${process.env.API_URL}/api/products`);
        setProductsData(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []); // Пустой массив зависимостей гарантирует, что эффект выполнится только при монтировании компонента

  return <ListProducts data={productsData} />;
};

export default HomePage;

// import axios from 'axios';
// import ListProducts from '../components/products/ListProducts';

// const getProducts = async () => {
//   const { data } = await axios.get(`${process.env.API_URL}/api/products`);
//   return data;
// };

// const HomePage = async () => {
//   const productsData = await getProducts();
//   return <ListProducts data={productsData} />;
// };

// export default HomePage;
