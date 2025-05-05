import { useState } from "react";
import { useMatrix } from "../matrix/useMatrix";
import MatrixInput from "../matrix/MatrixInput";
import Result from "../components/Result";

function Magnitude(){
    const matrix1 = useMatrix(1, 2);
    const matrix2 = useMatrix();

    const [result, setResult] = useState(null);

    const generateResult = () => {
        if(matrix1.isFilled){
            const requestData = {
                matrix1: matrix1.matrix.map(row => row.map(parseFloat)),
                matrix2: matrix2.matrix.map(row => row.map(parseFloat))
            }

            fetch('https://lincalc.onrender.com/magnitude', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(requestData)
            })
            .then(res => res.json())
            .then(data => setResult(data.result))
            .catch(err => setResult(err.toString()))
        } else {
            setResult("An error has occurred")
        }
    }

    return <div className="d-flex flex-column">
        <div className="bg-secondary rounded-4 d-flex flex-column justify-content-center align-items-center py-3">
            <h2 className="w-100 px-5">Magnitude</h2>

            <MatrixInput matrixHook={matrix1} name="matrix" rowEdit={false} />

            <button className="btn btn-info" onClick={generateResult} disabled={!matrix1.isFilled() && !matrix2.isFilled()}>
                Calc()
            </button>
        </div>

        <Result result={result} customMsg={"0"}/>
    </div>
}

export default Magnitude