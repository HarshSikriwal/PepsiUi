import { Products } from "../PepsiDetails";
import BottleItem from "./BottleItem";

const Bottles = () => {
  return (
    <div className="bottles">
      {Products.map((product) => (
        <BottleItem key={product.name} product={product} />
      ))}
    </div>
  );
};

export default Bottles;
