from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from numpy.linalg import LinAlgError
from pydantic import BaseModel
from arithmetic import add_matrices, subtract_matrices
from multiplication import multiply
from determinant import determinant2x2, determinant3x3
from inversion import inversion
from transpose import transpose
from coordinates import add_vectors, subtract_vectors
from magnitude import magnitude

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://127.0.0.1:8000",
        "http://localhost:8000",
        "*"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class MatrixRequest(BaseModel):
    matrix1: list[list[float]]
    matrix2: list[list[float]]

@app.get("/")
def root():
    return {"Hello": "World"}

@app.post("/arithmetic")
async def arithmetic_operation(request: MatrixRequest, operation):
    print("Received: ", request.matrix1, request.matrix2, operation)
    if len(request.matrix1) != len(request.matrix2) or len(request.matrix1[0]) != len(request.matrix2[0]):
        raise HTTPException(status_code=400, detail="Matrices must have the same dimensions")
    
    if operation == "add":
        result = add_matrices(request.matrix1, request.matrix2)
    elif operation == "subtract":
        result = subtract_matrices(request.matrix1, request.matrix2)
    else:
        raise HTTPException(status_code=400, detail="Invalid operation")
    
    print("Result: ", result.tolist())
    return {"result": result.tolist()}

@app.post("/multiplication")
async def multiplication_operation(request: MatrixRequest):
    print("Received: ", request.matrix1, request.matrix2)
    if len(request.matrix1[0]) != len(request.matrix2):
        raise HTTPException(status_code=400, detail="Numver of columns in matrix1 must match the number of rows in matrix2")

    result = multiply(request.matrix1, request.matrix2)

    print("Result: ", result.tolist())
    return {"result": result.tolist()}

@app.post("/determinant2x2")
async def determinant_2x2_operation(request: MatrixRequest):
    print("Received: ", request.matrix1)
    
    result = round(determinant2x2(request.matrix1), 10)
    
    print("Result: ", result)
    return {"result": result}

@app.post("/determinant3x3")
async def determinant_2x2_operation(request: MatrixRequest):
    print("Received: ", request.matrix1)

    result = round(determinant3x3(request.matrix1), 10)

    print("Result: ", result)
    return {"result": result}

@app.post("/inversion")
async def inversion_operation(request: MatrixRequest):
    print("Received: ", request.matrix1)
    
    try:
        result = inversion(request.matrix1)
        print("Result: ", result.tolist())
        return {"result": result.tolist()}
    except LinAlgError:
        result = "Matrix is singular, cannot be inverted"
    
    
    print("Result: ", result)
    return {"result": result}

@app.post("/transpose")
async def transpose_operation(request: MatrixRequest):
    print("Received: ", request.matrix1)

    result = transpose(request.matrix1)

    print("Result: ", result.tolist())
    return {"result": result.tolist()}

@app.post("/coordinates")
async def coordinates_operation(request: MatrixRequest, operation):
    print("Received: ", request.matrix1, request.matrix2, operation)
    if len(request.matrix1) != len(request.matrix2):
        raise HTTPException(status_code=400, detail="Vectors must have the same length")
    
    if operation == "add":
        result = add_vectors(request.matrix1, request.matrix2)
    elif operation == "subtract":
        result = subtract_vectors(request.matrix1, request.matrix2)
    else:
        raise HTTPException(status_code=400, detail="Invalid operation")
    
    print("Result: ", result.tolist())
    return {"result": result.tolist()}

@app.post("/magnitude")
async def magnitude_operation(request: MatrixRequest):
    print("Received: ", request.matrix1)

    result = magnitude(request.matrix1)

    print("Result: ", result.tolist())
    return {"result": result.tolist()}