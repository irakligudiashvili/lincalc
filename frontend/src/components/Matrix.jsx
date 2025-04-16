import { useState } from "react";

function Matrix({
    rows,
    cols,
    matrix,
    onMatrixChange,
    onAddRow,
    onRemoveRow,
    onAddCol,
    onRemoveCol,
}){
    // const [rows, setRows] = useState(2);
    // const [cols, setCols] = useState(2);

    // const [matrix, setMatrix] = useState(Array(rows).fill().map(() => Array(cols).fill('')));

    // const addRow = () => {
    //     setRows(prev => prev + 1);
    //     setMatrix(prevMatrix => {
    //         const newMatrix = [...prevMatrix];
    //         newMatrix.push(Array(cols).fill(''));
    //         return newMatrix;
    //     });
    // }

    // const removeRow = () => {
    //     if(rows > 1){
    //         setRows(prev => prev - 1);
    //     }
    // }

    // const addCol = () => {
    //     setCols(prev => prev + 1);
    // }

    // const removeCol = () => {
    //     setCols(prev => prev - 1);
    // }

    const handleMatrixChange = (rowIndex, colIndex, value) => {
        const newMatrix = matrix.map((row, rIndex) =>
            rIndex === rowIndex
                ? row.map((cell, cIndex) => (cIndex === colIndex ? value : cell))
                : row
        );

        onMatrixChange(newMatrix);
        console.log("New Matrix: ", newMatrix)
    }

    return (
        <div className="container d-flex flex-column justify-content-center align-items-center py-3">
            <div className="px-5 py-3">
                {matrix.map((row, rowIndex) => (
                    <div className="d-flex py-2" key={`row1-${rowIndex}`}>
                        {row.map((cell, colIndex) => (
                            <input
                                key={`${rowIndex}-${colIndex}`}
                                className="form-control form-control-sm mx-3"
                                value={cell}
                                onChange={(e) =>
                                    handleMatrixChange(rowIndex, colIndex, e.target.value)
                                }
                            />
                        ))}
                    </div>
                ))}

                <div className="d-flex justify-content-between py-2 ">
                    <div>
                        <button onClick={onAddRow} className="btn btn-success btn-sm">Add Row</button>
                        <button onClick={onRemoveRow} className="btn btn-danger btn-sm mx-3">Remove Row</button>
                    </div>
                    <div>
                        <button onClick={onAddCol} className="btn btn-success btn-sm mx-3">Add Column</button>
                        <button onClick={onRemoveCol} className="btn btn-danger btn-sm">Remove Column</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Matrix;