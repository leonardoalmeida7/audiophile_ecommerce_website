import ProductAndPrice from '../../components/main/ProductAndPrice'
import FeatureText from '../../components/main/FeatureText'
import InTheBox from '../../components/main/InTheBox'
import ImagesGallery from '../../components/main/ImagesGallery'
import OtherProducts from '../../components/main/OtherProducts'
import GoBack from '../../components/main/GoBack'
import Presentation from '../../components/main/Presentation'

import Main from '../../layouts/Main'
import useFetch from '../../hooks/useFetch'


import { useParams } from 'react-router-dom';
import Products from '../../components/main/Products'


const ProductFeatures = () => {
  const { id: paramsId } = useParams();

  const { data, loading, error } = useFetch('data.json');
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading headphones</p>;

  const itemById = data.find(item => String(item.id) === String(paramsId));

  return (
    <Main>
        <GoBack item={itemById} />
        <ProductAndPrice item={itemById} />
        <FeatureText item={itemById} />
        <InTheBox item={itemById} />
        <ImagesGallery item={itemById} />
        <OtherProducts item={itemById} />
        <Products />
        <Presentation />
    </Main>
  )
}

export default ProductFeatures