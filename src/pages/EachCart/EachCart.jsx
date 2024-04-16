import { MdOutlineBathroom, MdOutlineBedroomChild } from "react-icons/md";
import { RiParkingBoxLine } from "react-icons/ri";

const EachCart = ({ estate }) => {
    console.log(estate);
    const {
        estate_title,
        segment_name,
        description,
        price,
        Status,
        Area,
        location,
        facilities,
        image,
        ViewProperty,
        bedrooms,
        bathrooms,
        year_built,
        parking_spaces,
        open_house_dates,
        amenities,
        utilities_included,
        apartment_types,
        sleeps,
        available_dates
    } = estate;

    return (
        <div data-aos="fade-right" className="hero min-h-fit bg-base-200 mt-4 p-4 rounded-xl max-w-7xl mx-auto">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse p-0">
                <div className="text-left flex-1 space-y-1">
                    <h1 className="text-4xl font-bold mb-1">{estate_title}</h1>
                    {
                        segment_name && <div className="badge badge-primary mt-2">{segment_name}</div>
                    }
                    <div className="badge badge-primary mt-2 ml-2">{Status}</div>
                    <p className="">{description}</p>

                    <p>
                        Facilities: {facilities.map((facility, idx) => <span key={idx}>
                            {facility.charAt(0).toUpperCase() + facility.slice(1)}
                            {idx !== facilities.length - 1 ? ", " : ""}

                        </span>)}
                    </p>
                    <div className='flex flex-col items-start md:flex-row lg:gap-4'>
                        <p>
                            {
                                (bedrooms && <span className='flex items-center gap-1'><MdOutlineBedroomChild />
                                    Bedrooms: {bedrooms}</span>)
                            }
                        </p>
                        <p>
                            {
                                (bathrooms && <span className='items-center flex gap-1'><MdOutlineBathroom />
                                    Bathrooms: {bathrooms}</span>)
                            }
                        </p>
                        <p>
                            {
                                (parking_spaces && <span className='items-center flex gap-1 text-base'><RiParkingBoxLine />
                                    Parking spaces: {parking_spaces}</span>)
                            }
                        </p>
                    </div>
                    {
                        utilities_included && <p>Utilities: {utilities_included.map((utility, idx) => <span key={idx}>{`${utility}`}{idx !== facilities.length - 1 ? ", " : ""}</span>)}</p>
                        ||
                        amenities && <p>Amenities: {amenities.map((amenity, idx) => <span key={idx}>{`${amenity}`}{idx !== amenities.length - 1 ? ", " : ""}</span>)}</p>
                    }
                    {
                        apartment_types && <p>Apartment Types: {apartment_types.map((apartment, idx) => <span key={idx}>{`${apartment}`}{idx !== apartment_types.length - 1 ? ", " : ""}</span>)}</p>
                    }

                    <h2 className=''>Area: {Area}</h2>
                    {
                        year_built &&
                        <h2 className=''>Built Year: {year_built}</h2>
                    }


                    <h2 className='text-2xl font-bold'>{price}</h2>
                </div>
                <div className="card flex-1  shadow-2xl bg-base-100 ">
                    <img src={image} className='rounded-lg' alt="" />
                </div>
            </div>
        </div>
    );
};

export default EachCart;