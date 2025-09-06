import ProductCategory from "../../components/main/ProductCategory"
import Products from "../../components/main/Products"
import Presentation from "../../components/main/Presentation"

import Header from "../../ui/Header"
import Main from "../../layouts/Main"

const Speakers = () => {
  return (
    <>
      <Header>Speakers</Header>
      <Main>
        <ProductCategory page="speakers" />
        <Products />
        <Presentation />
      </Main>
    </>
  )
}

export default Speakers