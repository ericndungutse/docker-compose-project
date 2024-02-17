import { useState, useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import './App.css';

const About = () => {
  return (
    <div>
      <h1>About us</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas quos
        molestiae rem accusantium necessitatibus inventore enim, animi iusto
        ipsa mollitia nobis iure consequuntur doloribus quisquam nam, recusandae
        expedita repellat rerum.
      </p>
    </div>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await axios('/api/v1/products');

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
    <div>
      <h1>Productssss</h1>
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
  );
};

function App() {
  return (
    <>
      <header>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='about'>About</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
