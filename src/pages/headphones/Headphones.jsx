import Presentation from '../../components/main/Presentation';
import Products from '../../components/main/Products';

import Header from '../../ui/Header';
import Main from '../../ui/Main';

import ProductCategory from '../../components/main/ProductCategory';

const Headphones = () => {

  return (
    <>
      <Header>Headphones</Header>
      <Main>
        <ProductCategory  page="headphones"/>
        <Products />
        <Presentation />
      </Main>
    </>
  )
}

export default Headphones