import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../src/pages/Home";
import { NewRoom } from "../src/pages/NewRoom";
import { Room } from "../src/pages/Room";
import { AdminRoom } from "../src/pages/AdminRoom";

import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms/new' element={<NewRoom />} />
          <Route path='/rooms/:id' element={<Room />} />
          <Route path='/admin/rooms/:id' element={<AdminRoom />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
