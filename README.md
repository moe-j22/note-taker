# Note Taker App

## Description

The Note Taker App is a simple web application that allows users to take and organize notes. Users can create, save, view, and delete notes using this application.

## Features

- Create new notes with a title and text.
- Save notes to the application.
- View existing notes.
- Delete notes when they are no longer needed.

## Getting Started

1. Clone this repository to your local machine.
    ```bash
   git clone https://github.com/your-username/note-taker.git
2. Navigate to the project directory.
   cd note-taker

3. Install dependencies.
  npm install

4. Run the application.
  node server.js

5. Open your web browser and go to http://localhost:3000 to use the Note Taker App.

   ## Technologies Used

- **Node.js**
- **Express.js**
- **HTML**
- **CSS**
- **JavaScript**

## File Structure

- **`public/`**: Contains static files (CSS, JS).
- **`index.html`**: Landing page HTML.
- **`notes.html`**: Notes page HTML.
- **`server.js`**: Server-side code for handling requests.
- **`db.json`**: JSON file for storing notes data.
- **`package.json`**: NPM package file.

## API Routes

- **GET `/api/notes`**: Retrieve all saved notes.
- **POST `/api/notes`**: Save a new note.
- **DELETE `/api/notes/:id`**: Delete a note by ID.


