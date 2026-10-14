# Express.js Student API

A beginner-friendly Express project with routes separated from business logic.

## Requirements
- Node.js and npm installed
- Visual Studio Code

## Run in VS Code
1. Extract the ZIP file.
2. Open the extracted `student-app` folder in VS Code.
3. Open Terminal → New Terminal.
4. Run:

   ```bash
   npm install
   npm start
   ```

5. Visit `http://localhost:3000/students` in your browser.

## Endpoints

| Method | URL | Purpose |
|---|---|---|
| GET | `/students` | List all students |
| GET | `/students/1` | Get student with ID 1 |
| POST | `/students` | Add a student |
| PUT | `/students/1` | Update student with ID 1 |
| DELETE | `/students/1` | Delete student with ID 1 |

### Example POST body
Use Postman or Thunder Client with `Content-Type: application/json`:

```json
{
  "name": "Amit",
  "course": "BTech"
}
```

## File responsibilities
- `app.js`: creates the Express app and mounts `/students`.
- `routes/studentRoutes.js`: maps endpoints to controller functions.
- `controllers/studentController.js`: contains student business logic.

## Note
This starter project uses an in-memory array, not a database. Data resets when the server restarts.
