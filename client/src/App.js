import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./user/pages/Error.js";
import Home from "./user/pages/Home.js";
import Theatreselection from "./user/pages/Theatreselection.js";
import Moviedetails from "./user/pages/Moviedetails.js";
import SharedLayout from "./user/pages/SharedLayout.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="list-movies" element={<h1>List movies</h1>} />
          <Route path="theatre-listing" element={<Theatreselection/>} />
          <Route path="booked-shows" element={<h1>My shows</h1>} />
          <Route
            path="list-stream-movies"
            element={<h1>list-stream-movies</h1>}
          />
          <Route path="theatre-login" element={<h1>Theatre login</h1>} />
          <Route path="offers" element={<h1>Offers</h1>} />
          <Route path="profile" element={<h1>Profile</h1>} />

          <Route path="stream-library" element={<h1>Stream Library</h1>} />
          <Route path="purchase-history" element={<h1>Purchase History</h1>} />
          <Route path="chat" element={<h1>Chat</h1>} />
          <Route path="movie-details" element={<Moviedetails />} />
          <Route path="*" element={<Error />} />
        </Route>
        <Route path="seat-select" element={<h1>Seat selection</h1>} />

        <Route path="payment" element={<h1>Payment</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
