const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { email, password } = req.body;

  console.log(req.body);

  // Check username and password (You would typically verify against a database or some authentication service)
  if (email === "test@test.com" && password === "testing123!") {
    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid username or password" });
  }
});

// Export the router
module.exports = router;
