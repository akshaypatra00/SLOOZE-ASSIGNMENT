const express = require("express");
const { PrismaClient } = require("@prisma/client");
const auth = require("../middleware/auth");

const prisma = new PrismaClient();
const router = express.Router();

// GET /restaurants (with menu items)
router.get("/", auth, async (req, res) => {
  const { role, country } = req.user;

  const restaurants = await prisma.restaurant.findMany({
    where: role === "ADMIN" ? {} : { country },
    include: {
      menuItems: true,
    },
  });

  res.json(restaurants);
});

module.exports = router;
