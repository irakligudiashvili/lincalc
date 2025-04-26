import { useContext } from "react";
import { CalculationContext } from "../contexts/CalculationContext";
import { useNavigate } from "react-router-dom";

function MobileSidebar() {
    const { setSelectedCalculation, setShowMenu } = useContext(CalculationContext);
    const navigate = useNavigate();

    const handleSelect = (value) => {
        navigate('/');
        setSelectedCalculation(value);
        setShowMenu(false);
    };

    return (
        <>
            <button className="btn btn-sm btn-outline-primary w-100 my-1 text-start" onClick={() => handleSelect("arithmetic")}>Arithmetic</button>
            <button className="btn btn-sm btn-outline-primary w-100 my-1 text-start" onClick={() => handleSelect("multiplication")}>Multiplication</button>
            <button className="btn btn-sm btn-outline-primary w-100 my-1 text-start" onClick={() => handleSelect("determinant2x2")}>Determinant 2x2</button>
            <button className="btn btn-sm btn-outline-primary w-100 my-1 text-start" onClick={() => handleSelect("determinant3x3")}>Determinant 3x3</button>
            <button className="btn btn-sm btn-outline-primary w-100 my-1 text-start" onClick={() => handleSelect("inversion2x2")}>Inversion 2x2</button>
            <button className="btn btn-sm btn-outline-primary w-100 my-1 text-start" onClick={() => handleSelect("inversion3x3")}>Inversion 3x3</button>
            <button className="btn btn-sm btn-outline-primary w-100 my-1 text-start" onClick={() => handleSelect("transpose")}>Transpose</button>
            <button className="btn btn-sm btn-outline-primary w-100 my-1 text-start" onClick={() => handleSelect("coordinates")}>Vector Coordinates</button>
            <button className="btn btn-sm btn-outline-primary w-100 my-1 text-start" onClick={() => handleSelect("magnitude")}>Magnitude</button>
        </>
    );
}

export default MobileSidebar;
