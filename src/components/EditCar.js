import React from 'react';
import CarForm from './CarForm';
import { useParams } from 'react-router-dom';

const EditCar = ({ history, cars, setCars }) => {
    const { id } = useParams();
    const carToEdit = cars.find((car) => car.id === id);

    const handleOnSubmit = (car) => {
        const filteredCars = cars.filter((car) => car.id !== id);
        setCars([car, ...filteredCars]);
        history.push('/');
    };

    return (
        <div>
            <CarForm car={carToEdit} handleOnSubmit={handleOnSubmit} />
        </div>
    );
};

export default EditCar;
