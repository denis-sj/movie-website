import "./styles.css";
// image
import titleImg from "../../assets/ape-title.png";

// components
import Button from "../Button/Button";

// icons
import { CgAdd } from "react-icons/cg";
import { CiBookmark } from "react-icons/ci";

function MovieContent() {
  return (
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
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus fuga
        aut dolor ratione beatae. Vitae quasi consequuntur aperiam expedita
        quidem pariatur, velit saepe neque numquam eveniet labore officia?
        Corporis sequi repellendus incidunt placeat totam iure accusantium modi
        iste sed provident!
      </p>
      <div className="button">
        <Button
          name="book"
          icon={<CiBookmark />}
          color="#ff3700"
          bgcolor="#ffffff"
        />
        <Button name="my list" icon={<CgAdd />} />
      </div>
    </div>
  );
}

export default MovieContent;
