import NavListItem from "../../components/navListItem/navListItem";
import Search from "../../components/search/Search";
import navListData from "../../data/navListData";
import "./header.css";

function Header() {
  return (
    <header>
      <a href="/" className="logo">
        Cinema
      </a>
      <ul className="nav">
        {navListData.map((nav) => {
          return <NavListItem key={nav._id} nav={nav} />;
        })}
      </ul>
      <Search />
    </header>
  );
}

export default Header;
