import React, { useContext, useState } from 'react';
import Card from './Card';
import { dotSpinner } from 'ldrs';
import Search from './Search';
import RandomCard from './RandomCard';
import { Cntx } from '../../data/DataContex';
import { ThmCntx } from '../../data/ThemeContex';
dotSpinner.register();

function Main() {
    const data = useContext(Cntx);
    const {theme} = useContext(ThmCntx);
    const [openSearch, setOpenSearch] = useState(false);
    const [search, setSearch] = useState('');
    const [count, setCount] = useState(12);
    return (
        <main className={`${theme ? "dark:bg-white": "bg-slate-800 text-gray-300"}`}>
            <div className="text-center py-12">
                <p className="sm:text-[3em] text-[2em] font-bold">Welcome to</p>
                <p className="sm:text-[3em] text-[2em] font-bold text-[#6366F1]">CountryApp Website</p>
                <p className="py-8">You can search all countries and find detailed information about them!</p>
                <div className={`${openSearch ? 'block' : 'hidden'} mb-6`}>
                    <Search search={search} setSearch={setSearch} />
                </div>
                <div className="flex gap-5 justify-center sm:flex-row flex-col items-center">
                    <button onClick={() => setOpenSearch(!openSearch)} className="bg-[#6366F1] text-white py-3 w-[180px] text-[1.1em] rounded-md cursor-pointer">Search!</button>
                    <a href="#go"><button className="py-3 w-[180px] text-[1.1em] rounded-md border border-black cursor-pointer">Go to countries...</button></a>
                </div>
            </div>
            <RandomCard data={data} /> <br />
            <div className="flex flex-wrap justify-center gap-6 py-6" id='go'>
                {
                    data ? data
                        .filter(item => item.name.toLowerCase().startsWith(search.toLowerCase()))
                        .slice(0, count)
                        .map((item, i) => (
                            <Card key={i} item={item}/>
                        )) : <l-dot-spinner size="40" speed="0.9" color="#6366F1"></l-dot-spinner>
                }
            </div>
            <div className='py-8 text-center'>
                <button
                    onClick={() => setCount(count + 12)}
                    className='py-3 w-[130px] text-[1.1em] rounded-md border border-black cursor-pointer'>
                    Show More
                </button>
            </div>
        </main>
    );
}

export default Main;
