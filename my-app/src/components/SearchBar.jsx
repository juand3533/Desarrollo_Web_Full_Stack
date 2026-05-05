import { useState } from 'react'
function SearchBar(){
    const [text, setText] = useState('')
    return(
        <label className="input w-64 fixed top-4 right-20 border border-black p-3 rounded flex items-center gap-6">
            <svg className="h-[1em] opacity-100 flex" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                </g>
            </svg>
            <input type="search" required placeholder="Buscar" />
        </label>
    )
}
export default SearchBar