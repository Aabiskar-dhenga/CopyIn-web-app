import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/profile/Profile";
import styles from "./App.module.css";
import UploadWall from "./components/uploadWall/UploadWall";

const App = () => {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/uploadwall" element={<UploadWall />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
