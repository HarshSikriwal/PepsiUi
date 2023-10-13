import Bottles from "./components/Bottles";
import Details from "./components/Details";
import DetailsProvider from "./components/DetailsContext";
import MyNav from "./components/MyNav";
import Pepsi from "./components/Pepsi";
import Serving from "./components/Serving";
import "./index.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function App() {
  return (
    <DetailsProvider>
      <main>
        <MyNav />
        <div className="main-section mx-5 mt-4 mb-0">
          <FaArrowLeft />
          <Details />
          <Pepsi />
          <Serving />
          <FaArrowRight />
        </div>

        <Bottles />
      </main>
    </DetailsProvider>
  );
}

export default App;
