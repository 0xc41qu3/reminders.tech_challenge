import express from "express";

const app = express();
app.use(express.json());

app.get("/auth", (_, res) => res.send({ authorized: Math.random() < 0.5 }));

app.listen(3001, () => console.log("Server connected on port 3001."));
