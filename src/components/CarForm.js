import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const CarForm = (props) => {
    const [car, setCar] = useState({
        make: props.car ? props.car.make : '',
        model: props.car ? props.car.model : '',
        colour: props.car ? props.car.colour : '',
        year: props.car ? props.car.year : '',
    });

    const [errorMsg, setErrorMsg] = useState('');
    const { make, model, colour, year } = car;

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const values = [make, model, colour, year];
        let errorMsg = '';

        const allFieldsFilled = values.every((field) => {
            const value = `${field}`.trim();
            return value !== '' && value !== '0';
        });

        if (allFieldsFilled) {
            const car = {
                id: uuidv4(),
                make,
                model,
                colour,
                year
            };
            if (year.length !== 4) {
                errorMsg = 'Please make sure year contains 4 digits only';
            } else {
                props.handleOnSubmit(car);
            }
        } else {
            errorMsg = 'Please fill out all the fields.';
        }
        setErrorMsg(errorMsg);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'year':
                if (value === '' || parseInt(value) === +value) {
                    setCar((prevState) => ({
                        ...prevState,
                        [name]: value
                    }));
                }
                break;
            default:
                setCar((prevState) => ({
                    ...prevState,
                    [name]: value
                }));
        }
    };

    return (
        <div className="main-form">
            {errorMsg && <p className="errorMsg">{errorMsg}</p>}
            <Form onSubmit={handleOnSubmit}>
                <Form.Group controlId="make">
                    <Form.Label>Make</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="make"
                        value={make}
                        placeholder="Enter make"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="model">
                    <Form.Label>Model</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="model"
                        value={model}
                        placeholder="Enter model"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="colour">
                    <Form.Label>Colour</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="colour"
                        value={colour}
                        placeholder="Enter colour"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="year">
                    <Form.Label>Year</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="number"
                        name="year"
                        value={year}
                        placeholder="Enter year"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="submit-btn">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default CarForm;
