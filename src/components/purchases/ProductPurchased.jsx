import React from 'react';
import './styles/ProductPurchased.css';

const ProductPurchased = ({ product }) => {
  return (
    <article className="product__purchased">
      <h4 className="product__purchased-title">{product.Product.name}</h4>
      <h4 className="product__purchased-quantity">{product.quantity}</h4>
      <h4 className="product__purchased-price">$ {(product.quantity * product.Product.price).toFixed(2)}</h4>
    </article>
  );
};

export default ProductPurchased;
