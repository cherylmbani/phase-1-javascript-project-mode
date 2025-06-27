# Herb Hero 

Herb Hero is a simple JavaScript web app that fetches and displays a list of herbs from a mocked JSON server, allows users to view details, submit new herbs, filter herbs by benefits, and even give their feedback.

---

## Phase 1 Project Guidelines

### Learning Goals

- Design and architect features across a frontend
- Communicate and collaborate in a technical environment
- Integrate JavaScript and an external API
- Debug issues in small- to medium-sized projects
- Build and iterate on a project MVP

---

## Technologies Used

- HTML
- CSS
- JavaScript
- JSON Server, db.json

---

## Features

- Fetch and display a list of herbs
- View detailed herb info on click
- Submit new herbs via form
- Filter herbs by benefit
- Thumbs up / thumbs down interaction (like/dislike)

---

## Getting Started
### Live Site

Check out the deployed app here:  
[Herb Hero on GitHub Pages](https://your-username.github.io/phase-1-javascript-project-mode)


### Prerequisites

- [Node.js](https://nodejs.org/)
- JSON Server (`npm install -g json-server`)

### Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/phase-1-javascript-project-mode
   cd phase-1-javascript-project-mode
   ```

2. Install dependencies (if any):
   ```bash
   npm install
   ```

3. Start the JSON Server:
   ```bash
   json-server --watch db.json
   ```

4. Open `index.html` in your browser to run the app.

---

## Folder Structure

```
phase-1-javascript-project-mode
│
├── index.html         # Main HTML structure
├── styles.css         # App styling
├── index.js             # Main JS logic
└── db.json            # Mock herb data for JSON Server
```

---

## API Endpoints (JSON Server)

- `GET /herbs` – Get all herbs
- `POST /herbs` – Add a new her
---

## Sample `db.json`

```json
{
  "herbs": [
    {
      "id": 1,
      "name": "Chamomile",
      "image": "https://example.com/chamomile.jpg",
      "benefit": "relaxation",
      "description": "Chamomile is known for promoting relaxation and helping with sleep.",
      "likes": 5,
      "dislikes": 2
    }
  ]
}
```

---

## Future Improvements

- Add search functionality
- Add edit/delete button
---

## Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -am 'Add feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Create a pull request

---

## Author

- GitHub: [cherylmbani](https://github.com/cherylmbani)
- Email: cherylmbani45@gmail.com

---

## License

MIT License

Permission is granted, free of charge, to use, copy, modify,  
and distribute this software for any purpose, with or without  
modification, subject to the following conditions:

The above copyright notice and this permission notice  
shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.
