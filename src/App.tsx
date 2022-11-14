import ButtonLinkPrimary from "./components/button-link-primary/ButtonLinkPrimary";
import ButtonLinkSecondary from "./components/button-link-secondary/ButtonLinkSecondary";
import Button from "./components/button/Button";
import { FaPlay } from "react-icons/fa";
import { BiMovie } from "react-icons/Bi";
import Poster from "./components/poster/Poster";

function App() {
  return (
    <div className="p-4">
      <div className="flex mb-10">
        <ButtonLinkPrimary link={"#"} startIcon={<FaPlay />} styleLight={true}>
          Primary Light
        </ButtonLinkPrimary>
        <ButtonLinkPrimary link={"#"} endIcon={<FaPlay />} styleLight={false}>
          Primary Dark
        </ButtonLinkPrimary>
      </div>
      <ul className="w-1/6 inline-flex flex-col mb-10 divide-y divide-grey-200">
        <li>
          <ButtonLinkSecondary link={"#"} startIcon={<BiMovie />}>
            Action
          </ButtonLinkSecondary>
        </li>
        <li>
          <ButtonLinkSecondary link={"#"} startIcon={<BiMovie />}>
            Comedy
          </ButtonLinkSecondary>
        </li>
      </ul>
      <div className="flex mb-10">
        <Button endIcon={<FaPlay />}>Button</Button>
      </div>
      <h1 className="text-grey-100 text-40">Test Color</h1>
      <h1 className="text-grey-200 text-40">Test Color</h1>
      <h1 className="text-grey-300 text-40">Test Color</h1>
      <h1 className="text-grey-400 text-40">Test Color</h1>
      <h1 className="text-grey-500 text-40">Test Color</h1>
      <h1 className="text-black text-40">Test Color</h1>
      <h1 className="text-red text-40">Test Color</h1>
      <div className="w-[300px]">
        <Poster
          image={
            "https://image.tmdb.org/t/p/w780/b6IRp6Pl2Fsq37r9jFhGoLtaqHm.jpg"
          }
          alt={"Alt Text"}
        />
      </div>
    </div>
  );
}

export default App;
