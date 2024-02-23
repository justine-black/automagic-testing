const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { email } = req.body;

  console.log(req.body);

  if (email === "test@test.com") {
    res
      .status(200)
      .json({ message: "Password reset link was sent to your email" });
  } else {
    res.status(404).json({
      message: "The email address provided does not exist in our system",
    });
  }
});

// Export the router
module.exports = router;
