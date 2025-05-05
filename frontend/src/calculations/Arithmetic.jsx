import { useState } from "react"
import { useMatrix } from "../matrix/useMatrix";
import MatrixInput from "../matrix/MatrixInput";
import Result from "../components/Result";

function Arithmetic(){
    const matrix1 = useMatrix();
    const matrix2 = useMatrix();

    const [result, setResult] = useState(null);
    const [operation, setOperation] = useState('add');

    const handleOperationChange = (e) => {
        setOperation(e.target.value);
    }

    const generateResult = () => {
        if(matrix1.cols == matrix2.cols && matrix1.rows == matrix2.rows){
            const requestData = {
                matrix1: matrix1.matrix.map(row => row.map(parseFloat)),
                matrix2: matrix2.matrix.map(row => row.map(parseFloat)),
            };

            fetch(`https://lincalc.onrender.com/arithmetic?operation=${encodeURIComponent(operation)}`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(requestData)
            })
            .then(res => res.json())
            .then((data) => setResult(data.result))
            .catch(err => setResult(err));
        } else {
            console.log('Error: Matrices dimensions do not match')
            setResult('Error: Matrices dimensions do not match')
        }
    }

    return <div className="d-flex flex-column">
        <div className="bg-secondary rounded-4 d-flex flex-column justify-content-center align-items-center py-3">
            <h2 className="w-100 px-5">Arithmetic</h2>
            <MatrixInput matrixHook={matrix1} name="matrix1" />

            <div className="py-3">
                <select value={operation} onChange={handleOperationChange} className="form-select">
                    <option value={'add'}>Addition</option>
                    <option value={'subtract'}>Subtraction</option>
                </select>
            </div>

            <MatrixInput matrixHook={matrix2} name="matrix2" />

            <button className="btn btn-info" onClick={generateResult} disabled={!matrix1.isFilled() || !matrix2.isFilled() || matrix1.cols !== matrix2.cols || matrix1.rows !== matrix2.rows}>
                Calc()
            </button>
        </div>
        
        <Result result={result} />
    </div>
}

export default Arithmetic