import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThmCntx } from '../../data/ThemeContex';

function RandomCard({ data }) {
    const {theme} = useContext(ThmCntx)
    function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    if (!data || !Array.isArray(data) || data.length === 0) return ''
    const randomized = data[rand(0, 250)]

    return (
        <Link to={`/country/${randomized.alpha3Code}`} className={`${theme ? "dark:bg-white border-gray-200": "bg-slate-900 text-gray-300 border-slate-800"} flex flex-col items-center gap-5 m-auto mt-8  md:border rounded-md md:shadow md:flex-row md:w-[60vw] w-[85vw]`}>
            <img className="object-cover h-[40vh] md:w-[30vw] w-[100%]" src={randomized.flag} alt={randomized.name} />
            <div className="flex flex-col justify-between leading-normal m-6">
                <h5 className={`${theme ? "text-gray-900": "text-gray-300"} mb-5 font-bold tracking-tight underline text-[2em]`}>{randomized.name}</h5>
                <p className="mb-2 font-normal text-gray-700">Region: {randomized.region}</p>
                <p className="mb-2 font-normal text-gray-700">Capital: {randomized.capital}</p>
                <p className="mb-2 font-normal text-gray-700">Population: {randomized.population}</p>
                <p className="mb-2 font-normal text-gray-700">Area: {randomized.area} km<sup>2</sup></p>
            </div>
        </Link>
    );
}

export default RandomCard;
