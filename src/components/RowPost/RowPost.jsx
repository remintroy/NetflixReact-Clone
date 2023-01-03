import axios from "../../axois";
import React, { useState, useEffect } from "react";
import "./RowPost.css";
import { IMG_ORGIN } from "../../const";

function RowPost({ url, title, isSmall }) {
  //...
  const [data, setData] = useState([]);

  useEffect(() => {
    // creating inner function in order to use async
    const innerFunction = async () => {
      // requesting data from api
      try {
        const {
          data: { results },
        } = await axios.get(url);

        // // set data to state
        setData(results);
      } catch (error) {
        // error occur while fetching data
      }
    };
    innerFunction();
    // eslint-disable-next-line
  }, []);

  if (data.length > 0)
    return (
      <div className="RowPost">
        <h5 className="mb-3">{title}</h5>
        <div className="ImgCont">
          {data.map((movie, index) => {
            return (
              <img
                src={
                  isSmall
                    ? movie.backdrop_path
                      ? IMG_ORGIN + movie.backdrop_path
                      : ""
                    : movie.poster_path
                    ? IMG_ORGIN + movie.poster_path
                    : ""
                }
                alt=""
                key={index}
              />
            );
          })}
        </div>
      </div>
    );
}

export default RowPost;
