import express from "express";
import database from "nedb";
const app = express();

// SETTING
app.use(express.urlencoded({ extended: false }));

// DATABASE & POST ROUTE

const api = new database({
  filename: "database.db",
  autoload: true,
});

app.post("/api", async (req, res) => {
  const contact = [
    {
      Firstname: req.body.Firstname,
      Lastname: req.body.Lastname,
      Email: req.body.Email,
      Msg: req.body.Message,
    },
  ];

  try {
    api.insert({
      DB: contact,
    });
    res.redirect("http://localhost:3000");
  } catch {
    res
      .status(400)
      .send(
        `Internal Server Error, Sorry for the inconvenience ` + req.body.name
      );
  }
});

app.listen(3001);
