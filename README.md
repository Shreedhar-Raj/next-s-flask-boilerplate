# Tech Stack
- NextJS version 13
- TailwindCSS
- Flask
- Python

# Running the Application

Make sure you have
- Git
- Python 3.11.x higher
- Node 19.x or higher
- NPM
- 
First you need to clone the repository

  ```
  git clone https://github.com/Shreedhar-Raj/nextjs-flask-boilerplate.git
  ```


   ```
   cd nextjs-flask-boilerplate
   ```
## To run the client
```
cd client && npm install
```

2. Build App
   ```npm run build```
3. Run Dev mode
   ```npm run dev```
4. Run App mode
   ```npm run start```

## To run the server

```
cd server
```

1. Initiate virtual environment
   ```
   python3 -m pip install --user virtualenv
   python3 -m venv venv
   source venv/bin/activate
   ```
2.  Install dependancies
   
   ```
   python3 -m pip install -r requirements.txt
   ```
3. Run server with flask
   ```
   flask run
   ```
   or
   ```
   flask run --debug
   ```
5. Run server using gunicorn
   ```
   gunicorn --config gunicorn_config.py app:app
   ```
