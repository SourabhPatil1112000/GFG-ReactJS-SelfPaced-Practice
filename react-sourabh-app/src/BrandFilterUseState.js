import './App.css';
import { useState } from 'react';

const allBrands = [
    {id:"1", brandName: "puma"},
    {id:"2", brandName: "adidas"},
    {id:"3", brandName: "nike"},
    {id:"4", brandName: "fila"},
    {id:"5", brandName: "reebok"}
  ];

function BrandFilterUseState() {

  const [brands, setBrands] = useState(allBrands);

  const onSearchChange = (e) => {
    const value = e.target.value;
    const filteredBrands = value?.length > 0 ? brands.filter(brand => brand.brandName.includes(value.toLowerCase())): allBrands;
    setBrands(filteredBrands);
  }

  return (
    <>
      <input onChange={onSearchChange} placeholder='Search a Brand'/>
      <ul>
        {
          brands.map(brand => <li key={brand.id}>{brand.brandName}</li>)
        }
      </ul>
    </>
  );
}

export default BrandFilterUseState;