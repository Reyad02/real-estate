import swal from 'sweetalert';

const getSavedEstate = () => {
    const savedEstateID = localStorage.getItem('Estate');
    if (savedEstateID) {
        return JSON.parse(savedEstateID);
    } else {
        return [];
    }
}

const setEstateLocalStorage = id => {
    const savedID = getSavedEstate();
    const exist = savedID.find(estateID => estateID === id);
    if (!exist) {
        savedID.push(id);
        localStorage.setItem('Estate', JSON.stringify(savedID));
    }
    else {
        swal({
            title: "It will not add here",
            text: "Already in the cart",
            icon: "warning",
            dangerMode: true,
        });
    }
}

export { getSavedEstate, setEstateLocalStorage }