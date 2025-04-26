import Dropper from "./Dropper";

function Sidebar({setSelectedCalculation}){

    return (
        <div className="cursor-pointer list-group list-group-flush bg-primary col-md-3 d-none d-md-block rounded-4 py-2 h-100">
            <button onClick={() => setSelectedCalculation("arithmetic")} className="cursor-pointer list-group-item my-2 py-2 fs-5 ps-3 bg-primary text-light text-start w-100">Arithmetic</button>
            <button onClick={() => setSelectedCalculation("multiplication")} className="cursor-pointer list-group-item my-2 py-2 fs-5 ps-3 bg-primary text-light text-start w-100">Multiplication</button>
    
            <Dropper title="Determinant" optionTitles={["2x2 Matrix", "3x3 Matrix"]} optionValues={["determinant2x2", "determinant3x3"]} onSelect={setSelectedCalculation}/>
            <Dropper title="Inversion" optionTitles={["2x2 Matrix", "3x3 Matrix"]} optionValues={["inversion2x2", "inversion3x3"]} onSelect={setSelectedCalculation} />
            
            <button onClick={() => setSelectedCalculation("transpose")} className="cursor-pointer list-group-item my-2 py-2 fs-5 ps-3 bg-primary text-light text-start w-100">Transpose</button>
            <button onClick={() => setSelectedCalculation("coordinates")} className="cursor-pointer list-group-item my-2 py-2 fs-5 ps-3 bg-primary text-light text-start w-100">Vector Coordinates</button>
            <button onClick={() => setSelectedCalculation("magnitude")} className="cursor-pointer list-group-item my-2 py-2 fs-5 ps-3 bg-primary text-light text-start w-100">Magnitude</button>
            <button onClick={() => setSelectedCalculation("dotProduct")} className="cursor-pointer list-group-item my-2 py-2 fs-5 ps-3 bg-primary text-light text-start w-100">Dot Product</button>
            <button onClick={() => setSelectedCalculation("test")} className="cursor-pointer list-group-item my-2 py-2 fs-5 ps-3 bg-primary text-light text-start w-100">Testing Area</button>
        </div>
    );
}

export default Sidebar