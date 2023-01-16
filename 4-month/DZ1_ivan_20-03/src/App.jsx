import products from './assets/products';
import Text from './Text';
import Product from './product';

function App() {
  return (
    <>
      <ul className='product-list'>
        {products.map(product => (
          <Product props={product}/>
          ))}
      </ul>
      <Text title="Best shop" description="The best shop ever! Just buy something, you will not regret. Lorem, ipsum dolor sit amet consectetur adipisicing elit."/>
    </>
  )
}

export default App
