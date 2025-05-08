import { useMatrix } from "../matrix/useMatrix";
import MatrixInput from "../matrix/MatrixInput";
import { useState } from "react";
import Result from "../components/Result";

function Multiplication(){
    const matrix1 = useMatrix();
    const matrix2 = useMatrix();

    const [result, setResult] = useState(null);

    const [isLoading, setIsLoading] = useState(false);

    const generateResult = () => {
        setIsLoading(true);
        setResult(null);

        if(matrix1.cols === matrix2.rows) {
            const requestData = {
                matrix1: matrix1.matrix.map(row => row.map(parseFloat)),
                matrix2: matrix2.matrix.map(row => row.map(parseFloat)),
            }

            fetch('https://lincalc.onrender.com/multiplication', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(requestData),
            })
            .then(res => res.json())
            .then(data => setResult(data.result))
            .catch(err => setResult(err.toString()))
            .finally(setIsLoading(false))
        } else {
            setResult('Error: The number of Matrix 1 columns must match the number of Matrix 2 rows')
        }
    }

    return <div className="d-flex flex-column"> 
        <div className="bg-secondary rounded-4 d-flex flex-column justify-content-center align-items-center py-3">
            <h2 className="w-100 px-5">Multiplication</h2>
            <MatrixInput matrixHook={matrix1} name="matrix1" />
            <MatrixInput matrixHook={matrix2} name="matrix2" />

            <button className="btn btn-info" onClick={generateResult} disabled={!matrix1.isFilled() || !matrix2.isFilled() || matrix1.cols !== matrix2.rows}>
                Calc()
            </button>

        </div>

        <Result result={result} isLoading={isLoading} />
    </div>
}

export default Multiplication