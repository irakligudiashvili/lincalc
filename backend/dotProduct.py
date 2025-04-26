import numpy as np

def dotProduct(vector1, vector2, angle):
    magnitude1 = np.linalg.norm(vector1)
    magnitude2 = np.linalg.norm(vector2)

    dotProduct = magnitude1 * magnitude2 * np.cos(float(angle))

    return dotProduct.round(3)