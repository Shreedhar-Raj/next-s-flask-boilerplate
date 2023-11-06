from flask import Flask, request
from model import gen_schedule
from ainotes import gen_notes
app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello, World!'

@app.route('/schedule', methods=['GET'])
def schedule():
    subjects = "Math, Science, History"
    chapters = "Algebra, Biology, World War II"
    daily_availability = "Monday, 8:00 AM - 5:00 PM, 5:30 PM - 9:00 PM, Tuesday"
    proficiency_scores = "Math: 80, Science: 75, History: 60"
    extracurriculars = "Soccer: Monday 4:00 PM - 6:00 PM, Flexibility: 2"
    upcoming_tests = "Science: Unit Test, History: Midterm"
    learning_pace = "Math: 1, Science: 2, History: 3"
    daily_test_scores = "Math: 85, Science: 78, History: 63"
    # subjects = request.args.get('subjects')
    # chapters = request.args.get('chapters')
    # daily_availability = request.args.get('daily_availability')
    # proficiency_scores = request.args.get('proficiency_scores')
    # extracurriculars = request.args.get('extracurriculars')
    # upcoming_tests = request.args.get('upcoming_tests')
    # learning_pace = request.args.get('learning_pace')
    # daily_test_scores = request.args.get('daily_test_scores')
    return {"status" : 200, "data" : gen_schedule( 
        subjects,
        chapters,
        daily_availability,
        proficiency_scores,
        extracurriculars,
        upcoming_tests,
        learning_pace,
        daily_test_scores                
                   )}

@app.route('/notes', methods=['GET'])
def notes():
    file_url = request.args.get('file_url')
    interests = request.args.get('interests')
    topic = request.args.get('topic')
    return {"status" : 200, "data" : gen_notes(file_url, interests, topic)}
if __name__ == '__main__':
    app.run(debug=True)
