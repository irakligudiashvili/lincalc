function Result({ result }){
    if (result == null){
        return null;
    }
    
    return <div className="px-5 py-3">
        <h3 className="py-3">Result</h3>
        {Array.isArray(result) ? (
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
        ) : (
            <div>
                <p>{result}</p>
            </div>
        )}
    </div>
}

export default Result