import { Products } from "../PepsiDetails";
import BottleItem from "./BottleItem";

const Bottles = () => {
  return (
    <div className="bottles mx-5">
      {Products.map((product) => (
        <BottleItem key={product.name} product={product} />
      ))}
    </div>
  );
};

export default Bottles;
