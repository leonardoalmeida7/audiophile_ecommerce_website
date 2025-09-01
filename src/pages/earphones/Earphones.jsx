import Header from '../../ui/Header'
import Main from '../../ui/Main'

import ProductCategory from '../../components/main/ProductCategory'
import Products from '../../components/main/Products'
import Presentation from '../../components/main/Presentation'

const Earphones = () => {
  return (
    <>
      <Header>Earphones</Header>
      <Main>
        <ProductCategory page="earphones" />
        <Products />
        <Presentation />
      </Main>
    </>
  )
}

export default Earphones