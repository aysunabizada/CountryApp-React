import { useContext } from "react"
import { Link } from "react-router-dom"
import { ThmCntx } from "../../../data/ThemeContex"

function Error404() {
    const {theme} = useContext(ThmCntx)
    return (
        <section className={`flex items-center h-full p-16 ${theme ? 'bg-white': 'bg-slate-800 text-gray-400'}`}>
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                    <p className="mt-4 mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
                    <Link to='/' rel="noopener noreferrer" className="px-8 py-3 font-semibold rounded dark:bg-default-600 dark:text-gray-300">Back to homepage</Link>
                </div>
            </div>
        </section>
    )
}

export default Error404