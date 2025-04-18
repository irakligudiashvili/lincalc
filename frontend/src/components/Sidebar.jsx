import Dropper from "./Dropper";

function Sidebar({setSelectedCalculation}){

    return (
        <div className="cursor-pointer list-group list-group-flush bg-primary col-3 rounded-4 py-2 h-100">
            <button onClick={() => setSelectedCalculation("arithmetic")} className="cursor-pointer list-group-item my-2 py-2 fs-5 ps-3 bg-primary text-light text-start">Arithmetic</button>
            <button onClick={() => setSelectedCalculation("multiplication")} className="cursor-pointer list-group-item my-2 py-2 fs-5 ps-3 bg-primary text-light text-start">Multiplication</button>
    
            <Dropper title="Determinant" optionTitles={["2x2 Matrix", "3x3 Matrix"]} optionValues={["determinant2x2", "determinant3x3"]} onSelect={setSelectedCalculation}/>
            <Dropper title="Inversion" optionTitles={["2x2 Matrix", "3x3 Matrix"]} optionValues={["inversion2x2", "inversion3x3"]} onSelect={setSelectedCalculation} />
        </div>
    );
}

export default Sidebar