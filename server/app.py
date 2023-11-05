from flask import Flask, request
from model import fix_schedule
app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello, World!'

@app.route('/schedule', methods=['GET'])
def schedule():
    subjects = request.args.get('subjects')
    chapters = request.args.get('chapters')
    daily_availability = request.args.get('daily_availability')
    proficiency_scores = request.args.get('proficiency_scores')
    extracurriculars = request.args.get('extracurriculars')
    upcoming_tests = request.args.get('upcoming_tests')
    learning_pace = request.args.get('learning_pace')
    daily_test_scores = request.args.get('daily_test_scores')
    return {"status" : 200, "data" : fix_schedule( 
        subjects,
        chapters,
        daily_availability,
        proficiency_scores,
        extracurriculars,
        upcoming_tests,
        learning_pace,
        daily_test_scores                
                   )}
    
if __name__ == '__main__':
    app.run(debug=True)
