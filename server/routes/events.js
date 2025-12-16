
const express = require("express");
const Event = require("../models/Event");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/", auth, async (req, res) => {
  try {
    const event = await Event.create({
      ...req.body,
      capacity: Number(req.body.capacity),
      createdBy: req.user.id,
    });
    res.json(event);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

router.get("/", async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

module.exports = router;
