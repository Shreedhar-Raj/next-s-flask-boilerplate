from supabase import create_client
import os
import pandas as pd
import psycopg2
from sklearn.decomposition import PCA
from sklearn.metrics.pairwise import cosine_similarity


supabase_url = os.environ.get('SUPABASE_URL')
supabase_key = os.environ.get('SUPABASE_KEY')
client = create_client(supabase_url, supabase_key)

def find_similar_students(studentId):
    #add check for looking == true
    input_student_data = client.table('students').select('*').eq('id', studentId).single().get('data')

    query = client.table('students').select('*').eq('board', input_student_data['board'])
    response = client.select(query)


    similar_students = []
    for row in response.get('data'):
        common_subjects = set(input_student_data['subjects']).intersection(row['subjects'])
        if len(common_subjects) >= 3:
            similar_students.append(row)


    data = pd.DataFrame(similar_students)


    X = data[data['id'] == input_student_data['id']].drop(['id'], axis=1)
    X = X.to_numpy()
    U_prime = data[data['id'] != input_student_data['id']].drop(['id'], axis=1)


    pca = PCA(n_components=2)
    X_pca = pca.fit_transform(X)
    U_prime_pca = pca.transform(U_prime)


    similarity = cosine_similarity(X_pca, U_prime_pca)


    most_similar_index = similarity.argmax()
    most_similar_student = similar_students[most_similar_index]

    return most_similar_student



most_similar = find_similar_students("ff76c7be-3ace-41f6-aeda-a244faf9c113")
print("Most similar student:", most_similar)
