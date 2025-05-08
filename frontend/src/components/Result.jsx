function Result({ result, customMsg, isLoading }){
    if (result == null){
        return null;
    }
    
    return <div className="bg-secondary rounded-4 d-flex flex-column justify-content-center align-items-center py-3 mt-5">
        <h2 className="w-100 px-5">Result</h2>

        <div className="d-flex align-items-center mt-3">
            {isLoading ? (
                <div className="text-center mt-3">Calculating...</div>
            ) : (
                Array.isArray(result) ? (
                    <table className="table table-bordered text-center">
                        <tbody>
                            {result.map((row, i) => (
                                <tr key={`result-row-${i}`}>
                                    {row.map((cell, j) => (
                                        <td key={`result-cell-${i}=${j}`}>{cell}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : result === 0 && customMsg ? (
                    <p>{customMsg}</p>
                ) : result === 0 ? (
                    <p>Determinant = 0. The matrix is singular</p>
                ) : (
                    <div>
                        <p>{result}</p>
                    </div>
                )
            )}
        </div>
    </div>
}

export default Result