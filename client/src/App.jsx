import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await axios('http://localhost:3002/products');

        console.log(res.data);

        setProducts(res.data);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <>
      <div>
        <h1>Products</h1>
        {loading && <h2>Loading....</h2>}
        {!loading &&
          products.map((product) => {
            return (
              <div key={product.id}>
                {product.name} : {product.price}
              </div>
            );
          })}
      </div>
    </>
  );
}

export default App;
