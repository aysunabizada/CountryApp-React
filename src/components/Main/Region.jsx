import { useContext } from "react";
import { ThmCntx } from '../../data/ThemeContex';
import { Cntx } from '../../data/DataContex';
import { useParams } from "react-router-dom";
import Card from "./Card";
import Error404 from "./Error/Error404";

function Region() {
    const { theme } = useContext(ThmCntx);
    const {data} = useContext(Cntx);
    const { region } = useParams()
    const filteredData = data.filter(item => item.region.toLowerCase() === region.toLowerCase())
    if (filteredData.length === 0) return <Error404 />
    return (
        <div className={`min-h-[70vh] ${theme ? 'bg-white' : 'bg-slate-800 text-gray-200'}`}>
            <h2 className="text-center py-8 font-bold text-[1.8em]">All countries in {region}</h2>
            <div className="flex flex-wrap justify-center gap-6 py-6">
                {
                    filteredData?.map((item, i) => (
                        <Card key={i} item={item} />
                    ))
                }
            </div>
        </div>
    );
}

export default Region;
