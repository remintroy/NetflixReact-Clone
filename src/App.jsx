import React, { useState, useEffect } from "react";
import Navbar from "./components/NavBar/Navbar";
import "./App.css";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";

import { genre, GENRE_ROW_URL, IMG_URL, TRENDING_ROW_URL } from "./const";
import axois from "./axois";

function App() {
  //...
  const [genreData, setGenreData] = useState([]);

  useEffect(() => {
    const innerFunction = async () => {
      // getting data from api
      const {
        data: { genres },
      } = await axois.get(genre);
      // add data to state;
      // console.log(genres);
      setGenreData(genres);
    };
    innerFunction();
  }, []);


  return (
    <div>
      <Navbar />
      <Banner url={`${IMG_URL}`} />

      

      <RowPost url={TRENDING_ROW_URL} title={"Trending Movies"} key={100} />
      {genreData.map((genre, index) => {
        // console.log(genreRowUrl+genre.id)
        return (
          <RowPost
            url={GENRE_ROW_URL + genre.id}
            title={genre.name}
            isSmall={"true"}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default App;
