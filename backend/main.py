from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from arithmetic import add_matrices, subtract_matrices
from multiplication import multiply

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
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
    # operation: Optional[str] = None

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
    
    return {"result": result}

@app.post("/multiplication")
async def multiplication_operation(request: MatrixRequest):
    print("Received: ", request.matrix1, request.matrix2)
    if len(request.matrix1[0]) != len(request.matrix2):
        raise HTTPException(status_code=400, detail="Numver of columns in matrix1 must match the number of rows in matrix2")

    result = multiply(request.matrix1, request.matrix2)

    print("Result: ", result)
    return {"result": result}