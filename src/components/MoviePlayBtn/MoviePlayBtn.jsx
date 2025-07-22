import React from "react";
import { CiPlay1 } from "react-icons/ci";
import './styles.css'

function MoviePlayBtn() {
  return (
    <div className="trailer d-flex align-items-center justify-content-center active">
      <a href="#" className="playBtn">
        <CiPlay1 />
      </a>
      <p>Watch Trailer</p>
    </div>
  );
}

export default MoviePlayBtn;
