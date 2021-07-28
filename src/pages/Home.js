import Banner from "../components/Banner";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="luxurious rooms"
          subTitle="deluxe rooms starting at 299$"
        >
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms/>
    </>
  );
};

export default Home;
