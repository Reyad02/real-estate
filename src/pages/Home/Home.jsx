import { Helmet } from "react-helmet-async";
import Cards from "../../components/Cards/Cards";
import SwiperSlider from "../../components/Swiper/SwiperSlider";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <SwiperSlider></SwiperSlider>
            <div className="bg-[#F5FAFF]">
                <div className="max-w-7xl mx-auto">
                    <div className=" my-8 text-center">
                        <p className=" text-4xl font-bold text-[#2D3954]">Explore Good Places</p>
                        <p className="lg:max-w-4xl mx-auto text-[#2D3954]">Below are some featured real estate property cards showcasing a variety of housing options, from single-family homes to vacation rentals. Each card includes relevant details such as images, property titles, prices, and facilities.
                        </p>
                    </div>
                    <Cards></Cards>
                </div>
            </div>
        </div>
    );
};

export default Home;