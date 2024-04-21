import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Profile from "../src/pages/Profile";
import SignUp from "./pages/SignUp";
import SignOut from "./pages/SignOut";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signOut" element={<SignOut />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
