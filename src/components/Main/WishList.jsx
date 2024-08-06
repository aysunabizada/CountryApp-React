import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThmCntx } from "../../data/ThemeContex";
import { Cntx } from "../../data/DataContex";
import { LuHeartOff } from "react-icons/lu";

function WishList() {
    const { theme } = useContext(ThmCntx);
    const { wishList, setWishList } = useContext(Cntx);
    function handleDelete(alpha3Code) {
        setWishList(wishList.filter(item => item.alpha3Code !== alpha3Code))
    }

    return (
        <section className={`${theme ? 'bg-slate-50' : 'bg-slate-800'} min-h-[70.1vh]`}>
            <h1 className='text-center text-[2em] py-5'>Your favorite countries:</h1>
            <div className='flex flex-wrap justify-center gap-6 py-6'>
                {
                    wishList.map(item => (
                        <Link key={item.alpha3Code} to={`/country/${item.alpha3Code}`} className={`${theme ? "dark:bg-white border-gray-200" : "bg-slate-900 text-gray-300 border-slate-800"} max-w-xs border rounded-md shadow cursor-pointer `}>
                            <img className="rounded-t-md h-[30vh] object-cover w-full" src={item.flag} alt={item.name} />
                            <div className="p-5">
                                <div className="flex justify-between">
                                    <p className="mb-2 text-[.8em] tracking-tight text-gray-400 uppercase">{item.region}</p>
                                    <LuHeartOff onClick={(e) => {
                                        e.preventDefault()
                                        handleDelete(item.alpha3Code)
                                    }} />
                                </div>
                                <h5 className={`${theme ? "text-black" : "text-gray-300"} mb-2 text-xl font-bold tracking-tight`}>{item.name}, {item.capital}</h5>
                                <div className="flex justify-between italic">
                                    <p className="my-3 font-normal text-gray-700 text-[.85em]">Population: {item.population}</p>
                                    <p className="my-3 font-normal text-gray-700 text-[.85em]">Area: {item.area} km<sup>2</sup></p>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </section>
    );
}

export default WishList;
