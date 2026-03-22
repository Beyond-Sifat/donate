import React from 'react';
import animation from "../assets/animation/Donate Button.json"
import bannerImg from "../assets/image/banner.jpg"

import Lottie from 'lottie-react';


const Banner = () => {
    return (
        <div
            className="h-[500px] bg-cover bg-center flex items-end justify-evenly text-white"
            style={{
                backgroundImage: `url(${bannerImg})`,
            }}
        >
            <div className="bg-black/50 p-6 rounded">
                <h1 className="text-3xl font-bold">Make a Difference</h1>
                <p className="mt-2">Donate and help people in need</p>
                <Lottie animationData={animation} />;
            </div>
        </div>
    );
};

export default Banner;