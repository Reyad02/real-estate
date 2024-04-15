import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";

const Card = ({ eachCard }) => {
    const { image, id, estate_title, segment_name, price, location, Status, Area, description } = eachCard;

    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure className=""><img src={image} className="h-[300px] object-fill	w-full" alt="Single-family homes" /></figure>
            <div className="card-body flex-grow">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm badge badge-primary">{Status}</p>
                        <h2 className="text-base font-semibold">{estate_title}</h2>
                    </div>
                    <h2 className="text-lg font-bold text-blue-500">{price}</h2>
                </div>
                <p className="border-b-2 pb-2">{description.length > 100 ? description.slice(0, 100)+"...":description }</p>

                <div className="card-actions items-center justify-between mt-2">
                    <div className="flex items-center gap-1">
                        <SlLocationPin />
                        <p>{location}</p>
                    </div>
                    <Link to={`/estate/${id}`}>
                        <button className="btn btn-primary btn-sm">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;