export default function MatrixInput({ matrixHook, name, canEdit = true }){
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
        <div className="px-5 py-3 d-flex flex-column w-100 justify-content-center align-items-center">
            <div className="d-flex align-items-center">
                {Array.from({ length: rows}).map((_, rowIndex) => (
                    <div className="d-flex flex-column py-2 mx-2" key={`${name}=row=${rowIndex}`}>
                        {Array.from({length: cols}).map((_, colIndex) => (
                            <input 
                            key={`${name}-${rowIndex}-${colIndex}`}
                            className="form-control form-control-sm my-1 p-2"
                            value={matrix[rowIndex][colIndex]}
                            onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
                            type="number"
                            />
                        ))}
                    </div>
                ))}
                {canEdit && (
                    <div className="d-flex flex-column ms-2">
                        <button onClick={addRow} className="btn btn-success bg-gradient btn-sm border-0  my-1">+</button>
                        <button onClick={removeRow} className="btn btn-danger bg-gradient btn-sm border-0  my-1">-</button>
                    </div>
                )}
            </div>
        {canEdit && (
            <div className="d-flex justify-content-center py-2">
                    <button onClick={removeCol} className="btn btn-danger bg-gradient border-0 btn-sm mx-2">-</button>
                    <button onClick={addCol} className="btn btn-success bg-gradient border-0 btn-sm mx-2">+</button>
            </div>
        )}
        </div>
    )
}