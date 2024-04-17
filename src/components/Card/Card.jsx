import { SlLocationPin } from "react-icons/sl";
import { MdBedroomParent } from "react-icons/md";
import { FaArrowsAlt } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Card = ({ eachCard }) => {
    const { image, id, estate_title, price, location, Status, description, bedrooms, bathrooms, Area } = eachCard;

    return (
        <div data-aos="fade-right" className="card card-compact  bg-base-100 shadow-xl">
            <figure className=""><img src={image} className="h-[300px] object-fill	w-full" alt="Single-family homes" /></figure>
            <div className="card-body flex-grow">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm">{Status}</p>
                        <h2 className="text-lg font-semibold">{estate_title}</h2>
                    </div>
                    <h2 className="text-lg font-bold text-blue-500">{price}</h2>
                </div>
                <div className='flex flex-wrap md:flex-row gap-6'>
                    {
                        (bedrooms && <span className='flex items-center gap-1 '><span className="bg-[#EDF1F9] rounded-full p-1"><MdBedroomParent className="text-[#A1ABC9] text-lg" /></span>
                            {bedrooms} Beds</span>)
                    }
                    {
                        (bathrooms && <span className='items-center flex gap-1'><span className="bg-[#EDF1F9] rounded-full p-1"><FaBath className="text-[#A1ABC9] text-lg" /></span>
                            {bathrooms} Baths</span>)
                    }
                    {
                        (Area && <span className='items-center flex gap-1 '><span className="bg-[#EDF1F9] rounded-full p-1"><FaArrowsAlt className="text-[#A1ABC9] text-lg" /></span>
                            {Area}</span>)
                    }
                </div>
                <div className="card-actions items-center justify-between mt-2">
                    <div className="flex items-center gap-1">
                        <SlLocationPin />
                        <p>{location}</p>
                    </div>
                    <Link to={`/estate/${id}`}>
                        <button className="btn bg-[#1266E3] text-white btn-sm">Property Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    eachCard: PropTypes.object
}

export default Card;