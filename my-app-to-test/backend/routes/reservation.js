const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  if (!req.body) res.status(400).message("Something went wrong");
  const { checkin, stay, guests, plans, name, specialRequest, total } =
    req.body;

  console.log(req.body);

  // Check username and password (You would typically verify against a database or some authentication service)
  if (checkin && stay && guests && name && total) {
    res.status(201).json({ message: "Reservation confirmed", data: req.body });
  } else {
    res.status(400).json({
      message: "Reservation failed. Required fields are missing",
      data: req.body,
    });
  }
});

// Export the router
module.exports = router;
