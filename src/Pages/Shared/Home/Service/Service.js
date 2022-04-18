import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const {name, price, description, img,} = service;

    return (
        <div className='g-3 col-sm-12 col-md-6 col-lg-4 my-5'>
            <Card className='shadow-lg' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <p>Price: {price}</p>
                    <Link to='/checkout'>
                    <Button className='w-75 d-block mx-auto' variant="primary">Details</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;