import React, { useState, useEffect } from "react";
import {useHistory, Link} from 'react-router-dom'
import axios from "axios";

const Tab = ({ activeTab }) => {
  const [products, setProducts] = useState([]);
  const history = useHistory()
  useEffect(() => {
    async function fetchData() {
      const arr = [];
      for (let product of activeTab) {
        arr.push(
          await axios
            .get(`http://localhost:8080/products/${product}`)
            .then((res) => res.data)
        );
      }
      setProducts(arr);
    }
    fetchData();
  }, [activeTab]);

  if (products.length > 0) {
    return (
      <div className="product__list">
        <h1>Products</h1>
        <div className="product__cards">
          {products.map((product) => (
            <div className="product__card" key={product?.id} onClick={() => history.push(`/product/${product.id}`)}>
              <div className="product__card__image">
                <img
                  src={`http://localhost:8080/files/?url=${encodeURIComponent(product.pictureUrl)}`}
                  className="card-img-top"
                  alt=""
                />
              </div>
              <div className="product__card__body">
                <Link to={`/product/${product.id}`}><span >
                  {product.name}
                </span></Link>
                <p className="card-text">{`$${product.price}`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return <></>;
};

export default Tab;
