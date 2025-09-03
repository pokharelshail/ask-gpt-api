#AI Prototype Server

A simple Express server with OpenAI integration for prototyping AI-powered endpoints.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/postman-ai-prototype.git
   cd postman-ai-prototype
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Environment Variables

For security, the `.env` file is **not included** in the repository.  
You must create your own `.env` file in the project root before running the server.

#### How to Create a `.env` File

1. In the root directory of your project, create a file named `.env`.

2. Add the following content (replace with your actual OpenAI API key):

   ```
   OPENAI_API_KEY=your_openai_api_key_here
   PORT=3000
   ```

   - `OPENAI_API_KEY`: Your secret API key for accessing OpenAI services.
   - `PORT`: (Optional) The port your server will run on. Defaults to `3000` if not specified.

**Tips for structuring your `.env` file:**

- Each variable should be on its own line in the format `KEY=value`.
- Do **not** use quotes around values.
- Add any other environment variables your project requires in the same format.
- Restart your server after making changes to `.env`.

### Running the Server

Start the server with:

```bash
npm run start-server
```

The server will run at [http://localhost:3000](http://localhost:3000) (or your specified port).

### API Endpoints

#### `GET /`

Returns a simple hello message.

#### `POST /data`

Accepts JSON data and returns it with a timestamp.

**Example Request:**

```json
{
  "name": "Alice",
  "age": 30
}
```

#### `POST /ai`

Accepts a prompt and returns an AI-generated response.

**Example Request:**

```json
{
  "prompt": "Tell me a joke."
}
```

**Example Response:**

```json
{
  "output": "Why did the chicken cross the road? To get to the other side!"
}
```

### Notes

- The `.env` file is listed in `.gitignore` and should **never** be committed to version control.
- Keep your API keys and other secrets safe.
- If you encounter errors, check that your `.env` file is present and correctly formatted.

---

\*\*For questions or issues, please open
