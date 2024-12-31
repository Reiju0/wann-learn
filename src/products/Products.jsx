import { useEffect, useState } from "react";
import "./Products.css";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);

  const handleGet = () => {
    setLoad(true);
  };

  useEffect(() => {
    if (load) {
      fetch("/products.json")
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }
  }, [load]);

  console.log(products);

  return (
    <div className="products-page">
      <header className="header">Products Pages</header>
      <main className="main-page">
        <p className="title">List Products</p>
        <div className="get-button">
          <button onClick={handleGet} type="submit" className="button">
            Get Products
          </button>
        </div>
        <div className="container-card">
          {products.map((product, i) => (
            <div className="card" key={i}>
              <img className="product-photo" src={product.image} />
              <p className="product-name">{product.productName}</p>
              <p className="product-price">
                Rp{new Intl.NumberFormat("en-DE").format(product.price)}
              </p>
            </div>
          ))}
        </div>
      </main>
      <footer className="footer">Products pages Footer</footer>
    </div>
  );
};
