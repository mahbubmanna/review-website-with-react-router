import React from 'react';

const Service = (props) => {
    const { name, img, duration, price, season, info } = props.service;
    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" src={img} alt="Mountain" />
            <div class="px-6 py-4">
                <div class="font-bold text-2xl mb-2">{name}</div>
                <div class="italic text-gray-700 text-lg mb-2">{info}</div>
                <p class="text-gray-700 text-base">Season: {season} </p>
                <p class="text-gray-700 text-base">Session Duration: {duration}</p>
            </div>
            <div class="px-6 pt-4 pb-2 bottom-0 ">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Fee: {price} </span>
            </div>
        </div>
    );
};

export default Service;