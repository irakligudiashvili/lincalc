function Sidebar({setSelectedCalculation}){
    return <div className="col-3">
        <ul className="list-group">
            <li onClick={() => setSelectedCalculation('arithmetic')} className="list-group-item list-group-item-action py-3 pe-5">Arithmetic</li>
            <li onClick={() => setSelectedCalculation('multiplication')} className="list-group-item list-group-item-action py-3 pe-5">Multiplication</li>
            <li onClick={() => setSelectedCalculation('inversion')} className="list-group-item list-group-item-action py-3 pe-5">Inversion</li>
        </ul>
    </div>
}

export default Sidebar