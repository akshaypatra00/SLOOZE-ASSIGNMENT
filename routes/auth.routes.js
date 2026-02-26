const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require
const prisma = new

// POST /auth/login: "Email an
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign
    },
    "SECRET_KEY",
    { expiresIn: "1h" }
  );

  res.json({ token });
});

module.exports = router;
