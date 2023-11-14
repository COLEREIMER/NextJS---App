import { useState, useEffect } from "react";
import "./SearchBar.css";

export default function SearchBar() {
  const [filteredProducts, setFilteredProducts] = useState([])
  const [searchString, setSearchString] = useState("")

  useEffect(fetchAPIDATA, [searchString])

  function fetchAPIDATA() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => {
        const filtered = products.filter((el) =>{return el.title.toLowerCase().includes(searchString)})
        const currentFilter = filtered.map((product, index) => {
          return (<div key={index} className="prodStyle">
            <p>{product.title}</p>
            <p>${product.price}</p>
            <img src={product.image} alt={product.title} />
          </div>)
        })
        setFilteredProducts(currentFilter);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  function handleChange(event){
    setSearchString(event.target.value)
  }


  return (
    <div>
      <h2>The Search Bar!</h2>
      <input type="text" value={searchString} onChange={handleChange} />
      <div className="productList">{filteredProducts}</div>
    </div>
  );
}