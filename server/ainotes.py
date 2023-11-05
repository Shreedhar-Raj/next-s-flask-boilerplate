import openai
import PyMuPDF

def extract_text_from_pdf(file_path):
    pdf_document = PyMuPDF.open(file_path)
    text = ""
    for page_number in range(len(pdf_document)):
        page = pdf_document.load_page(page_number)
        text += page.get_text()
    pdf_document.close()
    return text

def generate_notes(pdf_text, interests):
    prompt = f"""
    Summarize the following text into notes with headings, subheadings, and notes for each subtopic. Also, generate one question for each topic.

    {pdf_text}

    Further Learning:
    Suggest some fun topics to research based on the content.

    Personalized Learning:
    Provide a list of fun facts with short descriptions related to the following interests: {', '.join(interests)}.

    Questions:
    Generate 5-10 questions about the content.
    """

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                "role": "system",
                "content": "You are a AI notes generation student for a student focused ed-tech tool."
            },
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    return response['choices'][0]['message']['content']

interests = ['']
pdf_file_path = 'document.pdf'

pdf_text = extract_text_from_pdf(pdf_file_path)

notes = generate_notes(pdf_text, interests)
print(notes)