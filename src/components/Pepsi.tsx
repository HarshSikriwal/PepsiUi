import { useContext, useEffect } from "react";
import { DetailsContext } from "./DetailsContext";

const Pepsi = () => {
  const { myProduct } = useContext(DetailsContext);

  const { name, heroImg } = myProduct;

  useEffect(() => {
    const imageElement = document.getElementById(
      `hero${name}`
    ) as HTMLImageElement;
    import(
      /* @vite-ignore */
      "/.vercel/output/static/images" +
        heroImg.replace(/ /g, "_").split("/").at(-1)
    ).then((url) => {
      imageElement.src = url.default;
    });
  }, [myProduct]);
  return (
    <div className="pepsi">
      <img id={`hero${name}`} />;
    </div>
  );
};

export default Pepsi;
