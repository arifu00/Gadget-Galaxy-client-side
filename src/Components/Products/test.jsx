
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";
import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  console.log(product);
//   const {
//     productName,
//     brandName,
//     productType,
//     shortDescription,
//     price,
//     rating,
//     photo,
//   } = product;

  const { brandName } = useParams();
//   console.log(brandName);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    products.map((product) => setProduct(product));
  }, [products]);

  return (
    <div className="container mx-auto px-5">
     

      {/* product  */}
      <div>
        {brandName === product.brandName ? (
          <div className="">
            
          </div>
        ) : (
          <p>Coming Soon</p>
        )}
      </div>
    </div>
  );
};

export default Products;
