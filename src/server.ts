import express, { Request } from "express";
const app = express();

app.use(express.json());

app.get("/", () => {
  const user = {
    name: "Breno",
    age: 25,
  };

  return user;
});

app.listen(
  {
    port: 3333,
  },
  () => {
    console.log("Server is running!");
  }
);
