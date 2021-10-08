import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ViewCar = ({ history, cars, setCars }) => {
    const { id } = useParams();
    const carToView = cars.find((car) => car.id === id);

    const handleOnSubmit = (car) => {
        history.push('/');
    };
    const [sls, setSls] = useState({});

    useEffect(() => {
        async function fetchSls() {
            let response = await fetch('https://api.datamuse.com/words?sl='+carToView.make)
            response = await response.json()
            setSls(response)
        }
        fetchSls()
    }, [])

    return (
        <div className="main-form">
            <h1>You are currently viewing:</h1>
            <Form onSubmit={handleOnSubmit}>
                <Form.Group controlId="make">
                    <Form.Label>Make: {carToView.make}</Form.Label>
                </Form.Group>
                {!_.isEmpty(sls) ? (
                    <Form.Label>The make sounds like: {sls.map((sl, index) => (
                        <strong key={index}>{sl.word + ', '}</strong>
                    ))}</Form.Label>
                ) : (
                    <p className="message">There are no similar words for this make</p>
                )}
                <Form.Group controlId="model">
                    <Form.Label>Model: {carToView.model}</Form.Label>
                </Form.Group>
                <Form.Group controlId="colour">
                    <Form.Label>Colour: {carToView.colour}</Form.Label>
                </Form.Group>
                <Form.Group controlId="year">
                    <Form.Label>Year: {carToView.year}</Form.Label>
                </Form.Group>
                <Button variant="primary" type="submit" className="submit-btn">
                    Back to the Cars List
                </Button>
            </Form>
        </div>
    );
};

export default ViewCar;
