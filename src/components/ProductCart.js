import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Nav from './Nav'
import { useParams } from 'react-router-dom'
import Review from './Review';



const ProductCart = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  useEffect(() => {
    async function fetchData() {
      const res = await axios
        .get(`http://localhost:8080/products/${id}`)
        .then((res) => res.data);
      setProduct(res);
    }
    fetchData();
  }, [id]);
  
  return (
    <>
      <Nav />
      <main>
        <div className="content container">
          <div className="product__detail">
            {product.id &&
              <div className="product__detail__card">
                <div className="product__detail__card__image">
                  <img src={`http://localhost:8080/files/?url=${encodeURIComponent(product.pictureUrl)}`} alt="" />
                </div>
                <div className="product__detail__card__about">
                  <h5>{product.name}</h5>
                  <span>{product.category}</span>
                  <br />
                  <b>$ {product.price}</b>
                  <p>
                    {product.description}
                  </p>
                  <div className="form">
                    <button className="product__detail__btn btn" type="submit">Add to Corzine</button>
                  </div>
                </div>
              </div>}

          </div>
        </div>
      </main>
      
        <Review reviews={product.productReviews}/>
    </>
  )
}

export default ProductCart
