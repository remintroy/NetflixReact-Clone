import React from "react";
import Navbar from "./components/NavBar/Navbar";
import "./App.css";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <RowPost url={'originals'} title={'Netflix Orginals'} />
    </div>
  );
}

export default App;
