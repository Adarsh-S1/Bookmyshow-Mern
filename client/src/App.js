import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./pages/Error.js";
import Home from "./pages/Home.js";
import SharedLayout from "./pages/SharedLayout.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
