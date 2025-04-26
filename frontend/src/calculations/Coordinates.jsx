import { useState } from "react";
import Result from "../components/Result";
import { useMatrix } from "../matrix/useMatrix";
import MatrixInput from "../matrix/MatrixInput";

function Coordinates(){
    const matrix1 = useMatrix(1, 2);
    const matrix2 = useMatrix(1, 2);

    const [result, setResult] = useState(null);
    const [operation, setOperation] = useState('add');

    const handleOperationChange = (e) => {
        setOperation(e.target.value);
    }

    const generateResult = () => {
        if(matrix1.cols == matrix2.cols){
            const requestData = {
                matrix1: matrix1.matrix.map(row => row.map(parseFloat)),
                matrix2: matrix2.matrix.map(row => row.map(parseFloat)),
            };

            console.log("Vector 1: ", matrix1.vector);
            console.log("Vector 2: ", matrix2.vector);

            fetch(`http://127.0.0.1:8000/coordinates?operation=${encodeURIComponent(operation)}`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(requestData)
            })
            .then(res => res.json())
            .then((data) => setResult(data.result))
            .catch(err => setResult(err));
        } else {
            setResult('Error: Vector lengths do not match');
        }
    }

    return <div className="d-flex flex-column">
        <div className="bg-secondary rounded-4 d-flex flex-column justify-content-center align-items-center py-3">
            <h2 className="w-100 px-5">Coordinates of Vectors</h2>

            <MatrixInput matrixHook={matrix1} name="matrix1" rowEdit={false} />

            <div className="py-3">
                <select value={operation} onChange={handleOperationChange} className="form-select">
                    <option value={'add'}>Addition</option>
                    <option value={'subtract'}>Subtraction</option>
                </select>
            </div>

            <MatrixInput matrixHook={matrix2} name="matrix2" rowEdit={false} />

            <button className="btn btn-info" onClick={generateResult} disabled={!matrix1.isFilled() && !matrix2.isFilled()}>
                Calc()
            </button>
        </div>

        <Result result={result} />
    </div>
}

export default Coordinates