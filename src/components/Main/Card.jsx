import { Link } from "react-router-dom"

function Card({ item }) {
    const { flag, region, name, population, capital, area } = item
    return (
        <Link to='cardinfo' className="max-w-xs bg-white border border-gray-200 rounded-md shadow cursor-pointer">
            <img className="rounded-t-md h-[30vh] object-cover w-full" src={flag} alt={name} />
            <div className="p-5">
                <p className="mb-2 text-[.8em] tracking-tight text-gray-400 uppercase">{region}</p>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{name}, {capital}</h5>
                <div className="flex justify-between italic">
                    <p className="my-3 font-normal text-gray-700 text-[.85em]">Population: {population}</p>
                    <p className="my-3 font-normal text-gray-700 text-[.85em]">Area: {area} km<sup>2</sup></p>
                </div>
            </div>
        </Link>
    )
}

export default Card