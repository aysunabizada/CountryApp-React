import { Link } from "react-router-dom"

function CardInfo() {
    return (
        <div className="py-6 m-auto min-h-[70vh]">
            <div className="flex flex-col items-center justify-between m-auto mt-8 bg-white md:border md:border-gray-200 rounded-md md:shadow md:text-start text-center md:flex-row md:w-[60vw] w-[85vw]">
                <div className="flex flex-col justify-between leading-normal m-6">
                    <h5 className="mb-5 font-bold tracking-tight text-gray-900 italic text-[2em]">Azerbaijan</h5>
                    <p className="mb-2 font-normal text-gray-700 italic text-[1.2em]">Capital: Baku</p>
                    <p className="mb-2 font-normal text-gray-700">Subregion: Asia</p>
                    <p className="mb-2 font-normal text-gray-700">Population: 112519</p>
                    <p className="mb-2 font-normal text-gray-700">Area: 1580 km<sup>2</sup></p>
                    <p className="mb-2 font-normal text-gray-700">Borders: <span classNameName="font-semibold">TR, RU, ENG</span> </p>
                </div>
                <img className="object-cover h-full sm:max-w-md " src="https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg" alt="" />
            </div>
            <div className="text-center py-10">
                <Link to='/'>← Back to the countries </Link>
            </div>
        </div>
    )
}

export default CardInfo