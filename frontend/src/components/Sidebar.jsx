function Sidebar({setSelectedCalculation}){
    return <div className="cursor-pointer list-group list-group-flush bg-primary col-3 rounded-4 h-100">
        <button onClick={() => setSelectedCalculation('arithmetic')} className="cursor-pointer list-group-item color-light my-2 py-2 fs-5 ps-3 bg-primary text-light text-start">Arithmetic</button>
        <button onClick={() => setSelectedCalculation('multiplication')} className="cursor-pointer list-group-item color-light my-2 py-2 fs-5 ps-3 bg-primary text-light text-start">Multiplication</button>
        <button onClick={() => setSelectedCalculation('inversion')} className="cursor-pointer list-group-item color-light my-2 py-2 fs-5 ps-3 bg-primary text-light text-start">Inversion</button>
    </div>
}

export default Sidebar