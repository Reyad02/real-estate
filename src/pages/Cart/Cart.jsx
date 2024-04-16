import { useLoaderData } from "react-router-dom";
import { getSavedEstate } from "../../Utility/localStorage";
import { useEffect, useState } from "react";
import EachCart from "../EachCart/EachCart";
import { Helmet } from "react-helmet-async";

const Cart = () => {
    const estates = useLoaderData();
    const [allSavedEstates, setAllSavedEstates] = useState([]);

    useEffect(() => {
        const savedEstates = getSavedEstate();
        const findEstates = estates.filter(estate => savedEstates.includes(estate.id));
        setAllSavedEstates(findEstates);
    }, [estates]);

    return (
        <div className='gap-10 flex flex-col'>
            <Helmet>
                <title>Cart</title>
            </Helmet>
            {
                allSavedEstates.map(estate => <EachCart key={estate.id} estate={estate}></EachCart>)
            }
        </div>
    );
};

export default Cart;