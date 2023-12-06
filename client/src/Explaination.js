import React from 'react'
import {useParams} from "react-router-dom";

const Explaination = () => {
    const {id} = useParams();
    
    return (
        <div>here  it is:   ${id}</div>
    )
}

export default Explaination