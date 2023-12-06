import React from 'react'


const TopBar = () => {
    return (
        <div className="fixed inline-flex items-center justify-between w-full">
            <div className="max-w-screen inline-flex h-24 p-8 items-end">
                <img className="h-full" src="/assets/icons/i-logo.png" alt="i-logo" />
                <div className="text-2xl font-bold text-blue-500">nfo<span className="text-orange-500">Hub</span></div>
            </div>
            <div className="m-3 p-2 rounded bg-orange-500 cursor-pointer font-semibold">
                Create Topic
            </div>
        </div>
    )
}

export default TopBar