const express = require("express");

const app = express();

const { Pool } = require("pg");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const client = require("pg/lib/native/client");

app.use(morgan("dev"));
app.use(bodyParser.json());

const pool = new Pool({
  connectionString: "postgrelink",
});

pool.query(
  `
CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL

)`,
  (err, result) => {
    if (err) console.error("Error creating table users", err);
    else console.log(result);
  }
);

pool.query(
  `
INSERT INTO users (username,email)
VALUES
    ('user1','user1.user1.com'),
    ('user2','user2.user2.com')
    `,
  (err, result) => {
    if (err) console.error("Error seeding table users", err);
    else console.log(result);
  }
);

pool.connect((err, client, done) => {
  if (err) console.error("Connecting error", err);
  else console.log("Connecting to db...");
});

app.get("/", (req, res) => {
  res.send("Ana Sayfa");
});

app.get("/users", (req, res) => {
  pool.query(
    "SELECT COUNT(*) as total_users FROM users; SELECT * from users;",
    (err, result) => {
      if (err) {
        console.error("error users get", err);
        res.status(500).send(err);
      } else {
        const total_users = result[0].rows[0].total_users;
        const users = result[1].rows;
        const response = {
          users,
          total_users,
        };

        res.json(response);
      }
    }
  );
});

app.get("/users/:id", (req, res) => {
  const userID = req.params.id;

  pool.query("SELECT * FROM users WHERE id=$1", [userID], (err, result) => {
    if (err) {
      console.error("error users get", err);
      res.status(500).send(err);
    } else {
      res.json(result.rows[0]);
    }
  });
});

app.post("/users", (req, res) => {
  const { username, email } = req.body;

  if (!username || !email)
    return res
      .status(400)
      .json({ message: "email ve username gereklidir" })
      .send();

  pool.query(
    "INSERT INTO users (username,email) VALUES ($1,$2)",
    [username, email],
    (err, result) => {
      if (err) {
        console.error("error user cant created", err);
        res.status(500).send(err);
      } else {
        res.status(201).send("Users successfully created");
      }
    }
  );
});

app.put("/users/:id", (req, res) => {
  const userID = req.params.id;
  const { username, email } = req.body;

  if (!username || !email)
    return res
      .status(400)
      .json({ message: "email ve username gereklidir" })
      .send();

  pool.query(
    "UPDATE users SET username = $1, email = $2 WHERE id = $3",
    [username, email, userID],
    (err, result) => {
      if (err) {
        console.error(`error userID:${userID} cant updated`, err);
        res.status(500).send(err);
      } else {
        res.status(203).send("Users successfully updated");
      }
    }
  );
});

app.delete("/users/:id", (req, res) => {
  const userID = req.params.id;

  pool.query("DELETE FROM users WHERE id=$1", [userID], (err, result) => {
    if (err) {
      console.error(`error userID:${userID} cant deleted`, err);
    } else {
      res.status(204).send("Users successfully deleted");
    }
  });
});

app.listen(3000, () => {
  console.log("Server is running...");
});
