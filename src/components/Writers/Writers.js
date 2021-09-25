import React, { useEffect } from 'react';

const Writers = () => {
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h3>Writers meeting is going on!</h3>
        </div>
    );
};

export default Writers;