import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const TopicCard = ({data}) => {

    const [randomColor, setRandomColor] = useState('');

    useEffect(() => {
        const getRandomColor = () => {
            const colors = ['border-purple-900', 'border-slate-900', 'border-violet-900', 'border-rose-900', 'border-neutral-900', 'border-stone-900', 'border-red-900', 'border-orange-900', 'border-amber-900', 'border-yellow-900', 'border-lime-900', 'border-green-900', 'border-emerald-900', 'border-cyan-900', 'border-teal-900', 'border-sky-900'];
            const randomColorClass = colors[Math.floor(Math.random() * colors.length)];
            setRandomColor(randomColorClass);
        };
        getRandomColor();
    },[])
    
    return (
        <Link to={`/explanation/${data.id}`}>
            <div className="flex justify-center items-center w-40 md:w-60 overflow-hidden">
                <div className={`w-full py-6 px-16 bg-white rounded-md flex flex-col justify-center items-center shadow-2xl border-b-4 cursor-pointer ${randomColor}`}>
                    <div className="p-4 h-44 w-44"><img className="w-full h-full" src={`http://localhost:1337${data.attributes.image.data.attributes.url}`}/></div>
                    <div className="text-lg md:text-2xl font-semibold uppercase text-center">{data?.attributes?.title}</div>
                    <div className="text-gray-500 hidden md:block">{data?.attributes?.description}</div>
                </div>
            </div>
        </Link>

    )
}

export default TopicCard