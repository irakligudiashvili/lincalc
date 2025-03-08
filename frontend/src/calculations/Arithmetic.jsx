import { useState } from "react"

function Arithmetic(){
    const [matrix1Rows, setMatrix1Rows] = useState(2)
    const [matrix1Cols, setMatrix1Cols] = useState(2)
    
    const [matrix2Rows, setMatrix2Rows] = useState(2)
    const [matrix2Cols, setMatrix2Cols] = useState(2)

    const addRowMatrix1 = () => setMatrix1Rows((prev) => prev + 1);
    const addColumnMatrix1 = () => setMatrix1Cols((prev) => prev + 1);
    const removeRowMatrix1 = () => setMatrix1Rows((prev) => prev - 1);
    const removeColumnMatrix1 = () => setMatrix1Cols((prev) => prev - 1);

    const addRowMatrix2 = () => setMatrix2Rows((prev) => prev + 1);
    const addColumnMatrix2 = () => setMatrix2Cols((prev) => prev + 1);
    const removeRowMatrix2 = () => setMatrix2Rows((prev) => prev - 1);
    const removeColumnMatrix2 = () => setMatrix2Cols((prev) => prev - 1);

    return <div className="container d-flex flex-column justify-content-center align-items-center py-3">
        {/* Matrix 1 */}
        <div className="border-3 border-start border-end border-dark rounded-pill px-5 py-3">
            {Array.from({ length: matrix1Rows }).map((_, rowIndex) => (
                <div className="d-flex py-2" key={`row1-${rowIndex}`}>
                    {Array.from({ length: matrix1Cols }).map((_, colIndex) => (
                    <input
                        key={`matrix1-${rowIndex}-${colIndex}`}
                        className="form-control form-control-sm mx-3"
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
            <select>
                <option>Addition</option>
                <option>Subtraction</option>
            </select>
        </div>

        {/* Matrix 2 */}
        <div className="border-3 border-start border-end border-dark rounded-pill px-5 py-3">
            {Array.from({ length: matrix2Rows }).map((_, rowIndex) => (
                <div className="d-flex py-2" key={`row1-${rowIndex}`}>
                    {Array.from({ length: matrix2Cols }).map((_, colIndex) => (
                    <input
                        key={`matrix2-${rowIndex}-${colIndex}`}
                        className="form-control form-control-sm mx-3"
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

        <div className="">
            <h3 className="py-3">Result</h3>

            {/* Result Matrix */}
            <div className="border-3 border-start border-end border-dark rounded-pill px-5 py-3">
                <div className="d-flex py-2">
                    <input className="form-control form-control-sm mx-3 w-10"></input>
                    <input className="form-control form-control-sm mx-3 w-10"></input>
                </div>

                <div className="d-flex py-2">
                    <input className="form-control form-control-sm mx-3 w-10"></input>
                    <input className="form-control form-control-sm mx-3 w-10"></input>
                </div>
            </div>
        </div>
    </div>
}

export default Arithmetic