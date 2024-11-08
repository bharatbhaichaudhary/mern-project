import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contect from "./pages/Contect";
import Servise from "./pages/Servise";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Layout from "./layout/Layout";
import Error from "./pages/Error";
import Logout from "./pages/Logout";
import AdminLayout from "./componets/layout/AdminLayout";
import AdminUsers from "./pages/AdminUsers";
import AdminContect from "./pages/AdminContect";
import AdminUpdete from "./pages/AdminUpdete";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/servise" element={<Servise />} />
          <Route path="/contect" element={<Contect />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Error />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="user" element={<AdminUsers />} />
            <Route path="contects" element={<AdminContect />} />
            <Route path="users/:id/edit" element={<AdminUpdete />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
