import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Car = ({id, make, model, colour, year, handleRemoveCar}) => {
    const history = useHistory();

    return (
        <tr>
            <td>{make}</td>
            <td>{model} </td>
            <td>{colour} </td>
            <td>{year}</td>
            <td>
                <Button variant="secondary" onClick={() => history.push(`/view/${id}`)}>View</Button>{' '}
                <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>Edit</Button>{' '}
                <Button variant="danger" onClick={() => handleRemoveCar(id)}>
                    Remove
                </Button>
            </td>
        </tr>
    );
};

export default Car;
