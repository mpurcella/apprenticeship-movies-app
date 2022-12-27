import { RouterProvider } from "react-router-dom";
import { StoreWrapper } from "./store/StoreWrapper";
import pages from "./pages/Pages";

function App() {
  return (
    <StoreWrapper>
      <RouterProvider router={pages} />
    </StoreWrapper>
  );
}

export default App;
