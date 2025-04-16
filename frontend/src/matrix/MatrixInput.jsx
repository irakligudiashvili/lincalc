export default function MatrixInput({ matrixHook, name }){
    const {
        matrix,
        rows,
        cols,
        handleChange,
        addRow,
        removeRow,
        addCol,
        removeCol,
    } = matrixHook;

    return (
        <div className="px-5 py-3">
            {Array.from({ length: rows}).map((_, rowIndex) => (
                <div className="d-flex py-2" key={`${name}=row=${rowIndex}`}>
                    {Array.from({length: cols}).map((_, colIndex) => (
                        <input 
                            key={`${name}-${rowIndex}-${colIndex}`}
                            className="form-control form-control-sm mx-3"
                            value={matrix[rowIndex][colIndex]}
                            onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
                        />
                    ))}
                </div>
            ))}

            <div className="d-flex justify-content-between py-2">
                <div>
                    <button onClick={addRow} className="btn btn-success btn-sm">Add Row</button>
                    <button onClick={removeRow} className="btn btn-danger btn-sm mx-3">Remove Row</button>
                </div>
                <div>
                    <button onClick={addCol} className="btn btn-success btn-sm mx-3">Add Column</button>
                    <button onClick={removeCol} className="btn btn-danger btn-sm mx-3">Remove Column</button>
                </div>
            </div>
        </div>
    )
}