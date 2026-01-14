const express = require("express");
const cors = require("cors");
const testRoutes = require("./routes/test.routes");
const restaurantRoutes = require("./routes/restaurant.routes");
const orderRoutes = require("./routes/order.routes");




const authRoutes = require("./routes/auth.routes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

// auth routes
app.use("/auth", authRoutes);
app.use("/test", testRoutes);
app.use("/restaurants", restaurantRoutes);
app.use("/orders", orderRoutes);




const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
