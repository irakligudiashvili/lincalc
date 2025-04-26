export default function MatrixInput({ matrixHook, name, canEdit = true, rowEdit = true, colEdit = true }){
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
            <div className="d-flex flex-column align-items-center">
                {Array.from({ length: rows }).map((_, rowIndex) => (
                    <div className="d-flex py-1" key={`${name}-row-${rowIndex}`}>
                        {Array.from({ length: cols }).map((_, colIndex) => (
                            <input
                                key={`${name}-${rowIndex}-${colIndex}`}
                                className="form-control form-control-sm mx-1 p-2"
                                value={matrix[rowIndex][colIndex]}
                                onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
                                type="number"
                            />
                        ))}
                    </div>
                ))}
                {canEdit && (
                    <div className="d-flex">
                        {rowEdit && (
                            <div className="d-flex justify-content-center mt-2">
                                <button onClick={addRow} className="btn btn-success bg-gradient btn-sm border-0 mx-2">Row: +</button>
                                <button onClick={removeRow} className="btn btn-danger bg-gradient btn-sm border-0 mx-2">Row: -</button>
                            </div>
                        )}

                        {colEdit && (
                            <div className="d-flex justify-content-center mt-2">
                                <button onClick={addCol} className="btn btn-success bg-gradient btn-sm border-0 mx-2">Col: +</button>
                                <button onClick={removeCol} className="btn btn-danger bg-gradient btn-sm border-0 mx-2">Col: -</button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}