import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{fontsize:'200px'}}>
            <Spinner  animation="border" variant="primary" />
        </div>
    );
};

export default Loading;