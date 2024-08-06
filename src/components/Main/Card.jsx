import { useContext } from "react"
import { Link } from "react-router-dom"
import { ThmCntx } from "../../data/ThemeContex"
import {  FaRegHeart } from "react-icons/fa"

function Card({ item, handleWishlist }) {
    const { flag, region, name, population, capital, area, alpha3Code } = item
    const { theme } = useContext(ThmCntx)
    
    return (
        <Link to={`/country/${alpha3Code}`} className={`${theme ? "dark:bg-white border-gray-200" : "bg-slate-900 text-gray-300 border-slate-800"} max-w-xs border rounded-md shadow cursor-pointer `}>
            <img className="rounded-t-md h-[30vh] object-cover w-full" src={flag} alt={name} />
            <div className="p-5">
                <div className="flex justify-between">
                    <p className="mb-2 text-[.8em] tracking-tight text-gray-400 uppercase">{region}</p>
                    <FaRegHeart onClick={(e) => handleWishlist(e, alpha3Code, item)}/>
                </div>
                <h5 className={`${theme ? "text-black" : "text-gray-300"} "mb-2 text-xl font-bold tracking-tight "`}>{name}, {capital}</h5>
                <div className="flex justify-between italic">
                    <p className="my-3 font-normal text-gray-700 text-[.85em]">Population: {population}</p>
                    <p className="my-3 font-normal text-gray-700 text-[.85em]">Area: {area} km<sup>2</sup></p>
                </div>
            </div>
        </Link>
    )
}

export default Card