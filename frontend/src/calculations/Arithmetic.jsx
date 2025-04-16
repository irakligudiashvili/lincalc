import { useState, useEffect } from "react"

function Arithmetic(){
    const [matrix1Rows, setMatrix1Rows] = useState(2)
    const [matrix1Cols, setMatrix1Cols] = useState(2)
    
    const [matrix2Rows, setMatrix2Rows] = useState(2)
    const [matrix2Cols, setMatrix2Cols] = useState(2)

    const [matrix1, setMatrix1] = useState(Array(matrix1Rows).fill().map(() => Array(matrix1Cols).fill('')));
    const [matrix2, setMatrix2] = useState(Array(matrix2Rows).fill().map(() => Array(matrix2Cols).fill('')));

    const [operation, setOperation] = useState('add')
    const [result, setResult] = useState(null)

    const addRowMatrix1 = () => {
        setMatrix1Rows(prev => prev + 1);
        setMatrix1(prevMatrix => {
            const newMatrix = [...prevMatrix];
            newMatrix.push(Array(matrix1Cols).fill(''));
            return newMatrix;
        });
    };
    const addColumnMatrix1 = () => setMatrix1Cols((prev) => prev + 1);
    const removeRowMatrix1 = () => {
        if(matrix1Rows > 1){
            setMatrix1Rows((prev) => prev - 1);
        }
    }
    const removeColumnMatrix1 = () => {
        if(matrix1Cols > 1){
            setMatrix1Cols((prev) => prev - 1);
        }
    };

    const addRowMatrix2 = () => {
        setMatrix2Rows(prev => prev + 1);
        setMatrix2(prevMatrix => {
            const newMatrix = [...prevMatrix];
            newMatrix.push(Array(matrix2Cols).fill(''));
            return newMatrix;
        });
    };
    const addColumnMatrix2 = () => setMatrix2Cols((prev) => prev + 1);
    const removeRowMatrix2 = () => {
        if(matrix2Rows > 1){
            setMatrix2Rows((prev) => prev - 1);
        }
    };
    const removeColumnMatrix2 = () => {
        if(matrix2Cols > 1){
            setMatrix2Cols((prev) => prev - 1);
        }
    };
    
    useEffect(() => {
        setMatrix1(prevMatrix => {
            return Array.from({ length: matrix1Rows }, (_, rowIndex) =>
                Array.from({ length: matrix1Cols }, (_, colIndex) =>
                    (prevMatrix[rowIndex]?.[colIndex] !== undefined ? prevMatrix[rowIndex][colIndex] : '')
                )
            );
        });
    }, [matrix1Rows, matrix1Cols]);
    
    useEffect(() => {
        setMatrix2(prevMatrix => {
            return Array.from({ length: matrix2Rows }, (_, rowIndex) =>
                Array.from({ length: matrix2Cols }, (_, colIndex) =>
                    (prevMatrix[rowIndex]?.[colIndex] !== undefined ? prevMatrix[rowIndex][colIndex] : '')
                )
            );
        });
    }, [matrix2Rows, matrix2Cols]);
    

    const handleMatrix1Change = (rowIndex, colIndex, value) => {
        const newMatrix1 = matrix1.map((row, rIndex) =>
            rIndex === rowIndex
                ? row.map((cell, cIndex) => (cIndex === colIndex ? value : cell))
                : row
        );

        setMatrix1(newMatrix1);
    }

    const handleMatrix2Change = (rowIndex, colIndex, value) => {
        const newMatrix2 = matrix2.map((row, rIndex) =>
            rIndex === rowIndex
                ? row.map((cell, cIndex) => (cIndex === colIndex ? value : cell))
                : row
        );

        setMatrix2(newMatrix2);
    }

    const handleOperationChange = (e) => {
        setOperation(e.target.value);
    }

    const isMatrixFilled = (matrix) => {
        return matrix.every(row => row.every(cell => cell.trim() !== ''));
    }

    const generateResult = () => {
        if(matrix1Cols == matrix2Cols && matrix1Rows == matrix2Rows){
            console.log('Calculating')

            const requestData = {
                matrix1: matrix1,
                matrix2: matrix2,
            };

            console.log("Request data: ", requestData);

            fetch(`http://127.0.0.1:8000/arithmetic?operation=${encodeURIComponent(operation)}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData)
            })
            .then((response) => response.json())
            .then((data) => {
                setResult(data.result)
            })
            .catch((error) => {
                setResult(error)
            });
        } else {
            console.log('Error: Matrices dimensions do not match')
            setResult('Error: Matrices dimensions do not match')
        }
    }

    return <div className="container d-flex flex-column justify-content-center align-items-center py-3">
        {/* Matrix 1 */}
        <div className="px-5 py-3">
            {Array.from({ length: matrix1Rows }).map((_, rowIndex) => (
                <div className="d-flex py-2" key={`row1-${rowIndex}`}>
                    {Array.from({ length: matrix1Cols }).map((_, colIndex) => (
                    <input
                        key={`matrix1-${rowIndex}-${colIndex}`}
                        className="form-control form-control-sm mx-3"
                        value={matrix1[rowIndex][colIndex]}
                        onChange={(e) =>
                            handleMatrix1Change(rowIndex, colIndex, e.target.value)
                        }
                    />
                    ))}
                </div>
            ))}

            <div className="d-flex justify-content-between py-2 ">
                <div>
                    <button onClick={addRowMatrix1} className="btn btn-success btn-sm">Add Row</button>
                    <button onClick={removeRowMatrix1} className="btn btn-danger btn-sm mx-3">Remove Row</button>
                </div>
                <div>
                    <button onClick={addColumnMatrix1} className="btn btn-success btn-sm mx-3">Add Column</button>
                    <button onClick={removeColumnMatrix1} className="btn btn-danger btn-sm">Remove Column</button>
                </div>
            </div>
        </div>

        <div className="py-5">
            <select value={operation} onChange={handleOperationChange}>
                <option value={'add'}>Addition</option>
                <option value={'subtract'}>Subtraction</option>
            </select>
        </div>

        {/* Matrix 2 */}
        <div className="px-5 py-3">
            {Array.from({ length: matrix2Rows }).map((_, rowIndex) => (
                <div className="d-flex py-2" key={`row1-${rowIndex}`}>
                    {Array.from({ length: matrix2Cols }).map((_, colIndex) => (
                    <input
                        key={`matrix2-${rowIndex}-${colIndex}`}
                        className="form-control form-control-sm mx-3"
                        value={matrix2[rowIndex][colIndex]}
                        onChange={(e) =>
                            handleMatrix2Change(rowIndex, colIndex, e.target.value)
                        }
                    />
                    ))}
                </div>
            ))}

            <div className="d-flex justify-content-between py-2 ">
                <div>
                    <button onClick={addRowMatrix2} className="btn btn-success btn-sm">Add Row</button>
                    <button onClick={removeRowMatrix2} className="btn btn-danger btn-sm mx-3">Remove Row</button>
                </div>
                <div>
                    <button onClick={addColumnMatrix2} className="btn btn-success btn-sm mx-3">Add Column</button>
                    <button onClick={removeColumnMatrix2} className="btn btn-danger btn-sm">Remove Column</button>
                </div>
            </div>
        </div>

        <button className="btn btn-info" onClick={generateResult} disabled={!isMatrixFilled(matrix1) || !isMatrixFilled(matrix2)}>
            Calc()
        </button>

        <div className="">
            <h3 className="py-3">Result</h3>

            {/* Result Matrix */}
            <div className="px-5 py-3">
                {result && Array.isArray(result) ? (
                    <table className="table table-bordered text-center">
                        <tbody>
                            {result.map((row, rowIndex) => (
                                <tr key={`result-row-${rowIndex}`}>
                                    {row.map((cell, colIndex) => (
                                        <td key={`result-cell-${rowIndex}-${colIndex}`} className="px-3 py-2">
                                            {cell}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>{result}</p>
                )}
            </div>
        </div>
    </div>
}

export default Arithmetic