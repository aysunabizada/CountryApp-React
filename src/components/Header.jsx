import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { ThmCntx } from "../data/ThemeContex"

function Header() {
    const [status, setStatus] = useState(false)
    const { theme, setTheme } = useContext(ThmCntx)
    return (
        <header className={`p-4 ${theme ? "dark:bg-gray-100" : "bg-slate-900 text-gray-300"}`}>
            <nav className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8 md:items-stretch items-center">
                <ul className="items-stretch hidden space-x-3 md:flex">
                    <li className="flex">
                        <Link to='region/Europe' rel="noopener noreferrer" href="#" className={`flex items-center px-4 -mb-1 ${theme ? "border-b-2" : "border-0"}  dark:border-`}>Europe</Link>
                    </li>
                    <li className="flex">
                        <Link to='region/Asia' rel="noopener noreferrer" href="#" className={`flex items-center px-4 -mb-1 ${theme ? "border-b-2" : "border-0"}  dark:border-`}>Asia</Link>
                    </li>
                    <li className="flex">
                        <Link to='region/Americas' rel="noopener noreferrer" href="#" className={`flex items-center px-4 -mb-1 ${theme ? "border-b-2" : "border-0"}  dark:border-`}>Americas</Link>
                    </li>
                </ul>
                <Link to='/' rel="noopener noreferrer" aria-label="Back to homepage" className="flex items-center p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-8 h-8 dark:text-default-600">
                        <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
                        <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
                    </svg>
                </Link>
                <ul className="items-stretch hidden space-x-3 md:flex">
                    <li className="flex">
                        <Link to='region/Africa' rel="noopener noreferrer" href="#" className={`flex items-center px-4 -mb-1 ${theme ? "border-b-2" : "border-0"}  dark:border-`}>Africa</Link>
                    </li>
                    <li className="flex">
                        <Link to='region/Oceania' rel="noopener noreferrer" href="#" className={`flex items-center px-4 -mb-1 ${theme ? "border-b-2" : "border-0"}  dark:border-`}>Oceania</Link>
                    </li>
                    <li className="flex">
                        <Link to='region/Antarctic' rel="noopener noreferrer" href="#" className={`flex items-center px-4 -mb-1 ${theme ? "border-b-2" : "border-0"}  dark:border-`}>Antractic</Link>
                    </li>
                </ul>
                <label class="toggle" for="switch" >
                    <input id="switch" class="input" type="checkbox" onClick={() => setTheme(!theme)}/>
                    <div class="icon icon--moon">
                        <svg height="32" width="32" fill="currentColor" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" fill-rule="evenodd"></path>
                        </svg>
                    </div>
                    <div class="icon icon--sun">
                        <svg height="32" width="32" fill="currentColor" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
                        </svg>
                    </div>
                </label>
                <button title="Button" type="button" className="p-4 md:hidden" onClick={() => setStatus(!status)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </nav>
            <div className={`${status ? 'block' : 'hidden'} ${theme ? "dark:bg-slate-100" : "bg-slate-900 text-gray-300"} pb-6`}>
                <ul className="gap-8 items-center flex flex-col justify-center ">
                    <li className={`flex dark:border- w-[50vw] justify-center ${theme ? "border-b-2" : "border-0"}`}><Link to='region/Europe' rel="noopener noreferrer" href="#" className="flex items-center mb-1">Europe</Link></li>
                    <li className={`flex dark:border- w-[50vw] justify-center ${theme ? "border-b-2" : "border-0"}`}><Link to='region/Asia' rel="noopener noreferrer" href="#" className="flex items-center mb-1">Asia</Link></li>
                    <li className={`flex dark:border- w-[50vw] justify-center ${theme ? "border-b-2" : "border-0"}`}><Link to='region/Americas' rel="noopener noreferrer" href="#" className="flex items-center mb-1">Americas</Link></li>
                    <li className={`flex dark:border- w-[50vw] justify-center ${theme ? "border-b-2" : "border-0"}`}><Link to='region/Africa' rel="noopener noreferrer" href="#" className="flex items-center mb-1">Africa</Link></li>
                    <li className={`flex dark:border- w-[50vw] justify-center ${theme ? "border-b-2" : "border-0"}`}><Link to='region/Oceania' rel="noopener noreferrer" href="#" className="flex items-center mb-1">Oceania</Link></li>
                    <li className={`flex dark:border- w-[50vw] justify-center ${theme ? "border-b-2" : "border-0"}`}><Link to='region/Antarctic' rel="noopener noreferrer" href="#" className="flex items-center mb-1">Antractic</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header