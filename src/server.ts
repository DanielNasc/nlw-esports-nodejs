import express from "express";

const app = express();
const PORT = 3000

app.get("/", (_, res) => {
  return res.json([
    { id: 1, name: "cccounte" },
    { id: 2, name: "malu" },
  ])
})

app.listen(PORT, () => console.log(`server running at port ${PORT}`))
