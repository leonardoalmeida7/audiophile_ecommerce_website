import Presentation from '../../components/main/Presentation';
import Products from '../../components/main/Products';

import Header from '../../ui/Header';
import Main from '../../layouts/Main';

import ProductCategory from '../../components/main/ProductCategory';

const Headphones = () => {

  return (
    <div className='containerProducts'>
      <Header>Headphones</Header>
      <Main>
        <ProductCategory  page="headphones"/>
        <Products />
        <Presentation />
      </Main>
    </div>
  )
}

export default Headphones