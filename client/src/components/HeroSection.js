import React from 'react'

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20 gap-6">
            <div className="text-3xl text-white font-semibold">A Knowledge Sharing Platform</div>
            <div className="text-white">Bringing together all the information about common concepts in the world of web technology.</div>
            <div class="inline-flex bg-white rounded-md h-10 overflow-hidden items-center ">
                <input className="p-2 outline-none w-64 hover:w-96 border-none transition-all ease-in focus:w-96 text-lg " type="text" />
                <div className="bg-purple-500 h-full p-2 px-3 hover:bg-purple-600 active:bg-purple-700 transition-all ease-in">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default HeroSection