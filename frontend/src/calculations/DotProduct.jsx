import { useState } from "react";
import { useMatrix } from "../matrix/useMatrix"
import MatrixInput from "../matrix/MatrixInput";
import Result from "../components/Result";

function DotProduct(){
    const matrix1 = useMatrix(1, 2);
    const matrix2 = useMatrix(1, 2);

    const [angle, setAngle] = useState();
    const [result, setResult] = useState(null);

    const [isLoading, setIsLoading] = useState(false);

    const handleAngleChange = (e) => {
        setAngle(e.target.value);
    }

    const generateResult = () => {
        setIsLoading(true);
        setResult(null);

        if(matrix1.cols == matrix2.cols){
            const requestData = {
                matrix1: matrix1.matrix.map(row => row.map(parseFloat)),
                matrix2: matrix2.matrix.map(row => row.map(parseFloat))
            };

            fetch(`https://lincalc.onrender.com/dotproduct?angle=${encodeURIComponent(angle)}`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(requestData)
            })
            .then(res => res.json())
            .then((data) => setResult(data.result))
            .catch(err => setResult(err))
            .finally(setIsLoading(false))
        } else {
            setResult("Error: Vectors must have the same length")
        }
    }

    return <div className="d-flex flex-column">
        <div className="bg-secondary rounded-4 d-flex flex-column justify-content-center align-items-center py-3">
            <h2 className="w-100 px-5">Arithmetic</h2>

            <MatrixInput matrixHook={matrix1} name="matrix1" rowEdit={false} />

            <div className="py-3 d-flex align-items-center justify-content-center">
                <span className="fs-3 pb-1">Angle</span> 
                <input className="form-control ms-4 " type="number" onChange={handleAngleChange} />
            </div>

            <MatrixInput matrixHook={matrix2} name="matrix2" rowEdit={false} />

            <button className="btn btn-info" onClick={generateResult} disabled={!matrix1.isFilled() || !matrix2.isFilled() || matrix1.cols !== matrix2.cols || matrix1.rows !== matrix2.rows}>
                Calc()
            </button>
        </div>

        <Result result={result} isLoading={isLoading} />
    </div>
}

export default DotProduct