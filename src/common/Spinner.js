import React from 'react';
import { Row } from 'reactstrap';
const Spinner = () => {
    return (
        <Row className='spinner-holder'>
            <div className='custom-spinner'>
                <div className='spinner-border' />
            </div>
        </Row>
    );
};

export default Spinner;
