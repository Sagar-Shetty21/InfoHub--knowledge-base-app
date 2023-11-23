import React, {useState, useEffect} from 'react'

const TopicCard = () => {

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
        <div className="flex justify-center items-center">
            <div className={`py-6 px-16 bg-white rounded-md flex flex-col justify-center items-center shadow-2xl border-b-4 cursor-pointer ${randomColor}`}>
                <div className="p-4 h-44 "><img className="h-full" src="/assets/icons/i-logo.png"/></div>
                <div className="text-2xl font-semibold uppercase ">Heading</div>
                <div className="text-gray-500">this is a short description</div>
                {/* <div className=" bg-blue-600 rounded-xl text-xl w-full text-center py-2 text-white cursor-pointer">Read</div> */}
            </div>
        </div>
    )
}

export default TopicCard