const express = require("express");
const app = express();

const port = 3001;

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello from index.js ... res.send()");
});

app.get("/streams", (req, res) => {
  res.json([
    { id: "1", title: "Tom Kot", description: "Description of deployment on vercel.com", userId: "123456789" },
    { id: "2", title: "Joe Black", description: "Description of building App", userId: "987654321" }
  ]);
});

app.post("/stream", (req, res) => {
  const { id, title, description, userId } = req.body;

  res.send({ status: "STREAM IS CREATED with values (id, title, description, userId, port): ", id, title, description, userId, port });
});

app.listen(port, () => {
  console.log(`SERVER IS RUNNING ON PORT ${port}
VISIT http://localhost:3001`);
});
