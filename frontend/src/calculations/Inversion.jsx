// import { useState } from "react";
// import Matrix from "../components/Matrix"
import { useMatrix } from "../matrix/useMatrix";
import MatrixInput from "../matrix/MatrixInput";
import { useState } from "react";

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

            {result && (
                <div className="px-5 py-3">
                    <h3 className="py-3">Result</h3>
                    {Array.isArray(result) ? (
                        <table className="table table-bordered text-center">
                            <tbody>
                                {result.map((row, i) => (
                                    <tr key={`result-row-${i}`}>
                                        {row.map((cell, j) => (
                                            <td key={`result-cell-${i}=${j}`}>{cell}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>{result}</p>
                    )}
                </div>
            )}
        </div>
    </>
}

export default Inversion