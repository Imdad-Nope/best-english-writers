import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshakeSlash } from '@fortawesome/free-solid-svg-icons'

const WriterData = (props) => {
    const { writerData } = props;

    const handShake = <FontAwesomeIcon icon={faHandshakeSlash} />
    let total = 0;
    for (const data of writerData) {
        total = total + data.salary;
    }
    return (
        <div>
            <h3>Total summary:</h3>
            <hr />
            <br />
            <h3> Total data:{props.writerData.length} </h3>
            <h4>{writerData.name}</h4>
            <h4> {handShake} Total salary: {total}</h4>

        </div>
    );
};

export default WriterData;