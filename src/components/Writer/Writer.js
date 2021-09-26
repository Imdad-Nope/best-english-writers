import React from 'react';
import './Writer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBookOpen } from '@fortawesome/free-solid-svg-icons'

const Writer = (props) => {
    console.log(props.writer)
    const { pictures, name, age, salary, profession, _id } = props.writer;
    const element = <FontAwesomeIcon icon={faBookOpen} />

    return (
        <div className="card-container">
            <div>
                <img src={pictures} alt="" />
            </div>
            <div>
                <h4><small>Name: {name}</small></h4>
                <h5>Profession: {profession}</h5>
                <p>Id: {_id}</p>
                <p>Age: {age}</p>
                <h6>Salary: {salary}</h6>
                <button onClick={() => props.handleSalary(props.writer)}>{element} Add salary</button>
            </div>
        </div>
    );
};

export default Writer;