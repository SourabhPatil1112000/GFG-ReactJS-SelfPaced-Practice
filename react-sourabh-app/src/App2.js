import './App.css';

const products = [{id:"1", item:'Shirt'}, {id:"2", item:'Shorts'},
                  {id:"3", item:'T-Shirts'}, {id:"4", item:'Pants'}];

// Parent App component
function MyApp2() {
  
  return (
    <>
      <h1>Rendering List and Conditional Rendering</h1>
      {/* {
        products.map(product => <p key={product.id}>{product.item}</p>)
      } */}
      <ol>
      {
        products.map(product => {
          return (
              <li className={`${product.id % 2 === 0 ? 'products': 'redc'}  pd8`} key={product.id}>{product.item}</li>
          )
        })
      }
      </ol>
    </>
  );
}

export default MyApp2;
