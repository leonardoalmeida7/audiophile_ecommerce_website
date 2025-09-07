import Header from '../../ui/Header'
import Main from '../../layouts/Main'

import ProductCategory from '../../components/main/ProductCategory'
import Products from '../../components/main/Products'
import Presentation from '../../components/main/Presentation'

const Earphones = () => {
  return (
    <div className='containerProducts'>
      <Header>Earphones</Header>
      <Main>
        <ProductCategory page="earphones" />
        <Products />
        <Presentation />
      </Main>
    </div>
  )
}

export default Earphones