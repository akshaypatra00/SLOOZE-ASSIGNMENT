const express = require("express");
const { PrismaClient } = require("@prisma/client");
const auth = require("../middleware/auth");
const role = require("../middleware/role");

const prisma = new PrismaClient();
const router = express.Router();

// CREATE ORDER (all roles)


router.post("/", auth, async (req, res) => {
  const order = await prisma.order.create({
    data: {
      userId: req.user.id,
      status: "CREATED",
    },
  });

  res.json(order);
});

// CHECKOUT (ADMIN + MANAGER)
router.post("/checkout", auth, role(["ADMIN", "MANAGER"]), async (req, res) => {
  res.json({ message: "Order checked out successfully" });
});

// CANCEL (ADMIN + MANAGER)
router.post("/cancel", auth, role(["ADMIN", "MANAGER"]), async (req, res) => {
  res.json({ message: "Order cancelled successfully" });
});

module.exports = router;
