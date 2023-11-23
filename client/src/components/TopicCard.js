import React from 'react'

const TopicCard = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="py-6 px-16 bg-white rounded-md flex flex-col justify-center items-center shadow-lg">
                <div className="p-4 h-44 "><img className="h-full" src="/assets/icons/i-logo.png"/></div>
                <div className="text-2xl font-semibold uppercase ">Heading</div>
                <div className="text-gray-500">this is a short description</div>
                <div>button</div>
            </div>
        </div>
    )
}

export default TopicCard