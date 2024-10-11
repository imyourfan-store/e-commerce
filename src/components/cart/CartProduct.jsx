import React from 'react';
import './styles/CartProduct.css';
import { useDispatch } from 'react-redux';
import { deleteProductCart } from '../../store/slices/cart.slice';

const CartProduct = ({ cartProduct }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProductCart(cartProduct.id));
  };

  return (
    <article className="cart-product">
      <h3 className="cart-product__title">{cartProduct.Product.name}</h3>
      <div className="cart-product__quantity">
        <p>{cartProduct.quantity}</p>
      </div>
      <footer className="cart-product__footer">
        <h3 className="cart-product__price">
          <span className="cart-product__price-title">Total:</span> ${cartProduct.quantity * cartProduct.Product.price}
        </h3>
      </footer>
      <i onClick={handleDelete} className="cart-product__trash bx bx-trash"></i>
    </article>
  );
};

export default CartProduct;
