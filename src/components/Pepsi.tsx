import { useContext, useEffect } from "react";
import { DetailsContext } from "./DetailsContext";

const Pepsi = () => {
  const { myProduct } = useContext(DetailsContext);

  const { name, heroImg } = myProduct;

  useEffect(() => {
    const imageElement = document.getElementById(
      `hero${name}`
    ) as HTMLImageElement;
    const url = `/_vercel/image?url=${encodeURIComponent(
      "/images/" + heroImg.replace(/ /g, "_").split("/").at(-1)!
    )}`;
    imageElement.src = url;
  }, [myProduct]);
  return (
    <div className="pepsi">
      <img id={`hero${name}`} />;
    </div>
  );
};

export default Pepsi;
