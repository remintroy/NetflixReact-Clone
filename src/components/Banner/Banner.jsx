import React, { useState, useEffect } from "react";
import "./Banner.css";
import axois from "../../axois";
import { IMG_ORGIN } from "../../const";

function Banner({ url }) {
  //..
  const [data, setData] = useState({});
  //..
  useEffect(() => {
    // creating inner function in order to use async
    const innerFunction = async () => {
      // requesting data from api
      try {
        const {
          data: { results },
        } = await axois.get(url);

        const index = Math.floor(Math.random() * results.length);

        // set data to state
        setData(results[index]);
      } catch (error) {
        // error occur while fetching data
      }
    };
    innerFunction();
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className="Banner row m-0 p-0"
      style={{
        backgroundImage: `url(${
          data?.backdrop_path ? IMG_ORGIN + data.backdrop_path : ""
        })`,
      }}
    >
      <div className="Content col-12 col-md-6 m-0 p-5">
        <h1 className="MainTitle">{data.name ? data.name : data.title}</h1>
        <p>{data.overview ? data.overview : ""}</p>
        <div className="Buttons">
          <button>
            <span className="material-symbols-outlined">play_arrow</span> Play
          </button>
          <button>
            <span className="material-symbols-outlined">info</span> More info
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
