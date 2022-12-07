import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";
import { StoreWrapper } from "./store/StoreWrapper";

function App() {
  return (
    <StoreWrapper>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </StoreWrapper>
  );
}

export default App;
