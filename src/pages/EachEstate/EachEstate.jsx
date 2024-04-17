import { useParams, useLoaderData } from 'react-router-dom';
import { MdOutlineBedroomChild, MdOutlineBathroom } from "react-icons/md";
import { RiParkingBoxLine } from "react-icons/ri";
import { setEstateLocalStorage } from '../../Utility/localStorage';
import { SlLocationPin } from "react-icons/sl";
import { MdBedroomParent } from "react-icons/md";
import { FaArrowsAlt } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import "./EachEstate.css";




const EachEstate = () => {
    let { id } = useParams();
    const parseId = parseInt(id);
    let Estates = useLoaderData();
    const currentState = Estates.find(eachEstate => eachEstate.id === parseId);
    const {
        estate_title,
        segment_name,
        description,
        price,
        Status,
        Area,
        facilities,
        image,
        bedrooms,
        bathrooms,
        year_built,
        parking_spaces,
        amenities,
        utilities_included,
        apartment_types,
        location,
    } = currentState;

    const setInLocalStorage = () => {
        setEstateLocalStorage(parseId);
        console.log("set IN LOCAL STORAGE DONE");
    }

    return (
        <>
            <div className="hero min-h-fit  mt-4 p-4 rounded-xl ">
                <div className="hero-content flex-col-reverse md:flex-row-reverse  p-0">
                    <div className="text-left flex-1   space-y-1">
                        <div className='bg-white p-4 rounded-xl space-y-2 mb-4'>
                            {
                                segment_name && <div className="badge bg-red-100 text-red-500 text-left">{segment_name}</div>
                            }
                            <div className="badge  bg-red-100 text-red-500 mt-2 ml-2 text-left">{Status}</div>
                            <h1 className="text-2xl font-bold mb-1">{estate_title}</h1>
                            <div className="flex items-center gap-1">
                                <SlLocationPin />
                                <p>{location}</p>
                            </div>
                            <h2 className='text-2xl font-bold text-blue-500'>{price}</h2>
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
                        </div>
                        <div className='bg-white p-4 rounded-xl space-y-2 mb-4'>
                            <p className='font-semibold'>Details and Features</p>
                            <div className="overflow-x-auto">
                                <table className="table ">
                                    <tbody>
                                        {
                                            (bedrooms &&

                                                < tr >
                                                    <th className=''>Bedrooms</th>
                                                    <td className=''>{bedrooms}</td>
                                                </tr>
                                            )
                                        }
                                        {
                                            (bathrooms &&
                                                <tr>
                                                    <th>Bathrooms</th>
                                                    <td>{bathrooms}</td>
                                                </tr>)
                                        }
                                        {
                                            (parking_spaces &&
                                                <tr>
                                                    <th>Parking spaces</th>
                                                    <td>{parking_spaces}</td>
                                                </tr>)
                                        }
                                        <tr>
                                            <th>Area</th>
                                            <td>{Area}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>


                    </div>
                    <div className="card   shadow-2xl flex-1    ">
                        <img src={image} className='rounded-lg   ' alt="" />
                    </div>
                </div>
            </div >
            <div className='bg-white p-4 rounded-xl space-y-2 mb-4 mt-4 mx-auto max-w-7xl'>

                <p className='font-bold'>Description:</p>
                <p className="">{description}</p>
                <p>
                    <span className='font-bold'>Facilities:</span> {facilities.map((facility, idx) => <span key={idx}>
                        {facility.charAt(0).toUpperCase() + facility.slice(1)}
                        {idx !== facilities.length - 1 ? ", " : ""}

                    </span>)}
                </p>

                {
                    utilities_included && <p><span className='font-bold'>Utilities:</span> {utilities_included.map((utility, idx) => <span key={idx}>{`${utility}`}{idx !== facilities.length - 1 ? ", " : ""}</span>)}</p>
                    ||
                    amenities && <p><span className='font-bold'>Amenities:</span> {amenities.map((amenity, idx) => <span key={idx}>{`${amenity}`}{idx !== amenities.length - 1 ? ", " : ""}</span>)}</p>
                }
                {
                    apartment_types && <p><span className='font-bold'>Apartment Types:</span> {apartment_types.map((apartment, idx) => <span key={idx}>{`${apartment}`}{idx !== apartment_types.length - 1 ? ", " : ""}</span>)}</p>
                }

                {
                    year_built &&
                    <h2 className=''><span className='font-bold'>Built Year:</span> {year_built}</h2>
                }


                <button onClick={setInLocalStorage} className='btn text-white bg-[#3B82F6]'>Add to cart</button>

            </div>
        </>
    );
};

export default EachEstate;