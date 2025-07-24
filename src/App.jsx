import Banner from "./pages/Banner/Banner";
import Header from "./pages/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
// import swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

function App() {
  return (
    <>
      <Header />
      <Banner />
    </>
  );
}

export default App;
