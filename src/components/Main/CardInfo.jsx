import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ThmCntx } from '../../data/ThemeContex';
import { Cntx } from '../../data/DataContex';

function CardInfo() {
    const {data} = useContext(Cntx)
    const  {theme}  = useContext(ThmCntx)
    const { alpha3Code } = useParams()
    const elem = data.find(item => item.alpha3Code == alpha3Code)
    console.log(data);

    return (
        <div className={`py-6 m-auto min-h-[71vh] ${theme ? "bg-white" : "bg-slate-800 text-gray-300"}`}>
            <div className={`${theme ? "bg-white" : "bg-slate-900 md:border-slate-800 text-gray-100"} flex flex-col items-center justify-between m-auto mt-8 md:border md:border-gray-200 md:shadow md:text-start text-center md:flex-row md:w-[60vw] w-[85vw]`}>
                <div className="flex flex-col justify-between leading-normal m-6">
                    <h5 className={`${theme ? "text-gray-900" : "text-gray-200"} mb-5 font-bold tracking-tight italic text-[2em]`}>{elem.name}</h5>
                    <p className="mb-2 font-normal italic text-[1.2em]">Capital: {elem.capital}</p>
                    <p className="mb-2 font-normal">Subregion: {elem.subregion}</p>
                    <p className="mb-2 font-normal">Population: {elem.population}</p>
                    <p className="mb-2 font-normal">Area: {elem.area} km<sup>2</sup></p>
                    {/* <p className="mb-2 font-normal">Borders: <span className="font-semibold">{elem.borders.join(", ")}</span></p> */}
                </div>
                <img className="object-cover h-full md:w-[30vw] w-full" src={elem.flag} alt={elem.name} />
            </div>
            <div className="text-center py-10">
                <Link to='/'>← Back to homepage</Link>
            </div>
        </div>
    );
}

export default CardInfo;
