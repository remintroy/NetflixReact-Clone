import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "axios";

function Banner({ url }) {
  //..
  useState(async () => {
    // requesting data from api
    console.log(process.env);
    // const response = await axios.get(url, {});
  }, []);

  return (
    <div className="Banner row m-0 p-0">
      <div className="Content col-12 col-md-6 m-0 p-5">
        <h1 className="MainTitle">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque nobis
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          dicta nostrum tempora iure incidunt! Culpa possimus esse, ea eveniet
          deserunt officiis perspiciatis asperiores corrupti accusantium
        </p>
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
