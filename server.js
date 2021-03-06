const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());

//Connection base de donnée
connectDB();

//Init middleware
app.use(express.json({ extented: false }));

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/commande", require("./routes/api/commande"));
app.use("/api/plateforme", require("./routes/api/plateforme"));
app.use("/api/post", require("./routes/api/post"));

const PORT = process.env.PORT || 8080;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
