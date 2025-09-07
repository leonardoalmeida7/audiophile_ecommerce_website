import ProductAndPrice from "./components/ProductAndPrice";
import FeatureText from "./components/FeatureText";
import InTheBox from "./components/InTheBox";
import ImagesGallery from "./components/ImagesGallery";
import OtherProducts from "./components/OtherProducts";
import GoBack from "../../components/main/GoBack";
import Presentation from "../../components/main/Presentation";

import Main from "../../layouts/Main";
import useFetch from "../../hooks/useFetch";

import { useParams } from "react-router-dom";
import Products from "../../components/main/Products";

const ProductFeatures = () => {
  const { id: paramsId } = useParams();

  const { data, loading, error } = useFetch("data.json");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading headphones</p>;

  const itemById = data.find((item) => String(item.id) === String(paramsId));

  return (
    <div className="containerProductsDetails">
      <Main>
        <GoBack />
        <ProductAndPrice item={itemById} />
        <FeatureText item={itemById} />
        <InTheBox item={itemById} />
        <ImagesGallery item={itemById} />
        <OtherProducts item={itemById} />
        <Products />
        <Presentation />
      </Main>
    </div>
  );
};

export default ProductFeatures;
