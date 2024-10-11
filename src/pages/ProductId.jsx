import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductInfo from '../components/productId/ProductInfo';
import SimilarProducts from '../components/productId/SimilarProducts';
import './styles/ProductId.css';

const ProductId = () => {
  const [product, setProduct] = useState();
  const [categories, setCategories] = useState();

  const { id } = useParams();

  useEffect(() => {
    const URL = `http://localhost:8000/api/products/${id}`;
    axios
      .get(URL)
      .then((res) => setProduct(res.data.product))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const URL = `http://localhost:8000/api/categories`;
    axios
      .get(URL)
      .then((res) => {
        setCategories(res.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="product-id">
      <ProductInfo product={product} />
      <SimilarProducts product={product} categories={categories} />
    </main>
  );
};

export default ProductId;
