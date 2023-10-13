import Bottles from "./components/Bottles";
import Details from "./components/Details";
import DetailsProvider from "./components/DetailsContext";
import LeftArrow from "./components/LeftArrow";
import MyNav from "./components/MyNav";
import Pepsi from "./components/Pepsi";
import RightArrow from "./components/RightArrow";
import Scale from "./components/Scale";
import Serving from "./components/Serving";
import "./index.css";

function App() {
  return (
    <DetailsProvider>
      <main>
        <MyNav />
        <LeftArrow />
        <RightArrow />
        <div className="main-section mt-4 mb-0 justify-content-between">
          <Details />
          <Pepsi />
          <Scale />
          {/* <FaArrowRight /> */}
        </div>
        <Bottles />
        <Serving />
      </main>
    </DetailsProvider>
  );
}

export default App;
