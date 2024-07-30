import Card from './Card';
import { dotSpinner } from 'ldrs';
import Search from './Search';
import { useState } from 'react';
dotSpinner.register();

function Main({ data }) {
    const [openSearc, setOpenSearc] = useState(false)
    const [search, setSearch] = useState()
    console.log(search);
    
    return (
        <main>
            <div className="text-center py-12">
                <p className="sm:text-[3em] text-[2em] font-bold">Welcome to</p>
                <p className="sm:text-[3em] text-[2em] font-bold text-[#6366F1]">CountryApp Website</p>
                <p className="py-8">You can search all countries and find detailed information about them!</p>
                <div className={`${openSearc ? 'block' : 'hidden'} mb-6`}>
                    <Search search={search} setSearch={setSearch} />
                </div>
                <div className="flex gap-5 justify-center sm:flex-row flex-col items-center">
                    <button onClick={() => { setOpenSearc(!openSearc) }} className="bg-[#6366F1] text-white py-3 w-[180px] text-[1.1em] rounded-md cursor-pointer">Search!</button>
                    <button className="py-3 w-[180px] text-[1.1em] rounded-md border border-black cursor-pointer">Go to countries...</button>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 py-6">
                {
                    data ? data.map((item, i) => (
                        <Card key={i} item={item} />
                    )) : <l-dot-spinner size="40" speed="0.9" color="#6366F1"></l-dot-spinner>
                }
            </div>
        </main>
    );
}

export default Main;
