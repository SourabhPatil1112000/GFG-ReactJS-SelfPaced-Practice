import './App.css';
import { useState } from 'react';

const allBrands = [
    {id:"1", brandName: "puma"},
    {id:"2", brandName: "adidas"},
    {id:"3", brandName: "nike"},
    {id:"4", brandName: "fila"},
    {id:"5", brandName: "reebok"}
  ];

function AddToCart() {

const [selectedBrand, setSelectedBrand] = useState([]);

const onAddToCartClick = (id) => {
  // console.log("Clicked");
  // console.log(id);
  const selectedItem = allBrands.find(item => item.id == id);
  setSelectedBrand([...selectedBrand, selectedItem]);
}

const onRemoveClick = (id) => {
  const filteredItems = selectedBrand.filter(item => item.id != id);
  setSelectedBrand(filteredItems);
}

  return (
    <>
    <div>
      <p>Add Brand to your Cart</p>
      {

        allBrands.map(brand => 
        <div>
          <span>{brand.brandName}</span>
          <button onClick={() => onAddToCartClick(brand.id)}>Add to Cart</button>
        </div>)
      }
    </div>
    <div>
      <p>Your Cart</p>
      {
        selectedBrand && selectedBrand.map(brand => <p>{brand.brandName} - <button onClick={() => onRemoveClick(brand.id)}>Remove</button></p>)
      }
    </div>
    </>
  );
}

export default AddToCart;