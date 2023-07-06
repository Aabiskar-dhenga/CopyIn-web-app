import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/profile/Profile";
import styles from "./App.module.css";
import Mywalls from "./pages/mywalls/Mywalls";

const App = () => {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wall" element={<Mywalls/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
