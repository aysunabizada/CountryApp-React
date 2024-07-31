import React from 'react';
import { Link } from 'react-router-dom';

function RandomCard({ data }) {
    function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    if (!data || !Array.isArray(data) || data.length === 0) return ''
    const randomized = data[rand(0, 250)]

    return (
        <Link to='/cardInfo' className="flex flex-col items-center gap-5 m-auto mt-8 bg-white md:border md:border-gray-200 rounded-md md:shadow md:flex-row md:w-[60vw] w-[85vw]">
            <img className="object-cover h-full sm:max-w-md" src={randomized.flag} alt={randomized.name} />
            <div className="flex flex-col justify-between leading-normal m-6">
                <h5 className="mb-5 font-bold tracking-tight text-gray-900 underline text-[2em]">{randomized.name}</h5>
                <p className="mb-2 font-normal text-gray-700">Region: {randomized.region}</p>
                <p className="mb-2 font-normal text-gray-700">Capital: {randomized.capital}</p>
                <p className="mb-2 font-normal text-gray-700">Population: {randomized.population}</p>
                <p className="mb-2 font-normal text-gray-700">Area: {randomized.area} km<sup>2</sup></p>
            </div>
        </Link>
    );
}

export default RandomCard;
