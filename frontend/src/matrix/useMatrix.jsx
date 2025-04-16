import { useState, useEffect } from "react";

export function useMatrix(initialRows = 2, initialCols = 2){
    const [rows, setRows] = useState(initialRows);
    const [cols, setCols] = useState(initialCols);

    const [matrix, setMatrix] = useState(() =>
        Array(initialRows).fill().map(() => Array(initialCols).fill(''))
    )

    useEffect(() => {
        setMatrix((prevMatrix) =>
            Array.from({length: rows}, (_, rowIndex) =>
                Array.from({length: cols}, (_, colIndex) =>
                    prevMatrix[rowIndex]?.[colIndex] ?? ''
                )
            )
        )
    }, [rows, cols]);

    const handleChange = (rowIndex, colIndex, value) => {
        setMatrix((prevMatrix) =>
            prevMatrix.map((row, r) =>
                r === rowIndex ? row.map((cell, c) => (c === colIndex ? value : cell)) : row
            )
        );
    }

    const addRow = () => {
        setRows(prev => prev + 1);
        setMatrix(prev => [...prev, Array(cols).fill('')]);
    }

    const removeRow = () => {
        if (rows > 1){
            setRows(prev => prev - 1);
        }
    }

    const addCol = () => {
        setCols(prev => prev + 1);
    }

    const removeCol = () => {
        if (cols > 1){
            setCols(prev => prev - 1);
        }
    }

    const isFilled = () => matrix.every((row) => row.every((cell) => cell.trim() !== ''));

    return {
        matrix,
        rows,
        cols,
        setRows,
        setCols,
        handleChange,
        addRow,
        removeRow,
        addCol,
        removeCol,
        isFilled,
    }
}