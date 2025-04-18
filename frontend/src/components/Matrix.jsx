function Matrix({ matrix, onMatrixChange, onAddRow, onRemoveRow, onAddCol, onRemoveCol,}){
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