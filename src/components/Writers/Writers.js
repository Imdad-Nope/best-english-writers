import React, { useEffect, useState } from 'react';
import Writer from '../Writer/Writer';
import WriterData from '../Writerdata/WriterData';
import './Writers.css'

const Writers = () => {
    const [writers, setWriters] = useState([]);
    const [writerData, setWriterData] = useState([])
    useEffect(() => {
        fetch('./data.json')
            .then(rest => rest.json())
            .then(data => setWriters(data))
    }, [])

    const handleSalary = (writer) => {
        const newData = [...writerData, writer];
        setWriterData(newData);
    }
    return (
        <div className="writers-container">

            <div className="writers-data">

                {

                    writers.map(writer => <Writer
                        key={writer._id}
                        writer={writer}
                        handleSalary={handleSalary}

                    ></Writer>)

                }
            </div>
            <div className="data-total">

                <WriterData writerData={writerData}></WriterData>
            </div>

        </div >
    );
};

export default Writers;