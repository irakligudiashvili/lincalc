import { useState } from "react"
import MatrixInput from "../matrix/MatrixInput"
import { useMatrix } from "../matrix/useMatrix"
import Result from "../components/Result";

function Inversion2x2(){
    const matrix1 = useMatrix();
    const matrix2 = useMatrix();

    const [result, setResult] = useState(null);

    const generateResult = () => {
        if(matrix1.isFilled){
            const requestData = {
                matrix1: matrix1.matrix.map(row => row.map(parseFloat)),
                matrix2: matrix2.matrix.map(row => row.map(parseFloat))
            }

            fetch('http://127.0.0.1:8000/inversion', {
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

    return <div className="d-flex flex-column">
        <div className="bg-secondary rounded-4 d-flex flex-column justify-content-center align-items-center py-3">
            <h2 className="w-100 px-5">Inversion 2x2</h2>

            <MatrixInput matrixHook={matrix1} name="matrix" canEdit={false} />

            <button className="btn btn-info" onClick={generateResult} disabled={!matrix1.isFilled()}>
                Calc()
            </button>
        </div>

        <Result result={result} />
    </div>
}

export default Inversion2x2