const express = require("express");
const { randomUUID, GUID } = require("crypto");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const users = [];

app.get("/users", (req, res) => {
  return res.json(users);
});

app.post("/users", (req, res) => {
  const { name, email, function: func, password } = req.body;

  if (!name || !email || !func || !password) {
    return res.status(400).json({ error: "Faltando campos obrigatórios" });
  }

  const newUser = {
    id: randomUUID(),
    name,
    email,
    function: func,
    password,
  };

  users.push(newUser);

  return res.status(201).json(newUser);
});

app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, function: func, password } = req.body;

  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return res.status(404).json({ error: "Usuário não encontrado" });
  }

  if (!name || !email || !func || !password) {
    return res.status(400).json({ error: "Faltando campos obrigatórios" });
  }

  const updatedUser = {
    id,
    name,
    email,
    function: func,
    password,
  };

  users[userIndex] = updatedUser;

  return res.status(200).json(updatedUser);
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;

  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return res.status(404).json({ error: "Usuário não encontrado" });
  }

  const deletedUser = users.splice(userIndex, 1)[0];

  return res.status(200).json(deletedUser);
});
