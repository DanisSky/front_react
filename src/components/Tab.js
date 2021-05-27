import React, { useState, useEffect } from "react";
import { useHistory, Link } from 'react-router-dom'
import axios from "axios";

const Tab = ({ activeTab }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const history = useHistory()
  const searchProducts = (value) => {
    let filterProducts = products.filter((product) => product?.name.includes(value))
    setFilteredProducts(filterProducts)
  }
  useEffect(() => {
    async function fetchData() {
      let arr = [];
      if (activeTab.length === 0) {
        arr = 
          await axios
            .get(`http://localhost:8080/products/`)
            .then((res) => {return res.data})
        ;
      }
      else {
        for (let product of activeTab) {
          arr.push(
            await axios
              .get(`http://localhost:8080/products/${product}`)
              .then((res) => res.data)
          );
        }
      }
      setProducts(arr);
      setFilteredProducts(arr);
    }
    fetchData();
  }, [activeTab]);
  if (products.length > 0) {
    return (
      <>
        {console.log(activeTab)}
        <div className="product__list">
          <div className="d-flex my-1">
            <input className="form-control mr-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => searchProducts(e.target.value)}></input>
          </div>
          <h1>Products</h1>
          <div className="product__cards">
            {filteredProducts.map((product) => (
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
      </>);
  }
  return <></>;
};

export default Tab;
