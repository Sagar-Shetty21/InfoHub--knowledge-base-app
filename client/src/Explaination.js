import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link, useParams} from "react-router-dom";

const Explaination = () => {
    const {id} = useParams();
    const [explaination, setExplaination] = useState({});

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_STRAPI_ENDPOINT}/api/topics/${id}?populate=*`)
            .then(({ data }) => setExplaination(data.data))
            .catch((error) => console.log(error));
    }, []);
    
    return (
        <>
            <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
                <div class="mb-5 max-w-2xl mx-auto">
                    <h1 href="#" class="text-gray-900 font-bold text-3xl mb-2">{explaination?.attributes?.title}</h1>
                    <p class="text-gray-700">{explaination?.attributes?.description}</p>
                </div>
            </div>
            
            <div
                className="bg-cover h-64 text-center overflow-hidden"
                style={{
                    height: '450px',
                    backgroundImage: `url(${explaination?.attributes?.image?.data?.attributes?.url})`
                }}
                title="Illustration Image"
            />

            <div class="max-w-2xl mx-auto">
                <div class="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                    <div class="mt-8">
                        <div dangerouslySetInnerHTML={{ __html: explaination?.attributes?.explaination }} />
                    </div>
                </div>
            </div>
            <Link to="/">
                <div className="top-0 right-0 m-6 bg-orange-300 hover:bg-orange-500 p-4 rounded-lg fixed transition-all ease-in-out">
                    <svg className="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                    </svg>
                </div>
            </Link>
        </>
    )
}

export default Explaination