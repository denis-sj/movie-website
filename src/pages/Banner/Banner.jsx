import React, { useEffect, useState } from "react";
import "./banner.css";
import bg from "../../assets/bg-ape.jpeg";

// components
import MovieContent from "../../components/MovieContent/MovieContent";
import MovieData from "../../components/MovieData/MovieData";
import MoviePlayBtn from "../../components/MoviePlayBtn/MoviePlayBtn";


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
              <MovieContent />
            </div>
            <div className="col-lg-6 col-md-12">
              <MovieData />
              <MoviePlayBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
