import { useContext } from "react";
import { DetailsContext } from "./DetailsContext";

const Serving = () => {
  const { myProduct } = useContext(DetailsContext);
  return (
    <div className="card-serving">
      <div className="serving text-white">
        <p className="fs-3 fw-bold mb-1">{myProduct.quantity}</p>
        <div className="per-container opacity-50 ">
          <p>Serving Size</p>
          <div className="small-text">
            <p> 1 serving</p>
            <p>per container</p>
          </div>
        </div>
      </div>
      <div className="custom-bg"></div>
    </div>
  );
};

export default Serving;
