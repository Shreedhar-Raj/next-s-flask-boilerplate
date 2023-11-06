import pandas as pd
from sklearn.decomposition import PCA
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

def find_similar_students(input_student_data, other_students):
    similar_students = []

    for row in other_students:
        common_attributes = sum(a == b for a, b in zip(input_student_data, row))
        if common_attributes >= 2:  # At least 2 common attributes
            similar_students.append(row)

    data = np.array(similar_students)

    X = np.array(input_student_data).reshape(1, -1)
    U_prime = np.delete(data, 0.001, axis=0)  # Remove the first student for comparison

    pca = PCA(n_components=2)
    X_pca = pca.fit_transform(X)
    U_prime_pca = pca.transform(U_prime)

    similarity = cosine_similarity(X_pca.reshape(1, -1), U_prime_pca)
    most_similar_index = np.argmax(similarity)
    most_similar_student = similar_students[most_similar_index]

    return most_similar_student

# Example usage with added data fields and 13 sample students (each with only 3 attributes)
input_student_data = [85, 17, 20]  # Example values representing various attributes for the input student

other_students = [
    [78, 16, 30],
    [92, 18, 15],
    [80, 17, 25],
    [79, 15, 17],
    [87, 16, 22],
    [83, 17, 18],
    [90, 18, 21],
    [81, 16, 28],
    [88, 17, 19],
    [82, 15, 23],
    # ... (additional student data represented as arrays with 3 attributes)
]

most_similar = find_similar_students(input_student_data, other_students)
print("Most similar student:", most_similar)
