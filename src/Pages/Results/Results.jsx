import React, { useState, useEffect } from 'react'
import classes from './Results.module.css'
import LayOut from '../../Component/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'
import ProductCard from '../../Component/Products/ProductCard'
import Loader from '../../Component/Loader/Loader'

function Results() {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {categoryName} =useParams()
    // console.log(categoryName)
    useEffect(() => {
      setIsLoading(true); // Set loading to true before fetching data
      axios.get(`${productUrl}products/category/${categoryName}`)
          .then((res) => {
              setResults(res.data);
              setIsLoading(false); // Set loading to false after data is fetched
          })
          .catch((err) => {
              console.log(err);
              setIsLoading(false); // Set loading to false if there's an error
          });
  }, [categoryName]);
    
    return (
      <LayOut> 
            <section>
                <h1 style={{ padding: "30px" }}>Results</h1>
                <p style={{ padding: "30px" }}>Category / {categoryName}</p>
                <hr />
                {isLoading ? (
                  <Loader />
                ) : (
                  <div className={classes.products_container}>
                {results?.map((product) => (
                    <ProductCard
                    key={product.id}
                    product={product}
                    renderDesc={false}
                    renderAdd={true}
                    />
                ))}
                </div>
                )}
            </section>
      </LayOut>
    );
  };

export default Results