import { useState } from 'react'
function SearchBar(){
    const [text, setText] = useState('')
    return(
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                />
        <button>Buscar</button>
        </div>
    )
}
export default SearchBar