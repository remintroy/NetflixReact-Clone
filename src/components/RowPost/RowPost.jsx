import axios from "../../axois";
import { useState, useEffect } from "react";
import "./RowPost.css";
import { IMG_ORGIN_THUMP, API_KEY } from "../../const";

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

  const handleMovieID = async (id, e) => {
    //
    try {
      e.target.innerHTML = 'Loading...'
      //.
      const {
        data: { results },
      } = await axios.get(
        `/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
      );
      if (results.length !== 0) {
        e.target.innerHTML = `<iframe frameborder="0" allowfullscreen="1" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="100%" height="100%" src="https://www.youtube.com/embed/${results[0].key}?autoplay=1&amp;enablejsapi=1&amp;origin=http%3A%2F%2Flocalhost%3A3000&amp;widgetid=41" id="widget42"></iframe>`;
      }else{
        e.target.innerHTML = 'No trailer found';
      }
      // console.log(results);
    } catch (error) {
      e.target.innerHTML = "No trailer available";
      // console.warn(error);
      // error retreving youtube video id
    }
  };

  // checks if movie in current genre if so return elements
  if (data.length > 0)
    return (
      <div className="RowPost">
        <h5 className="mb-3">{title}</h5>
        <div className="ImgCont">
          {data.map((movie, index) => {
            // console.log(movie.id);
            return (
              <div className="ImgCover">
                <img
                  src={
                    isSmall
                      ? movie.backdrop_path
                        ? IMG_ORGIN_THUMP + movie.backdrop_path
                        : ""
                      : movie.poster_path
                      ? IMG_ORGIN_THUMP + movie.poster_path
                      : ""
                  }
                  alt=""
                  key={index}
                />
                <div
                  className="ShowTrailer"
                  onMouseOver={async (e) => {
                    console.log(e)
                    handleMovieID(movie.id, e);
                  }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default RowPost;
