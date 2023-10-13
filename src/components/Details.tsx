import { Button } from "react-bootstrap";
import { DetailsContext } from "./DetailsContext";
import MyCard from "./MyCard";
import { useContext } from "react";

const Details = () => {
  const { myProduct } = useContext(DetailsContext);
  return (
    <div className="details">
      <p className="fs-1 text-white fw-semibold">Pepsi Classic</p>
      <p className="non-white">
        Carbonated Water, High Fructose, Corn Syrup, Caramel Color, Sugar,
        Phosphoric Acid, Caffeine, Citric Acid, Natual Flavor
      </p>
      <p className="text-white fw-semibold">NUTRITION FACTS</p>
      <div className="cards">
        <MyCard
          title={myProduct.energy}
          percent={myProduct.energyPercent}
          text="Amount Per Serving"
        />
        <MyCard
          title={myProduct.fat}
          percent={myProduct.fatPercent}
          text="Total Fat"
        />
        <MyCard
          title={myProduct.sodium}
          percent={myProduct.sodiumPercent}
          text="Sodium"
        />
        <MyCard
          title={myProduct.carbohydrates}
          percent={myProduct.carbohydratesPercent}
          text="Total Carbohydrate"
        />
        <MyCard
          title={myProduct.protein}
          percent={myProduct.proteinPercent}
          text="Protein"
        />
      </div>
      <div className="notes non-white">
        <p>Not a significant source of other nutrients.</p>
        <p>*Percent Daily Values are based on a 2000 calorie diet.</p>
      </div>
      <Button className="rounded-5 bg-transparent table-hover border-white border-3 mt-2  px-4">
        BUY PRODUCTS
      </Button>
    </div>
  );
};

export default Details;
