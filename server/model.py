import openai
import re
import os
from datetime import datetime, timedelta

openai.api_key = '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'
def fix_schedule(subjects, chapters, daily_availability, proficiency_scores, extracurriculars, upcoming_tests, learning_pace, daily_test_scores):
    subjects = "{subjects}"
    chapters = "{chapters}"
    daily_availability = "{daily_availability}" #day, times available, times busy, next day
    proficiency_scores = "{proficiency_scores}" #subject and score
    extracurriculars = "{extracurriculars}" #names, days and times, flexibility
    upcoming_tests = "{upcoming_tests}" #test, type of test
    learning_pace = "{learning_pace}" #1, 2, 3
    daily_test_scores = "{daily_test_scores}" #to be ignored first time, based on daily diagnostic testing.


    def parse_schedule(day_schedule):
        day, *events = day_schedule
        day_num = int(re.search(r'\d+', day).group())
        parsed_events = []
        session_counter = 1
        for event in events:
            event_type, details = event.split(': ', 1)
            time_match = re.search(r'(\d+:\d+) - (\d+:\d+)', details)
            if time_match is None:
                print(f"Error: no time match found in '{details}'")
                continue  # Skip this event
            
            start_time_str, end_time_str = time_match.groups()
            subject_or_activity = details.split(', ')[-1] if ',' in details else ''
            
            parsed_event = {
                "session": session_counter,
                "title": f"{event_type} ({subject_or_activity})" if subject_or_activity else event_type,
                "from": start_time_str,
                "to": end_time_str
            }
            parsed_events.append(parsed_event)
            session_counter += 1

        return {"day": day_num, "sessions": parsed_events}


    prompt = f"""
    You are a scheduling assistant for school students. You will use information about the student's schedule such as their subjects, their chapters for each subject, their proficiency score in each subject, and their available times throughout the week as well as the times they are busy. You will also receive information about the student's extracurricular activities, and the timings and days, along with the level of flexibility from 1 to 3 where 1 is not flexible, 3 is most flexible. You will also receive information on the student's upcoming tests, the subject for the test and the topics tested, as well as the type of test, the types include revision tests, unit tests, midterms and final exams, in order of increasing priority. Next, you will receive information on the student's learning pace between 1 to 3 for different subjects, 1 being the fastest, 3 being the slowest. You should use all this information to create the best schedule possible on a weekly basis for the student. You will also be given a datapoint named daily test scores, this is based on daily testing the student will do, the scores will be fed to you for the student's subjects and should be factored in by you in the creation of the schedule, if the value of daily test scores is 0, ignore the datapoint. Here is the relevant information about the student's schedule:
    Subjects: {subjects}
    Chapters: {chapters}
    Daily Availability: {daily_availability}
    Proficiency Scores: {proficiency_scores}
    Extracurricular Activities: {extracurriculars}
    Upcoming Tests: {upcoming_tests}
    Learning Pace: {learning_pace}
    Daily Test Scores: {daily_test_scores}

    Based on the above information, create a weekly study schedule ensuring a balanced approach towards each subject, 
    factoring in the proficiency scores, extracurricular activities and their flexibility, upcoming tests and their priority, and the student's learning pace for each subject. Make sure to include breaks as well and schedule time everyday for small progress tests at the end of the work day based on the available timings. 
    Also, suggest any necessary compromises and adjustments to improve the performance, this can include: moving a flexibility 3 extracurricular activity if a final exam for a subject with a low proficiency score is upcoming (this is just an example.)

    Your answer should be in the following format:
    DAY 1:
    STUDY SESSION: start time - end time, TOPIC TO BE STUDIED
    BREAK: start time - end time
    EXTRACURRICULAR: start time - end time, NAME
    STUDY SESSION: start time - end time, TOPIC TO BE STUDIED
    END OF DAY TEST: start time - end time
    COMPROMISES: "list compromises that can be made as mentioned above"
    (this is just an example, and factor in the study sessions, breaks, extracurriculars based on the student's entered information.)
    Repeat this for DAY 2-7. Make sure all the times are in HH:MM format.
    """


    response = openai.Completion.create(
        model="text-davinci-003",
        prompt=prompt,
        max_tokens=2000,
        n=1,
        temperature=0.5,
        top_p=1.0,
        frequency_penalty=0.0,
        presence_penalty=0.0
    )



    generated_schedule = response['choices'][0]['text'].strip().split('\n\n')
    parsed_output = {}
    for day_schedule in generated_schedule:
        day_schedule_lines = day_schedule.strip().split('\n')
        parsed_day_schedule = parse_schedule(day_schedule_lines)
        parsed_output.update(parsed_day_schedule)



    parsed_output = []
    for day_schedule in generated_schedule:
        day_schedule_lines = day_schedule.strip().split('\n')
        parsed_day_schedule = parse_schedule(day_schedule_lines)
        parsed_output.append(parsed_day_schedule)
        
    return parsed_output