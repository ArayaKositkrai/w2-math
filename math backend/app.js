import express from "express";
import cors from "cors";

const host = "localhost";
const port = 3000;

const app = express();

app.use(cors());
app.use(express.json());

// Endpoint: Add a and b
app.post("/aAddB", (req, res) => {
  console.log(`Request body: ${JSON.stringify(req.body)}`);

  const { a, b } = req.body;
  if (a === undefined || typeof a !== "number") {
    return res.status(400).json({ error: 'Invalid parameter "a"' });
  }
  if (b === undefined || typeof b !== "number") {
    return res.status(400).json({ error: 'Invalid parameter "b"' });
  }
  const result = a + b;

  const response = { message: "success", result };
  console.log(`res body : ${result}`);
  res.json(response);
});

// Endpoint: Add squares of a and b
app.post("/a2AddB2", (req, res) => {
  const { a, b } = req.body;
  if (a === undefined || typeof a !== "number") {
    return res.status(400).json({ error: 'Invalid parameter "a"' });
  }
  if (b === undefined || typeof b !== "number") {
    return res.status(400).json({ error: 'Invalid parameter "b"' });
  }

  const result = a ** 2 + b ** 2;

  const response = { message: "success", result };
  res.json(response);
});

// Endpoint: a raised to the power of b
app.post("/aPowB", (req, res) => {
  const { a, b } = req.body;
  if (a === undefined || typeof a !== "number") {
    return res.status(400).json({ error: 'Invalid parameter "a"' });
  }
  if (b === undefined || typeof b !== "number") {
    return res.status(400).json({ error: 'Invalid parameter "b"' });
  }

  const result = a ** b;

  const response = { message: "success", result };
  res.json(response);
});

// Start the server
app.listen(port, () =>
  console.log(`Server is running on http://${host}:${port}`)
);
