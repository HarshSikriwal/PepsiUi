import { useContext } from "react";
import { Button } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { DetailsContext } from "./DetailsContext";
import { Products } from "../PepsiDetails";
const LeftArrow = () => {
  const { setMyProduct, myProduct } = useContext(DetailsContext);
  const onclick = () => {
    const products = Products;
    let index: number | null = null;
    products.forEach((p, i) => {
      if (p.name === myProduct.name) {
        index = i;
      }
    });

    setMyProduct(() => {
      if (index === null) return products[0];
      return products.at(index - 1)!;
    });
  };

  return (
    <Button
      onClick={onclick}
      className="left-arrow hover-arrow text-white bg-transparent border-0"
    >
      <FaArrowLeft />
    </Button>
  );
};

export default LeftArrow;
