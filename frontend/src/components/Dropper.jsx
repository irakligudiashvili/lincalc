import { useState } from "react"

function Dropper({ title, optionTitles = [], optionValues=[], onSelect}){
    const [open, setOpen] = useState(false)

    const handleSelect = (value) => {
        onSelect(value);
    }

    return <div className="cursor-pointer my-2 py-2 fs-5 bg-primary text-light text-start">
        <button onClick={() => setOpen(!open)} className="cursor-pointer list-group-item ps-3 w-100 border-0 border-bottom p-0 bg-primary text-light text-start">
            {title}
        </button>
        {open && (
                <div>
                    {optionTitles.map((label, index) => (
                        <button
                            key={index}
                            onClick={() => handleSelect(optionValues[index])}
                            className="cursor-pointer list-group-item w-100 border-0 mt-1 py-1 fs-6 ps-4 bg-primary text-light text-start"
                        >{label}</button>
                    ))}
                </div>
            )}
    </div>
}

export default Dropper