import React from 'react';
import CarForm from './CarForm';

const AddCar = ({ history, cars, setCars }) => {
    const handleOnSubmit = (car) => {
        setCars([car, ...cars]);
        history.push('/');
    };

    return (
        <React.Fragment>
            <CarForm handleOnSubmit={handleOnSubmit} />
        </React.Fragment>
    );
};

export default AddCar;
