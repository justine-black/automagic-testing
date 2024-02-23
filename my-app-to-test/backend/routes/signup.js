const express = require("express");
const router = express.Router();

// POST /login route handler
router.post("/", (req, res) => {
  const { firstName, lastName, email, password, aboutMe } = req.body;

  console.log(req.body);

  // Check username and password (You would typically verify against a database or some authentication service)
  if (firstName && lastName && email && password && aboutMe) {
    res.status(200).json({ message: "Signup successful", data: req.body });
  } else {
    res.status(400).json({ message: "Signup failed", data: req.body });
  }
});

// Export the router
module.exports = router;
