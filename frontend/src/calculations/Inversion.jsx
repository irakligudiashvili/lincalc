import { useMatrix } from "../matrix/useMatrix";
import MatrixInput from "../matrix/MatrixInput";
import { useState } from "react";
import Result from "../components/Result";

function Inversion(){
    const matrix1 = useMatrix();
    const matrix2 = useMatrix();

    const [result, setResult] = useState(null);

    const generateResult = () => {
        if(matrix1.cols === matrix2.rows) {
            const requestData = {
                matrix1: matrix1.matrix.map(row => row.map(parseFloat)),
                matrix2: matrix2.matrix.map(row => row.map(parseFloat)),
            }

            fetch('http://127.0.0.1:8000/multiplication', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(requestData),
            })
            .then(res => res.json())
            .then(data => setResult(data.result))
            .catch(err => setResult(err.toString()));
        } else {
            setResult('Error: The number of Matrix 1 columns must match the number of Matrix 2 rows')
        }
    }
    
    return <>
        <div className="container d-flex flex-column align-items-center py-3">
            <MatrixInput matrixHook={matrix1} name="matrix1" />
            <MatrixInput matrixHook={matrix2} name="matrix2" />

            <button className="btn btn-info" onClick={generateResult} disabled={!matrix1.isFilled() || !matrix2.isFilled() || matrix1.cols !== matrix2.rows}>
                Calc()
            </button>

            <Result result={result} />
        </div>
    </>
}

export default Inversion