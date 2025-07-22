import React, { useEffect, useState } from "react";
import "./banner.css";
import bg from "../../assets/bg-peter-pan-and-wendy.jpeg";
import titleImg from "../../assets/peter-pan-and-wendy-title.png"


function Banner() {
  const [movie, setMovie] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:5173/data/movieData.json")
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="banner">
      <div className="movie">
        <img src={bg} alt="Background Image" className="bgImg active"></img>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="content active">
                <img src={titleImg} alt="Movie Title" className="movie-title"></img>
                <h4>
                  <span>Year</span>
                  <span>
                    <i>age</i>
                  </span>
                  <span>length</span>
                  <span>category</span>
                </h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Delectus fuga aut dolor ratione beatae. Vitae quasi
                  consequuntur aperiam expedita quidem pariatur, velit saepe
                  neque numquam eveniet labore officia? Corporis sequi
                  repellendus incidunt placeat totam iure accusantium modi iste
                  sed provident!
                </p>
                <div className="button">Button</div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="date active">
                <h2>On 15th August</h2>
              </div>
              <div className="trailer d-flex align-items-center justify-content-center active">
                <a href="#" className="playBtn">
                  <i className="bi bi-play"></i>
                </a>
                <p>Watch Trailer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
