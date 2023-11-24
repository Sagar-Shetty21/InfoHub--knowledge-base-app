import React from 'react'

const Footer = () => {
    return (
        <div className="h-20 p-6 text-center mt-16 flex flex-row items-end justify-center relative">
            <div className="footer-triangle-bg bg-cyan-950 absolute -z-10" />
            <img className="h-full" src="/assets/icons/i-logo.png" alt="i-logo" />
            <div className="text-2xl font-bold text-blue-500">nfo<span className="text-orange-500">Hub</span></div>
        </div>
    )
}

export default Footer