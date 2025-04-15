def multiply(matrix1, matrix2):
    result_rows = len(matrix1)
    result_cols = len(matrix2[0])
    shared_dim = len(matrix2)

    result = [[0 for _ in range(result_cols)] for _ in range(result_rows)]
    
    for i in range(result_rows):
        for j in range(result_cols):
            for k in range(shared_dim):
                result[i][j] += matrix1[i][k] * matrix2[k][j]

    return result