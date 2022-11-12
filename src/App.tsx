import ButtonLinkPrimary from "./components/button-link-primary/ButtonLinkPrimary";
import { FaPlay } from "react-icons/fa";

function App() {
  return (
    <>
      <div className="flex pt-4">
        <ButtonLinkPrimary link={"#"} startIcon={<FaPlay />} styleLight={true}>
          Primary Light
        </ButtonLinkPrimary>
        <ButtonLinkPrimary link={"#"} endIcon={<FaPlay />} styleLight={false}>
          Primary Dark
        </ButtonLinkPrimary>
      </div>
      <h1 className="text-grey-100 text-40">Test Color</h1>
      <h1 className="text-grey-200 text-40">Test Color</h1>
      <h1 className="text-black text-40">Test Color</h1>
      <h1 className="text-red text-40">Test Color</h1>
    </>
  );
}

export default App;
