import Cards from "../../components/Cards/Cards";
import SwiperSlider from "../../components/Swiper/SwiperSlider";

const Home = () => {
    return (
        <div>
            <SwiperSlider></SwiperSlider>
            <div className="max-w-7xl mx-auto">
                <div className=" my-8 text-center">
                    <p className=" text-4xl font-bold">Explore Good Places</p>
                    <p className="lg:max-w-4xl mx-auto">Below are some featured real estate property cards showcasing a variety of housing options, from single-family homes to vacation rentals. Each card includes relevant details such as images, property titles, prices, and facilities.
                    </p>
                </div>
                <Cards></Cards>
            </div>
        </div>
    );
};

export default Home;