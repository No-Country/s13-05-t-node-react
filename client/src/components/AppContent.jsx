import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import {
  HOME,
  SIGNUP,
  REGISTER2,
  TERMS,
  PRIVACY,
  PAGESELECTION,
  PROFILE,
  REGISTER22,
  REGISTER221,
  MATCH,
  CHAT,
} from "../Router/Paths";
import Login from "./Login/Login";
import SignUp from "./Login/SignUp";
import Register2 from "./Register2/Register2";
import Terms from "./Login/Terms";
import Privacy from "./Login/Privacy";
import PageSelection from "./PageSelection/PageSelection";
import Profile from "../pages/Profile";
import Register22 from "./Register22/Register22";
import Register221 from "./Register221/Register221";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/authSlice";
import MatchPage from "../pages/MatchPage";
import ChatPage from "../pages/ChatPage";

import ImagenPrueba from "./ImagenPrueba/ImagenPrueba";

function AppContent() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Routes>
      <Route
        path={"/"}
        element={!isLoggedIn ? <Login /> : <Navigate to={HOME} replace />}
      />
      <Route path={SIGNUP} element={<SignUp />} />
      <Route path={HOME} element={<Home />} />
      <Route path={REGISTER2} element={<Register2 />} />
      <Route path={TERMS} element={<Terms />} />
      <Route path={PRIVACY} element={<Privacy />} />
      <Route path={PAGESELECTION} element={<PageSelection />} />
      <Route path={PROFILE} element={<Profile />} />
      <Route path={REGISTER22} element={<Register22 />} />
      <Route path={REGISTER221} element={<Register221 />} />
      <Route path={MATCH} element={<MatchPage />} />
      <Route path={CHAT} element={<ChatPage />} />
      
      <Route path="/imagen" element={<ImagenPrueba/>}/>
    </Routes>
  );
}

export default AppContent;
