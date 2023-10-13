import { useEffect, useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { Products } from "../PepsiDetails";
import { DetailsContext } from "./DetailsContext";

const BottleItem = ({ product }: { product: (typeof Products)[0] }) => {
  const { myProduct, setMyProduct } = useContext(DetailsContext);
  const { blueIcon, whiteIcon, name } = product;

  const [blueBottleUrl, setBlueBottleUrl] = useState("");
  const [whiteBottleUrl, setWhiteBottleUrl] = useState("");

  useEffect(() => {
    const imageElement = document.getElementById(name) as HTMLImageElement;
    import(
      /* @vite-ignore */
      "/.vercel/output/static/" + blueIcon.replace(/ /g, "_").split("/").at(-1)
    ).then((url) => {
      imageElement.src = url.default;
      setBlueBottleUrl(url.default);
    });
    import(
      /* @vite-ignore */
      "/" + whiteIcon.replace(/ /g, "_")
    ).then((url) => {
      setWhiteBottleUrl(url.default);
    });
  }, []);

  useEffect(() => {
    // // console.log(myProduct);
    if (whiteBottleUrl === "" && blueBottleUrl === "") return;
    const imageElement = document.getElementById(name) as HTMLImageElement;

    if (myProduct.name === name) {
      imageElement.src = whiteBottleUrl;
    } else {
      imageElement.src = blueBottleUrl;
    }
  }, [myProduct, whiteBottleUrl, blueBottleUrl]);

  const onHover = () => {
    const imageElement = document.getElementById(name) as HTMLImageElement;
    // console.log(imageElement);
    imageElement.src = whiteBottleUrl;
  };

  const onLeave = (name: string) => {
    const imageElement = document.getElementById(name) as HTMLImageElement;

    imageElement.src = blueBottleUrl;
    if (myProduct.name === name) {
      imageElement.src = whiteBottleUrl;

      // console.log(myProduct);
    }
  };

  const onclick = (product: (typeof Products)[0]) => {
    setMyProduct(product);
  };

  const numericPart = (quantity: string) => {
    const numericPart = parseFloat(quantity);
    const isMili = quantity.includes("ml");

    const finalNumber = isMili ? numericPart / 1000 : numericPart;
    return Math.round(finalNumber * 100) / 100;
  };

  return (
    <Button
      className="bottle-quant bg-transparent border-0"
      onMouseEnter={onHover}
      onMouseLeave={() => onLeave(name)}
      onClick={() => onclick(product)}
    >
      <img width={40} id={name} />
      <p id={name} className={myProduct.name === name ? `text-white` : ""}>
        {numericPart(product.quantity)}
      </p>
    </Button>
  );
};

export default BottleItem;
