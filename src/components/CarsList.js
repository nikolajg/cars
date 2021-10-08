import React from 'react';
import _ from 'lodash';
import { Table } from 'react-bootstrap';
import Car from './Car';

const CarsList = ({ cars, setCars }) => {

    const handleRemoveCar = (id) => {
        setCars(cars.filter((car) => car.id !== id));
    };

    return (
        <React.Fragment>
            <div className="cars-list">
                {!_.isEmpty(cars) ? (
                        <Table responsive="sm">
                            <thead>
                            <tr>
                                <th>Make</th>
                                <th>Model</th>
                                <th>Colour</th>
                                <th>Year</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {cars.map((car) => (
                                <Car key={car.id} {...car} handleRemoveCar={handleRemoveCar} />
                            ))}
                            </tbody>
                        </Table>

                ) : (
                    <p className="message">No cars available. Please add some.</p>
                )}
            </div>
        </React.Fragment>
    );
};

export default CarsList;
