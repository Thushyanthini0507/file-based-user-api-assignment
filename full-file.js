import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

const users = [
  {
    id: 1,
    name: "Thusi",
    email: "thusi@example.com",
  },
  {
    id: 2,
    name: "kala",
    email: "kala@example.com",
  },
  {
    id: 3,
    name: "thanu",
    email: "thanu@example.com",
  },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json(user);
});

app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email || "no-email@example.com",
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
