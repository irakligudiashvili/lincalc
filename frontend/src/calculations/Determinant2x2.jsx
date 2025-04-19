import { useState } from "react";
import MatrixInput from "../matrix/MatrixInput"
import { useMatrix } from "../matrix/useMatrix"

function Determinant2x2(){
    const matrix1 = useMatrix();
    const matrix2 = useMatrix();

    const [result, setResult] = useState(null);

    const generateResult = () => {
        if(matrix1.isFilled){
            const requestData = {
                matrix1: matrix1.matrix.map(row => row.map(parseFloat)),
                matrix2: matrix2.matrix.map(row => row.map(parseFloat))
            }

            fetch('http://127.0.0.1:8000/determinant2x2', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(requestData),
            })
            .then(res => res.json())
            .then(data => setResult(data.result))
            .catch(err => setResult(err.toString()));
        } else {
            setResult("An error has occurred");
        }
    }

    return <div className="container d-flex flex-column align-items-center py-3">
        <h1>Determinant 2x2</h1>

        <MatrixInput matrixHook={matrix1} name="matrix" canEdit={false} />

        <button className="btn btn-info" onClick={generateResult} disabled={!matrix1.isFilled()}>
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
}

export default Determinant2x2